import { defineConfig } from "vitepress";
import { readFileSync } from "node:fs";
import TexConfig from "./tex";

const _ = (platform: string): { svg: string } => ({
  svg: readFileSync(`./public/${platform}.svg`, "utf-8"),
});

export default defineConfig({
  title: "montmorillonite's",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    logo: "/logo.svg",
    search: { provider: "local" },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023 montmorillonite",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/montmorill" },
      { icon: "discord", link: "https://discord.gg/r2ekKqAkpn" },
      { icon: _("bilibili"), link: "https://space.bilibili.com/648265393" },
      { icon: _("QQ"), link: "/links/QQ?2696519745" },
    ],
  },
  ...TexConfig,
});
