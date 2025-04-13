import { x as createVNode, k as Fragment, _ as __astro_tag_component__ } from './astro/server_BBoAqXZx.mjs';
import 'react/jsx-runtime';
import 'react';
import { N as Notice } from './Notice_CH83xs3Z.mjs';
import 'react-lite-youtube-embed';
/* empty css                                    */
import 'marked';
import 'clsx';

const frontmatter = {
  "title": "MiaoKo：机场测速工具，支持节点批量测速",
  "meta_title": "MiaoKo：机场测速工具，支持节点批量测速",
  "description": "机场测速可以帮助我们更好地了解节点的网络状况，并为选择和管理节点提供参考，同时提升上网体验。MiaoKo 是一款自动化测试机器人，不仅能自动测试节点，还能生成详细报告。本文将介绍 MiaoKo 的使用教程，包括加入群组、积分获取、指令发送等，为确保你能顺利使用这一 TG 测速机器人。",
  "date": "2025-03-04T11:27:05.000Z",
  "image": "/images/posts/2025/03/04/miaoko.webp",
  "categories": ["科学上网"],
  "authors": ["Mark Dinn"],
  "tags": ["telegram 机器人"],
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "miaoko-使用教程",
    "text": "MiaoKo 使用教程"
  }, {
    "depth": 3,
    "slug": "加入群组",
    "text": "加入群组"
  }, {
    "depth": 3,
    "slug": "获取积分",
    "text": "获取积分"
  }, {
    "depth": 3,
    "slug": "发送指令",
    "text": "发送指令"
  }, {
    "depth": 3,
    "slug": "测试步骤",
    "text": "测试步骤"
  }, {
    "depth": 3,
    "slug": "查看报告",
    "text": "查看报告"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "机场测速可以帮助我们更好地了解节点的网络状况，并为选择和管理节点提供参考，同时提升上网体验。MiaoKo 是一款自动化测试机器人，不仅能自动测试节点，还能生成详细报告。本文将介绍 MiaoKo 的使用教程，包括加入群组、积分获取、指令发送等，为确保你能顺利使用这一 TG 测速机器人。"
    }), "\n", createVNode(_components.h2, {
      id: "miaoko-使用教程",
      children: "MiaoKo 使用教程"
    }), "\n", createVNode(_components.p, {
      children: "目前 MiaoKo 已停止开发，只能通过租用权限使用服务，这里选择使用“翻翻墙”维护的基于 MiaoKo 测速机器人（FFQ.LA Public Test Center）。翻翻墙采用积分制管理，测试时会扣除相应积分，也可贡献后端服务以享受所有权限。翻翻墙测速机器人不仅支持订阅速度测试，还支持拓扑结构、流媒体、延迟等测试。"
    }), "\n", createVNode(Notice, {
      type: "note",
      children: ["观看视频教程请移步：", createVNode(_components.a, {
        href: "https://youtu.be/CGfgnxcbAj8",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
        children: "https://youtu.be/CGfgnxcbAj8"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "加入群组",
      children: "加入群组"
    }), "\n", createVNode(_components.p, {
      children: ["使用机器人前需加入 ", createVNode(_components.a, {
        href: "https://t.me/FFQMiaokoPublic",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
        children: "🛫 翻翻墙 | 公益测速 - 积分制"
      }), "（以下简称“积分群”）群组。每日签到前需加入 ", createVNode(_components.a, {
        href: "https://t.me/FFQGroup",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
        children: "🛫 翻翻墙 | ✨ MiaoKo | ⛱ 人才交流中心"
      }), "（以下简称“交流群”）群组，聊天吹水也在该群内进行。"]
    }), "\n", createVNode(_components.h3, {
      id: "获取积分",
      children: "获取积分"
    }), "\n", createVNode(_components.p, {
      children: ["积分获取主要通过群内每日签到、聊天吹水、购买积分等方式。每日签到请在交流群内发送 ", createVNode(_components.code, {
        children: "/签到"
      }), " 。"]
    }), "\n", createVNode(_components.h3, {
      id: "发送指令",
      children: "发送指令"
    }), "\n", createVNode(_components.p, {
      children: ["在积分群内发送 ", createVNode(_components.code, {
        children: "/help@FFQPublicBot"
      }), " 获取帮助菜单。带有 “url” 的指令可使用订阅链接进行测试，如速度测试 ", createVNode(_components.code, {
        children: "/speedurl 订阅链接"
      }), "。你也可以发送 ", createVNode(_components.code, {
        children: "/ffq"
      }), "，无需记住指令。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "/images/posts/2025/03/04/miaoko-fa-song-zhi-ling.webp",
        children: createVNode(_components.img, {
          src: "/images/posts/2025/03/04/miaoko-fa-song-zhi-ling.webp",
          alt: "miaoko发送指令"
        })
      })
    }), "\n", createVNode(Notice, {
      type: "note",
      children: ["更多指令说明请移步《", createVNode(_components.a, {
        href: "https://www.ffq.la/1216.html",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
        children: "MiaoKo v4 命令详细文档"
      }), "》。"]
    }), "\n", createVNode(_components.h3, {
      id: "测试步骤",
      children: "测试步骤"
    }), "\n", createVNode(_components.p, {
      children: "向机器人发送测试指令后，按以下操作进行："
    }), "\n", createVNode(_components.p, {
      children: "选择测试后端。此时会通过后端宽带进行测试，如测试结果不佳时，可随时更换后端。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "/images/posts/2025/03/04/miaoko-ce-shi-bu-zhou-ce-shi-hou-duan.webp",
        children: createVNode(_components.img, {
          src: "/images/posts/2025/03/04/miaoko-ce-shi-bu-zhou-ce-shi-hou-duan.webp",
          alt: "miaoko测试步骤-选择测试后端"
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "选择排序方式。按需选择或默认即可。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "/images/posts/2025/03/04/miaoko-ce-shi-bu-zhou-pai-xu-fang-shi.webp",
        children: createVNode(_components.img, {
          src: "/images/posts/2025/03/04/miaoko-ce-shi-bu-zhou-pai-xu-fang-shi.webp",
          alt: "miaoko测试步骤-选择排序方式"
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "等待测试完成，结果会公布在群内，需注意查看，不要被后续测试顶上去找不到。"
    }), "\n", createVNode(_components.h3, {
      id: "查看报告",
      children: "查看报告"
    }), "\n", createVNode(_components.p, {
      children: "测试完成后，群内会收到测速图报告，但不会有提醒。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "/images/posts/2025/03/04/miaoko-cha-kan-bao-gao.webp",
        children: createVNode(_components.img, {
          src: "/images/posts/2025/03/04/miaoko-cha-kan-bao-gao.webp",
          alt: "miaoko查看报告"
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "机场测速完成后，你可以选择低延迟高速度的节点，提升上网体验。不同时间段的数据会有所不同，为避免晚高峰，可选择在早上测速。测速前最好征得商家的同意，否则短时间内大量消耗流量可能引起注意，导致账号被封禁。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "参考资料"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.miaoko.net/",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "MiaoKo 官方网站"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.ffq.la/1180.html",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "FFQ MiaoKo 公益测速机器人使用说明 - 翻翻墙导航"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.ffq.la/1216.html",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "MiaoKo v4 命令详细文档 - 翻翻墙导航"
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

const url = "src/content/posts/2025/03/miaoko.mdx";
const file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/03/miaoko.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/03/miaoko.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
