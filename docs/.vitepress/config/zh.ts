import { defineConfig } from "vitepress";

export default defineConfig({
  themeConfig: {
    darkModeSwitchLabel: "深色模式",
    lastUpdatedText: "上次更新",
    outlineTitle: "纲要",
    nav: [
      { text: "主页", link: "/zh/" },
      { text: "赞助", link: "/zh/sponsor" },
    ],
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: { buttonText: "搜索..." },
              modal: {
                displayDetails: "显示细节",
                resetButtonTitle: "清除查询条件",
                noResultsText: "无法找到相关结果",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
  },
});
