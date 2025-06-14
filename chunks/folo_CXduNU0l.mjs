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
  "title": "Folo：RSS 阅读器，轻松玩转信息聚合",
  "meta_title": "",
  "description": "Folo 是一款智能信息聚合工具，支持订阅 1200 多个网站和社交平台的内容，提供清爽无干扰的时间线。它帮助用户高效管理新闻、博客和社交动态，支持跨平台同步，具备AI自动摘要和翻译功能。Folo 支持 Windows、macOS、Linux 桌面，iOS、Android 移动端和网页版，方便多设备使用。",
  "date": "2025-05-24T09:48:51.000Z",
  "image": "/images/posts/2025/05/24/folo.webp",
  "categories": ["新闻"],
  "authors": ["John Doe"],
  "tags": ["开源软件"],
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "folo-使用教程",
    "text": "Folo 使用教程"
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
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Folo 是一款智能信息聚合工具，支持订阅 1200 多个网站和社交平台的内容，提供清爽无干扰的时间线。它帮助用户高效管理新闻、博客和社交动态，支持跨平台同步，具备AI自动摘要和翻译功能。Folo 支持 Windows、macOS、Linux 桌面，iOS、Android 移动端和网页版，方便多设备使用。"
    }), "\n", createVNode(_components.h2, {
      id: "folo-使用教程",
      children: "Folo 使用教程"
    }), "\n", createVNode(Notice, {
      type: "note",
      children: ["视频教程请移步 YouTube 观看《", createVNode(_components.a, {
        href: "https://youtu.be/ympM05ngoCE",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
        children: "Folo 使用教程"
      }), "》。"]
    }), "\n", createVNode(_components.h3, {
      id: "下载",
      children: "下载"
    }), "\n", createVNode(Button, {
      label: "Folo 下载",
      link: "https://follow.is/download",
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
        name: "桌面端",
        children: createVNode(_components.p, {
          children: "下载对应平台的安装包，双击运行并按提示完成安装，启动应用后注册或登录账号即可开始使用。"
        })
      }), createVNode(Tab, {
        name: "移动端",
        children: createVNode(_components.p, {
          children: "通过应用商店下载安装后，打开应用并登录账号，首次登录时可同步已有订阅和阅读进度。"
        })
      }), createVNode(Tab, {
        name: "网页端",
        children: createVNode(_components.p, {
          children: "无需安装，直接登录账号即可使用全部基础功能。"
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/05/24/folo-gui.webp",
      alt: "Folo 界面"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "1. 账号注册与登录"
      })
    }), "\n", createVNode(_components.p, {
      children: "注册账号后，登录 Folo 即可同步订阅源和阅读进度，实现多端无缝衔接。"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/05/24/folo-zhu-ce.webp",
      alt: "Folo 注册"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "2. 订阅内容"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Folo 支持订阅 RSS、微博、X、B 站、小红书、YouTube 等多种内容"
      }), "\n", createVNode(_components.li, {
        children: "用户可以导入他人分享的订阅列表，也能自定义添加订阅源"
      }), "\n", createVNode(_components.li, {
        children: "订阅内容可分类管理，支持自定义标签和文件夹，方便整理和查找信息，提升使用效率"
      }), "\n"]
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/05/24/folo-fa-xian.webp",
      alt: "Folo 发现"
    }), "\n", createVNode(Notice, {
      type: "note",
      children: ["更多订阅请移步 ", createVNode(_components.a, {
        href: "https://docs.rsshub.app/zh/",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
        children: "RSSHub"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "3. 内容浏览"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Folo 提供多种阅读模式，包括双栏、画廊和视频播放，提升浏览体验"
      }), "\n", createVNode(_components.li, {
        children: "支持自动排版、纯净模式和语音朗读，让阅读更舒适"
      }), "\n", createVNode(_components.li, {
        children: "AI 功能能自动生成摘要、翻译内容和总结热点，帮助用户快速抓住重要信息"
      }), "\n"]
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/05/24/folo-wen-zhang-liu-lan.webp",
      alt: "Folo 文章浏览"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "4. 通知和过滤"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Folo 支持新内容通知，帮助用户及时了解订阅更新"
      }), "\n", createVNode(_components.li, {
        children: "用户可以屏蔽不感兴趣的内容，自动标记已读，减少干扰"
      }), "\n", createVNode(_components.li, {
        children: "还可自定义规则，替换标题或内容中的特定文字，满足个性化需求，提升使用体验"
      }), "\n"]
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/05/24/folo-bian-ji-ding-yue-yuan.webp",
      alt: "Folo 编辑订阅源"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "5. 社区与打赏"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "用户可以分享自己的订阅列表，方便他人一键订阅并发现社区精选内容"
      }), "\n", createVNode(_components.li, {
        children: "通过 $POWER 代币，读者能即时打赏支持喜欢的内容创作者，激励优质内容产出"
      }), "\n", createVNode(_components.li, {
        children: "创作者还能认领内容源，获得经济回报，促进良性互动和内容生态发展"
      }), "\n"]
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/05/24/folo-power.webp",
      alt: "Folo Power"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "6. 快捷键与高级功能"
      })
    }), "\n", createVNode(_components.p, {
      children: "Folo 提供丰富快捷键，帮助用户快速操作提升效率，同时支持 API 和 Webhook，方便高级用户和开发者实现自动化和个性化设置，满足多样需求。"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/05/24/folo-zi-dong-hua.webp",
      alt: "Folo 自动化"
    }), "\n", createVNode(_components.p, {
      children: "Folo 是一款多平台信息聚合工具，利用 AI 和社区模式帮助用户高效管理信息，实现价值共享。部分海外内容访问可能不稳定，建议合理使用科学上网。用户需注意隐私安全，避免订阅不明来源内容。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "参考资料"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://follow.is/",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "Folo 官网"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/RSSNext/Folo",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "Folo GitHub"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/RSSNext/Folo/wiki",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "Folo GitHub Wiki"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://blog.csdn.net/qq_45675378/article/details/143573066",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "Follow 软件的使用入门教程 - CSDN 博客"
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

const url = "src/content/posts/2025/05/folo.mdx";
const file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/05/folo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/05/folo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
