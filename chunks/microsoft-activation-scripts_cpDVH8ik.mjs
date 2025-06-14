import { x as createVNode, j as Fragment, _ as __astro_tag_component__ } from './astro/server_B2DYuZLs.mjs';
import { B as Button } from './Button_B9KQGQXu.mjs';
import 'react/jsx-runtime';
import 'react';
import { N as Notice } from './Notice_DwmVovds.mjs';
import 'react-lite-youtube-embed';
/* empty css                                    */
import { T as Tabs, a as Tab } from './Tab_BGPcyalg.mjs';
import { I as Image } from './Image_CXGKaHf-.mjs';
import 'clsx';

const frontmatter = {
  "title": "Microsoft Activation Scripts：KMS 激活工具，Windows、Office 永久激活不求人",
  "meta_title": "",
  "description": "Microsoft Activation Scripts (MAS) 是一个开源工具，帮助用户激活 Windows 和 Office。它支持多种激活方式，包括永久和临时方案，适用于 Windows 7 到 11 以及 Office 2013 到 365。无论是个人还是企业用户，遇到激活问题时，MAS 都能提供简单可靠的解决方案。",
  "date": "2025-04-13T06:08:33.000Z",
  "image": "/images/posts/2025/04/13/microsoft-activation-scripts.webp",
  "categories": ["工具"],
  "authors": ["John Doe"],
  "tags": ["windows", "开源软件", "激活工具", "脚本程序"],
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "microsoft-activation-scripts-使用教程",
    "text": "Microsoft Activation Scripts 使用教程"
  }, {
    "depth": 3,
    "slug": "下载",
    "text": "下载"
  }, {
    "depth": 3,
    "slug": "安装",
    "text": "安装"
  }, {
    "depth": 3,
    "slug": "使用说明",
    "text": "使用说明"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Microsoft Activation Scripts（MAS）是一个开源工具，帮助用户激活 Windows 和 Office。它支持多种激活方式，包括永久和临时方案，适用于 Windows 7 到 11 以及 Office 2013 到 365。无论是个人还是企业用户，遇到激活问题时，MAS 都能提供简单可靠的解决方案。"
    }), "\n", createVNode(_components.h2, {
      id: "microsoft-activation-scripts-使用教程",
      children: "Microsoft Activation Scripts 使用教程"
    }), "\n", createVNode(Notice, {
      type: "note",
      children: "因 YouTube 的《社区准则》，无视频教程。"
    }), "\n", createVNode(_components.h3, {
      id: "下载",
      children: "下载"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "powershell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "irm https:"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "//"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "get.activated.win | iex"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "或"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "powershell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "irm https:"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "//"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "massgrave.dev"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "get | iex"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "或"
    }), "\n", createVNode(Button, {
      label: "Microsoft Activation Scripts 下载",
      link: "https://github.com/massgravel/Microsoft-Activation-Scripts/archive/refs/heads/master.zip",
      style: "solid"
    }), "\n", createVNode(_components.h3, {
      id: "安装",
      children: "安装"
    }), "\n", createVNode(Tabs, {
      "client:load": true,
      "client:component-path": "@/shortcodes/Tabs",
      "client:component-export": "default",
      "client:component-hydration": true,
      children: [createVNode(Tab, {
        name: "PowerShell",
        children: createVNode(_components.p, {
          children: "PowerShell 方法只需直接复制粘贴并执行指定命令即可完成操作。"
        })
      }), createVNode(Tab, {
        name: "命令脚本",
        children: createVNode(_components.p, {
          children: "只需运行解压后的脚本文件即可。"
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/04/13/microsoft-activation-scripts-gui.webp",
      alt: "Microsoft Activation Scripts 界面"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "选择激活选项"
      })
    }), "\n", createVNode(_components.p, {
      children: "运行脚本后，根据提示选择所需的激活方式完成激活："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["按 ", createVNode(_components.code, {
          children: "1"
        }), " 激活 Windows（HWID 方法）。"]
      }), "\n", createVNode(_components.li, {
        children: ["按 ", createVNode(_components.code, {
          children: "2"
        }), " 激活 Office（Ohook 方法）。"]
      }), "\n"]
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/04/13/microsoft-activation-scripts-windows-ji-huo.webp",
      alt: "MAS Windows 激活"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/04/13/microsoft-activation-scripts-office-ji-huo.webp",
      alt: "MAS Office 激活"
    }), "\n", createVNode(_components.p, {
      children: "MAS 是一款免费、高效的激活工具，支持 Windows 和 Office 的多种激活方式，操作简单。使用时需注意：确保下载来源安全，硬件变更后可能需要重新激活，部分产品（如 Mac 版 Office）不适用。它是个人和企业用户解决激活问题的便捷选择。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "参考资料"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://massgrave.dev/",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "Microsoft Activation Scripts 官网"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://massgrave.dev/hwid",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "HWID Activation - MAS"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://massgrave.dev/ohook",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "Ohook Activation - MAS"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/massgravel/Microsoft-Activation-Scripts",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "Microsoft Activation Scripts GitHub"
        })
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/posts/2025/04/microsoft-activation-scripts.mdx";
const file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/04/microsoft-activation-scripts.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/04/microsoft-activation-scripts.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
