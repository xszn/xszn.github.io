import { x as createVNode, j as Fragment, _ as __astro_tag_component__ } from './astro/server_B2DYuZLs.mjs';
import { B as Button } from './Button_B9KQGQXu.mjs';
import 'react/jsx-runtime';
import 'react';
import { N as Notice } from './Notice_Du-e7p_l.mjs';
import 'react-lite-youtube-embed';
/* empty css                                    */
import { T as Tabs, a as Tab } from './Tab_BGPcyalg.mjs';
import 'clsx';

const frontmatter = {
  "title": "RustDesk：远程桌面软件",
  "meta_title": "",
  "description": "",
  "date": "2025-06-16T00:00:00.000Z",
  "image": "/images/posts/2025/06/16/rustdesk.webp",
  "categories": ["工具"],
  "authors": ["John Doe"],
  "tags": ["开源软件"],
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "rustdesk-使用教程",
    "text": "RustDesk 使用教程"
  }, {
    "depth": 2,
    "slug": "下载",
    "text": "下载"
  }, {
    "depth": 2,
    "slug": "安装",
    "text": "安装"
  }, {
    "depth": 2,
    "slug": "使用说明",
    "text": "使用说明"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    del: "del",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "RustDesk 是一款支持远程桌面控制、文件传输和屏幕分享的工具，允许用户自建服务器保障数据安全。它适用于远程技术支持、办公协作、设备管理和个人远程访问。支持 Windows、macOS、Linux、Android、iOS 和网页端，覆盖多种主流平台，功能丰富且易用。"
    }), "\n", createVNode(_components.h2, {
      id: "rustdesk-使用教程",
      children: "RustDesk 使用教程"
    }), "\n", createVNode(Notice, {
      type: "tip",
      children: createVNode(_components.del, {
        children: ["视频教程请移步 YouTube 观看《", createVNode(_components.a, {
          href: "",
          children: "RustDesk 使用教程"
        }), "》。"]
      })
    }), "\n", createVNode(_components.h2, {
      id: "下载",
      children: "下载"
    }), "\n", createVNode(Button, {
      label: "RustDesk 下载",
      link: "https://github.com/rustdesk/rustdesk/releases/latest",
      style: "solid"
    }), "\n", createVNode(_components.h2, {
      id: "安装",
      children: "安装"
    }), "\n", createVNode(Tabs, {
      "client:load": true,
      "client:component-path": "@/shortcodes/Tabs",
      "client:component-export": "default",
      "client:component-hydration": true,
      children: [createVNode(Tab, {
        name: "桌面端安装",
        children: createVNode(_components.p, {
          children: "Windows、macOS、Linux 用户可直接下载安装包进行图形界面安装，支持静默安装和命令行参数自定义安装路径、快捷方式等。"
        })
      }), createVNode(Tab, {
        name: "移动端安装",
        children: createVNode(_components.p, {
          children: "Android 和 iOS 用户可通过官方应用商店下载安装。"
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "客户端配置"
      })
    }), "\n", createVNode(_components.p, {
      children: "启动客户端后，用户设备会生成唯一 ID 和随机密码，用于远程连接。"
    }), "\n", createVNode(_components.p, {
      children: "在客户端主界面输入目标设备的RustDesk ID。"
    }), "\n", createVNode(_components.p, {
      children: "点击“连接”，对方设备会收到连接请求。"
    }), "\n", createVNode(_components.p, {
      children: "对方确认后即可开始远程控制会话。"
    }), "\n", createVNode(_components.p, {
      children: "支持远程桌面控制、文件传输、聊天等功能。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "远程控制"
      })
    }), "\n", createVNode(_components.p, {
      children: "支持屏幕共享、鼠标与键盘控制、文件传输（支持多选和路径导航）、音频捕获等功能。"
    }), "\n", createVNode(_components.p, {
      children: "Android 客户端支持鼠标模式和触摸模式切换，新增屏幕分享和文件系统分享功能。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "高级设置"
      })
    }), "\n", createVNode(_components.p, {
      children: "支持命令行参数进行静默安装、固定密码设置、权限管理等高级操作。管理员可通过 Web 控制台管理设备、用户和连接策略，支持用户账户管理和共享地址簿（Pro 版本）。"
    }), "\n", createVNode(_components.p, {
      children: "RustDesk 是一款开源且支持自托管的远程桌面软件，安全可靠，功能丰富，适合个人和企业使用。使用时要警惕陌生人安装请求，避免骗局。自建服务器需正确配置安全密钥，部分平台如 iOS 有限制。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "参考资料"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://rustdesk.com/zh-cn/",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "RustDesk 官网"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://rustdesk.com/docs/zh-cn/client/",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "RustDesk 客户端 - RustDesk 文档"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/rustdesk/rustdesk",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "RustDesk GitHub"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/rustdesk/rustdesk/wiki/FAQ",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "FAQ · rustdesk/rustdesk Wiki - GitHub"
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

const url = "src/content/posts/2025/06/rustdesk.mdx";
const file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/06/rustdesk.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/06/rustdesk.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
