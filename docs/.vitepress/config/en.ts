import { defineConfig } from "vitepress";

export default defineConfig({
  themeConfig: {
    outline: { level: "deep" },
    nav: [
      { text: "Home", link: "/" },
      { text: "Sponsor", link: "/sponsor" },
    ],
  },
});
