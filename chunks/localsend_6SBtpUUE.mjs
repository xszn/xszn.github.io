import { x as createVNode, j as Fragment, _ as __astro_tag_component__ } from './astro/server_B2DYuZLs.mjs';
import { B as Button } from './Button_B9KQGQXu.mjs';
import 'react/jsx-runtime';
import 'react';
import { N as Notice } from './Notice_Du-e7p_l.mjs';
import 'react-lite-youtube-embed';
/* empty css                                    */
import { T as Tabs, a as Tab } from './Tab_BGPcyalg.mjs';
import { I as Image } from './Image_CXGKaHf-.mjs';
import 'clsx';

const frontmatter = {
  "title": "LocalSend：文件传输工具，轻松玩转多端互传",
  "meta_title": "",
  "description": "LocalSend 是一款免费开源的跨平台文件分享工具，支持点对点传输，无需中央服务器。适合办公室和家庭快速分享文件。支持 Windows、macOS、Linux、Android 和 iOS 系统，方便不同设备间安全传输。",
  "date": "2025-06-07T00:00:00.000Z",
  "image": "/images/posts/2025/06/07/localsend.webp",
  "categories": ["工具"],
  "authors": ["John Doe"],
  "tags": ["开源软件"],
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "localsend-使用教程",
    "text": "LocalSend 使用教程"
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
    code: "code",
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
      children: "LocalSend 是一款免费开源的跨平台文件分享工具，支持点对点传输，无需中央服务器。适合办公室和家庭快速分享文件。支持 Windows、macOS、Linux、Android 和 iOS 系统，方便不同设备间安全传输。"
    }), "\n", createVNode(_components.h2, {
      id: "localsend-使用教程",
      children: "LocalSend 使用教程"
    }), "\n", createVNode(Notice, {
      type: "tip",
      children: createVNode(_components.del, {
        children: ["视频教程请移步 YouTube 观看《", createVNode(_components.a, {
          href: "",
          children: "LocalSend 使用教程"
        }), "》。"]
      })
    }), "\n", createVNode(_components.h2, {
      id: "下载",
      children: "下载"
    }), "\n", createVNode(Button, {
      label: "LocalSend 下载",
      link: "https://localsend.org/zh-CN/download",
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
        name: "桌面端",
        children: createVNode(_components.p, {
          children: ["下载对应系统的安装包（", createVNode(_components.code, {
            children: ".exe"
          }), "、", createVNode(_components.code, {
            children: ".dmg"
          }), "、", createVNode(_components.code, {
            children: ".AppImage"
          }), " 等）。\r\n双击运行安装程序，按照提示完成安装。"]
        })
      }), createVNode(Tab, {
        name: "移动端",
        children: createVNode(_components.p, {
          children: "通过应用商店下载安装，安装过程自动完成。"
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/06/07/localsend-gui.webp",
      alt: "LocalSend 界面"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "1. 发送文件"
      })
    }), "\n", createVNode(_components.p, {
      children: ["打开 LocalSend，点击 ", createVNode(_components.code, {
        children: "发送"
      }), " 按钮。"]
    }), "\n", createVNode(_components.p, {
      children: "选择需要分享的文件或文件夹。"
    }), "\n", createVNode(_components.p, {
      children: "选择目标设备（自动发现的设备列表中选择）。"
    }), "\n", createVNode(_components.p, {
      children: "确认发送，文件开始传输。"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/06/07/localsend-fa-song.webp",
      alt: "LocalSend 发送"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "2. 接收文件"
      })
    }), "\n", createVNode(_components.p, {
      children: "目标设备上 LocalSend 会弹出接收请求提示。"
    }), "\n", createVNode(_components.p, {
      children: "用户确认接收后，文件自动下载到预设目录。"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/06/07/localsend-jie-shou.webp",
      alt: "LocalSend 接收"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "3. 消息传递"
      })
    }), "\n", createVNode(_components.p, {
      children: "除了文件分享，LocalSend 也支持局域网内的消息发送，方便快速沟通。"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/06/07/localsend-xiao-xi-fa-song.webp",
      alt: "LocalSend 消息发送"
    }), "\n", createVNode(_components.p, {
      children: "LocalSend 是一款安全、去中心化的多平台文件分享工具，无需互联网即可快速传输文件。使用时确保设备在同一局域网，传大文件时网络要稳定。现在就下载体验 LocalSend，享受安全便捷的文件分享，欢迎加入开源社区，共同推动软件发展。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "参考资料"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://localsend.org/zh-CN",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "LocalSend 官网"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/localsend/localsend",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "LocalSend GitHub"
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

const url = "src/content/posts/2025/06/localsend.mdx";
const file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/06/localsend.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/06/localsend.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
