import { x as createVNode, k as Fragment, _ as __astro_tag_component__ } from './astro/server_BBoAqXZx.mjs';
import 'react/jsx-runtime';
import 'react';
import { N as Notice } from './Notice_CdAZ0NR2.mjs';
import 'react-lite-youtube-embed';
/* empty css                                    */
import 'marked';
import 'clsx';

const frontmatter = {
  "title": "IDM Activation Script：IDM 激活工具，轻松永久免费使用",
  "meta_title": "IDM Activation Script：IDM 激活工具，轻松永久免费使用",
  "description": "Internet Download Manager（IDM）是一款 Windows 平台上流行的下载工具。不过，IDM 有 30 天的试用期，到期后需要付费购买。为了能够继续免费使用，可以使用 IDM 激活脚本来冻结试用期，达到永久免费使用的目的。",
  "date": "2025-03-24T11:36:40.000Z",
  "image": "/images/posts/2025/03/24/idm-activation-script.webp",
  "categories": ["激活工具"],
  "authors": ["John Doe"],
  "tags": ["开源软件", "脚本"],
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "idm-activation-script-使用教程",
    "text": "IDM Activation Script 使用教程"
  }, {
    "depth": 3,
    "slug": "推荐方法",
    "text": "推荐方法"
  }, {
    "depth": 4,
    "slug": "备用方法",
    "text": "备用方法"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
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
      children: "Internet Download Manager（IDM）是一款 Windows 平台上流行的下载工具。不过，IDM 有 30 天的试用期，到期后需要付费购买。为了能够继续免费使用，可以使用 IDM 激活脚本来冻结试用期，达到永久免费使用的目的。"
    }), "\n", createVNode(_components.h2, {
      id: "idm-activation-script-使用教程",
      children: "IDM Activation Script 使用教程"
    }), "\n", createVNode(_components.p, {
      children: "IDM Activation Script 是一个开源的命令行及窗口化工具，可以激活 IDM 下载管理器。它可以重置 IDM 的试用期，即使 IDM 更新后，激活信息仍然有效。该脚本支持 Windows 7/8/8.1/10/11 等操作系统。"
    }), "\n", createVNode(Notice, {
      type: "note",
      children: ["观看视频教程请移步：", createVNode(_components.a, {
        href: "https://youtu.be/aj9LYo5WzrQ",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
        children: "https://youtu.be/aj9LYo5WzrQ"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "推荐方法",
      children: "推荐方法"
    }), "\n", createVNode(_components.p, {
      children: "打开 PowerShell。右键单击 Windows 开始菜单，选择 PowerShell 或终端管理员（不是 CMD）。"
    }), "\n", createVNode(_components.p, {
      children: "运行脚本。复制并粘贴以下命令到 PowerShell 窗口中，然后按回车键："
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
      children: "按照提示操作。在出现的“IDM Activation Script”窗口中，按照说明进行操作即可。建议选择“Freeze Trial”选项来锁定 30 天试用期。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "/images/posts/2025/03/24/idm-activation-script-window.webp",
        children: createVNode(_components.img, {
          src: "/images/posts/2025/03/24/idm-activation-script-window.webp",
          alt: "IDM Activation Script 推荐方法-IAS"
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "以下为 IDM 30 天试用期已成功冻结为终身试用期截图。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "/images/posts/2025/03/24/idm-activation-script-freeze-trial.webp",
        children: createVNode(_components.img, {
          src: "/images/posts/2025/03/24/idm-activation-script-freeze-trial.webp",
          alt: "IDM Activation Script 推荐方法-IAS Freeze Trial"
        })
      })
    }), "\n", createVNode(Notice, {
      type: "info",
      children: ["如果无法连接到远程服务器，可以尝试使用代理软件开 Tun 模式。如何开 Tun 模式请移步《", createVNode(_components.a, {
        href: "/2025/03/clash-verge-rev",
        children: "Clash Verge Rev 使用教程"
      }), "》。"]
    }), "\n", createVNode(_components.h4, {
      id: "备用方法",
      children: "备用方法"
    }), "\n", createVNode(_components.p, {
      children: ["下载脚本。从 GitHub ", createVNode(_components.a, {
        href: "https://github.com/lstprjct/IDM-Activation-Script/releases",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
        children: "下载 IDM Activation Script"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: ["运行脚本。找到下载的 ", createVNode(_components.code, {
        children: "IAS.cmd"
      }), " 文件，右键单击并选择“以管理员身份运行”。"]
    }), "\n", createVNode(_components.p, {
      children: "选择操作。按照脚本提示，选择“Freeze Trial”选项来冻结试用期。"
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
          children: "lstprjct/IDM-Activation-Script: IDM Activation & Trail Reset Script - GitHub"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/lstprjct/IDM-Activation-Script/releases",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "Releases · lstprjct/IDM-Activation-Script - GitHub"
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
