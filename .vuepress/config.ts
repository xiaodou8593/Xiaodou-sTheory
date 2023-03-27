import { defineUserConfig } from "vuepress";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { path } from '@vuepress/utils';

import theme from "./theme.js";

export default defineUserConfig({
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    })
  ],

  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "小豆命令书",
      description: "小豆的命令理论",
    },
  },

  theme,

  shouldPrefetch: false,
});
