import { defineConfig } from "vitepress";
import { readFileSync } from "fs";
import { getSideBar } from "./sidebar";
import TexConfig from "./tex";

export default defineConfig({
  title: "montmorillonite's",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: "/logo.svg",

    search: { provider: "local" },

    outline: {
      level: [2, 6],
      label: "Content"
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Sponsor", link: "/sponsor" },
    ],

    sidebar: getSideBar({ defaultDirName: "Others", loadFile: false }),

    socialLinks: [
      { icon: "github", link: "https://github.com/montmorill" },
      { icon: "discord", link: "https://discord.gg/r2ekKqAkpn" },
      {
        icon: { svg: readFileSync("./public/bilibili.svg", "utf-8") },
        link: "https://space.bilibili.com/648265393",
      },
      {
        icon: { svg: readFileSync("./public/QQ.svg", "utf-8") },
        link: "/links/QQ?2696519745",
      },
    ],
  },

  ...TexConfig,
});
