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
  "title": "LX Music：音乐搜索器，免费畅享全网音乐",
  "meta_title": "",
  "description": "随着数字音乐的普及，越来越多的用户希望能够方便快捷地收听和管理自己喜欢的音乐。LX Music（洛雪音乐助手）作为一款免费开源的音乐播放软件，凭借其强大的功能和跨平台支持，成为了许多音乐爱好者的首选。它不仅支持 Windows、Mac、Linux 等主流桌面系统，还提供 Android 移动端版本，满足不同用户的使用需求。",
  "date": "2025-05-31T00:00:00.000Z",
  "image": "/images/posts/2025/05/31/lx-music.webp",
  "categories": ["音乐"],
  "authors": ["John Doe"],
  "tags": ["开源软件"],
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "lx-music-使用教程",
    "text": "LX Music 使用教程"
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
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "随着数字音乐的普及，越来越多的用户希望能够方便快捷地收听和管理自己喜欢的音乐。LX Music（洛雪音乐助手）作为一款免费开源的音乐播放软件，凭借其强大的功能和跨平台支持，成为了许多音乐爱好者的首选。它不仅支持 Windows、Mac、Linux 等主流桌面系统，还提供 Android 移动端版本，满足不同用户的使用需求。"
    }), "\n", createVNode(_components.h2, {
      id: "lx-music-使用教程",
      children: "LX Music 使用教程"
    }), "\n", createVNode(Notice, {
      type: "tip",
      children: ["视频教程请移步 YouTube 观看《", createVNode(_components.a, {
        href: "https://youtu.be/rtr1VT37i_o",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
        children: "LX Music 使用教程"
      }), "》。"]
    }), "\n", createVNode(_components.h2, {
      id: "下载",
      children: "下载"
    }), "\n", createVNode(Button, {
      label: "LX Music 下载",
      link: "https://lxmusic.toside.cn/download",
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
        name: "Windows",
        children: createVNode(_components.p, {
          children: ["建议运行安装程序时选择 ", createVNode(_components.code, {
            children: "仅为我安装"
          }), "。"]
        })
      }), createVNode(Tab, {
        name: "macOS",
        children: createVNode(_components.p, {
          children: ["双击打开并将应用图标拖入 ", createVNode(_components.code, {
            children: "应用程序"
          }), " 文件夹。"]
        })
      }), createVNode(Tab, {
        name: "Linux",
        children: createVNode(_components.p, {
          children: ["需赋予其执行权限（如使用 ", createVNode(_components.code, {
            children: "chmod"
          }), " 命令）。"]
        })
      }), createVNode(Tab, {
        name: "Android",
        children: createVNode(_components.p, {
          children: ["打开手机 ", createVNode(_components.code, {
            children: "设置"
          }), " 允许安装未知来源应用。"]
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/05/31/lx-music-gui.webp",
      alt: "LX Music 界面"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "1. 导入自定义音源"
      })
    }), "\n", createVNode(_components.p, {
      children: "LX Music 默认不内置音乐源，需要导入自定义音源 JS 脚本："
    }), "\n", createVNode(_components.p, {
      children: ["打开软件，进入 ", createVNode(_components.code, {
        children: "设置"
      }), " > ", createVNode(_components.code, {
        children: "基本设置"
      }), " > ", createVNode(_components.code, {
        children: "自定义源"
      }), " > ", createVNode(_components.code, {
        children: "自定义源管理"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: ["选择 ", createVNode(_components.code, {
        children: "在线导入"
      }), " 或 ", createVNode(_components.code, {
        children: "本地导入"
      }), "，导入音源脚本。"]
    }), "\n", createVNode(_components.p, {
      children: "选择导入的音源，等待“初始化成功”提示。"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/05/31/lx-music-zi-ding-yi-yuan.gif",
      alt: "LX Music 自定义源"
    }), "\n", createVNode(Notice, {
      type: "tip",
      children: ["更多音源请移步《", createVNode(_components.a, {
        href: "https://github.com/pdone/lx-music-source",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
        children: "洛雪音乐源"
      }), "》。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "2. 搜索与播放音乐"
      })
    }), "\n", createVNode(_components.p, {
      children: "在搜索框输入歌曲名、歌手或专辑名；选择搜索结果，点击播放即可。"
    }), "\n", createVNode(_components.p, {
      children: "支持 VIP 歌曲免费试听；支持无损音质："
    }), "\n", createVNode(_components.p, {
      children: ["进入 ", createVNode(_components.code, {
        children: "设置"
      }), " > ", createVNode(_components.code, {
        children: "播放设置"
      }), " > ", createVNode(_components.code, {
        children: "优先播放的音质"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: ["选择 ", createVNode(_components.code, {
        children: "flac"
      }), " 或 ", createVNode(_components.code, {
        children: "flac24bit"
      }), "。"]
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/05/31/lx-music-yin-zhi-she-zhi.gif",
      alt: "LX Music 音质设置"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "3. 启用下载功能"
      })
    }), "\n", createVNode(_components.p, {
      children: ["进入", createVNode(_components.code, {
        children: "设置"
      }), " > ", createVNode(_components.code, {
        children: "下载设置"
      }), "，勾选 ", createVNode(_components.code, {
        children: "启用下载功能"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: "启用后，回到主界面，搜索你想下载的歌曲。"
    }), "\n", createVNode(_components.p, {
      children: ["在歌曲列表中，右键点击需要下载的歌曲，选择 ", createVNode(_components.code, {
        children: "下载"
      }), " 即可开始下载。"]
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/05/31/lx-music-xia-zai-she-zhi.gif",
      alt: "LX Music 下载设置"
    }), "\n", createVNode(_components.p, {
      children: "通过以上步骤，您可以轻松安装并使用 LX Music，享受全网免费无损音乐资源。LX Music 不仅功能丰富，还支持多平台使用，满足不同用户的需求。使用时请注意导入有效的自定义音源，确保音乐搜索和下载功能正常；同时，保持软件更新，以获得更好的体验和更多新功能。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "参考资料"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://lxmusic.toside.cn/",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "LX Music 官网"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/lyswhut/lx-music-desktop",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "LX Music 桌面版 GitHub"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://lxmusic.toside.cn/desktop",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "LX Music 桌面版说明 - LX Music"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://lxmusic.toside.cn/desktop/faq",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "常见问题 - LX Music"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://blog.csdn.net/qq_44139306/article/details/135816971",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "洛雪音乐助手下载与使用_lxmusic - CSDN 博客"
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

const url = "src/content/posts/2025/05/lx-music.mdx";
const file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/05/lx-music.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/05/lx-music.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
