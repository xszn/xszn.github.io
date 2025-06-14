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
  "title": "IDM Activation Script：IDM 激活工具，轻松永久免费使用",
  "meta_title": "",
  "description": "IDM Activation Script 是一款开源激活脚本，可冻结试用期，实现永久免费使用。它支持 Windows 7 至 11 系统，通过重置试用期和锁定注册表实现激活，且更新后激活信息依然有效。用户可通过命令行或图形界面操作，简单易用，提升 IDM 使用体验。",
  "date": "2025-03-24T11:36:40.000Z",
  "image": "/images/posts/2025/03/24/idm-activation-script.webp",
  "categories": ["工具"],
  "authors": ["John Doe"],
  "tags": ["windows", "开源软件", "激活工具", "脚本程序"],
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "idm-activation-script-使用教程",
    "text": "IDM Activation Script 使用教程"
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
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "IDM Activation Script 是一款开源激活脚本，可冻结试用期，实现永久免费使用。它支持 Windows 7 至 11 系统，通过重置试用期和锁定注册表实现激活，且更新后激活信息依然有效。用户可通过命令行或图形界面操作，简单易用，提升 IDM 使用体验。"
    }), "\n", createVNode(_components.h2, {
      id: "idm-activation-script-使用教程",
      children: "IDM Activation Script 使用教程"
    }), "\n", createVNode(Notice, {
      type: "tip",
      children: ["视频教程请移步 YouTube 观看《", createVNode(_components.a, {
        href: "https://youtu.be/aj9LYo5WzrQ",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
        children: "IDM Activation Script 使用教程"
      }), "》。"]
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
            children: "iex(irm is.gd"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "idm_reset)"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "或"
    }), "\n", createVNode(Button, {
      label: "IDM Activation Script 下载",
      link: "https://github.com/lstprjct/IDM-Activation-Script/releases",
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
          children: ["右键点击 ", createVNode(_components.code, {
            children: "开始"
          }), " 菜单，选择管理员权限的 PowerShell，复制粘贴命令后按回车运行脚本。"]
        })
      }), createVNode(Tab, {
        name: "命令脚本",
        children: createVNode(_components.p, {
          children: ["找到下载的 ", createVNode(_components.code, {
            children: "IAS.cmd"
          }), " 文件，右键选择 ", createVNode(_components.code, {
            children: "以管理员身份运行"
          }), " 来执行脚本。"]
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/03/24/idm-activation-script-cli.webp",
      alt: "IDM Activation Script 界面"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "推荐方法"
      })
    }), "\n", createVNode(_components.p, {
      children: ["在“IDM Activation Script”窗口中按提示操作，建议按 ", createVNode(_components.code, {
        children: "2"
      }), " 选择“Freeze Trial”选项以锁定 30 天试用期，实现永久免费使用。"]
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/03/24/idm-activation-script-shi-yong-qi-dong-jie.webp",
      alt: "IDM Activation Script 试用期冻结"
    }), "\n", createVNode(Notice, {
      type: "info",
      children: "如果无法连接到远程服务器，可以尝试使用代理软件开启 Tun 模式。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "备用方法"
      })
    }), "\n", createVNode(_components.p, {
      children: ["从 GitHub 下载 IDM Activation Script，右键以管理员身份运行 ", createVNode(_components.code, {
        children: "IAS.cmd"
      }), " 文件，按 ", createVNode(_components.code, {
        children: "2"
      }), " 选择“Freeze Trial”冻结试用期。"]
    }), "\n", createVNode(_components.p, {
      children: "IDM Activation Script 是一个实用的工具，可以帮助用户免费使用 IDM。按照上述步骤操作，即可轻松冻结 IDM 的试用期。建议使用 PowerShell 方法，并定期更新脚本以获得最佳效果。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "参考资料"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/lstprjct/IDM-Activation-Script",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "IDM-Activation-Script GitHub"
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

const url = "src/content/posts/2025/03/idm-activation-script.mdx";
const file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/03/idm-activation-script.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/03/idm-activation-script.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
