import startCase from "lodash/startCase";
import { sep } from "path";
import { glob } from "glob";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { load, dump } from "js-yaml";

type Sidebar = SidebarGroup[] | SidebarMulti;

interface SidebarMulti {
  [path: string]: SidebarGroup[];
}

interface SidebarGroup {
  text: string;
  items: SidebarItem[];
  collapsible?: boolean;
  collapsed?: boolean;
}

interface SidebarItem {
  text: string;
  link: string;
}

interface Options {
  rootDir?: string;
  defaultDirName?: string;
  ignoreDirectories?: string[];
  ignoreFiles?: string[];
  fileName?: string;
  loadFile?: boolean;
}

function getName(path: string): string {
  return startCase(path.split(sep).pop() || path);
}

function getDirName(path: string): string | undefined {
  let paths = path.split(sep);
  return paths.length > 1 ? startCase(paths[paths.length - 2]) : undefined;
}

function getChildren(parentPath: string, ignoreFiles: string[] = []) {
  return glob
    .sync(parentPath + "/**/*.md")
    .filter(
      (file) =>
        ignoreFiles?.length &&
        ignoreFiles.findIndex((item) => item === file) === -1
    )
    .sort();
}

export function getSideBar(options?: Options): Sidebar {
  const rootDir = options?.rootDir ?? ".";
  const path = rootDir + sep + (options?.fileName ?? "sidebar.yml");

  if (options?.loadFile && existsSync(path))
    return load(readFileSync(path, "utf8")) as Sidebar;

  const files = getChildren(rootDir, options?.ignoreFiles ?? ["index.md"]);

  const sidebar: Sidebar = [];

  files.forEach((item) => {
    if (item.endsWith(".md")) item = item.substring(0, item.length - 3);
    const name = getName(item);
    const dirName = getDirName(item) ?? options?.defaultDirName ?? "";
    item = "/" + item.replace("\\", "/");
    if (
      options?.ignoreDirectories?.length &&
      options?.ignoreDirectories.findIndex((item) => item === dirName) !== -1
    )
      return;
    const index = sidebar.findIndex((sidebar) => sidebar.text === dirName);
    if (index !== -1) {
      if (name.toLowerCase() === "index")
        sidebar[index].items = [
          { text: name, link: item },
          ...sidebar[index].items,
        ];
      else sidebar[index].items.push({ text: name, link: item });
    } else {
      sidebar.push({ text: dirName, items: [{ text: name, link: item }] });
    }
  });

  writeFileSync(path, dump(sidebar));

  return sidebar;
}
