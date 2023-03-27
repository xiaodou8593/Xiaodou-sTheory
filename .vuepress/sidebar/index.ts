import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [
        {
          text: "Chapter0-前言",
          link: "/README.md",
          collapsible: false,
          children: []
        },
        {
            text: "Chapter1-命令与函数",
            link: "/chatper1-命令与函数/1.一切还要从函数说起.md",
            prefix: "/chatper1-命令与函数",
            collapsible: true,
            children: [
              {
                text: "1.一切还要从函数说起",
                link: "1.一切还要从函数说起.md",
                collapsible: true,
                children: [
                  {
                    text: "什么是函数",
                    link: "1.一切还要从函数说起.md/#什么是函数",
                    activeMatch: "1.一切还要从函数说起.md"
                  },
                  {
                    text: "命令也是一种函数",
                    link: "1.一切还要从函数说起.md/#命令也是一种函数",
                    activeMatch: "1.一切还要从函数说起.md"
                  }
                ]
              },
              {
                text: "2.命令函数的基本要素",
                link: "2.命令函数的基本要素.md",
                collapsible: true,
                children: [
                  {
                    text: "输入输出",
                    link: "2.命令函数的基本要素.md/#输入输出",
                    activeMatch: "2.命令函数的基本要素.md"
                  },
                  {
                    text: "运算处理",
                    link: "2.命令函数的基本要素.md/#命令处理",
                    activeMatch: "2.命令函数的基本要素.md"
                  }
                ]
              },
              {
                text: "3.命令函数的组织方式",
                link: "3.命令函数的组织方式.md",
                collapsible: true,
                children: [
                  {
                    text: "顺序",
                    link: "3.命令函数的组织方式.md/#顺序",
                    activeMatch: "3.命令函数的组织方式.md"
                  },
                  {
                    text: "分支",
                    link: "3.命令函数的组织方式.md/#分支",
                    activeMatch: "3.命令函数的组织方式.md"
                  },
                  {
                    text: "递归",
                    link: "3.命令函数的组织方式.md/#递归",
                    activeMatch: "3.命令函数的组织方式.md"
                  },
                  {
                    text: "回调",
                    link: "3.命令函数的组织方式.md/#回调",
                    activeMatch: "3.命令函数的组织方式.md"
                  }
                ]
              }
            ]
          }
      ],
});
