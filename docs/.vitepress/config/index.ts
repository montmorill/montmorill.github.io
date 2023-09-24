import { defineConfig } from "vitepress";
import SharedConfig from "./shared";
import enConfig from "./en";
import zhConfig from "./zh";

export default defineConfig({
  ...SharedConfig,

  locales: {
    root: {
      label: "English",
      ...enConfig,
    },

    zh: {
      lang: "zh",
      label: "简体中文",
      ...zhConfig,
    },
  },
});
