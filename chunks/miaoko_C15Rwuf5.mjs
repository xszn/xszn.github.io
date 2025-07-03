import { x as createVNode, j as Fragment, _ as __astro_tag_component__ } from './astro/server_B2DYuZLs.mjs';
import { B as Button } from './Button_B9KQGQXu.mjs';
import 'react/jsx-runtime';
import 'react';
import { N as Notice } from './Notice_Du-e7p_l.mjs';
import 'react-lite-youtube-embed';
/* empty css                                    */
import 'marked';
import { I as Image } from './Image_CXGKaHf-.mjs';
import 'clsx';

const frontmatter = {
  "title": "MiaoKo：机场测速工具，支持节点批量测速",
  "meta_title": "",
  "description": "MiaoKo 是一款自动化测速机器人，能自动测试节点并生成详细报告。MiaoKo 测速机器人已停止开发，现由翻翻墙维护，通过积分制租用权限支持多项网络测试。使用时需加入指定群组，获取积分后发送指令进行测试，测试结果会在群内公布，方便用户选择优质节点，提升网络质量。",
  "date": "2025-03-04T00:00:00.000Z",
  "image": "/images/posts/2025/03/04/miaoko.webp",
  "categories": ["工具"],
  "authors": ["John Doe"],
  "tags": ["机器人"],
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "miaoko-使用教程",
    "text": "MiaoKo 使用教程"
  }, {
    "depth": 2,
    "slug": "加入",
    "text": "加入"
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
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "MiaoKo 是一款自动化测速机器人，能自动测试节点并生成详细报告。MiaoKo 测速机器人已停止开发，现由翻翻墙维护，通过积分制租用权限支持多项网络测试。使用时需加入指定群组，获取积分后发送指令进行测试，测试结果会在群内公布，方便用户选择优质节点，提升网络质量。"
    }), "\n", createVNode(_components.h2, {
      id: "miaoko-使用教程",
      children: "MiaoKo 使用教程"
    }), "\n", createVNode(Notice, {
      type: "tip",
      children: ["视频教程请移步 YouTube 观看《", createVNode(_components.a, {
        href: "https://youtu.be/CGfgnxcbAj8",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
        children: "MiaoKo 使用教程"
      }), "》。"]
    }), "\n", createVNode(_components.h2, {
      id: "加入",
      children: "加入"
    }), "\n", createVNode(Button, {
      label: "翻翻墙交流群组",
      link: "https://t.me/FFQGroup",
      style: "solid"
    }), "\n", createVNode(Button, {
      label: "翻翻墙积分群组",
      link: "https://t.me/FFQMiaokoPublic",
      style: "solid"
    }), "\n", createVNode(_components.h3, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/03/04/miaoko-preview.webp",
      alt: "MiaoKo 翻翻墙群组预览"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "1. 加入群组"
      })
    }), "\n", createVNode(_components.p, {
      children: ["使用机器人前需先加入 ", createVNode(_components.code, {
        children: "交流群"
      }), " 和 ", createVNode(_components.code, {
        children: "积分群"
      }), " 两个群组，签到和聊天均在 ", createVNode(_components.code, {
        children: "交流群"
      }), " 进行。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "2. 获取积分"
      })
    }), "\n", createVNode(_components.p, {
      children: ["积分主要通过交流群每日发送 ", createVNode(_components.code, {
        children: "/签到"
      }), "、聊天互动和购买获得。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "3. 发送指令"
      })
    }), "\n", createVNode(_components.p, {
      children: ["在积分群发送 ", createVNode(_components.code, {
        children: "/help@FFQPublicBot"
      }), " 获取帮助，使用带“url”的指令测试订阅链接，也可直接发送 ", createVNode(_components.code, {
        children: "/ffq"
      }), " 简化操作。"]
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/03/04/miaoko-fa-song-zhi-ling.webp",
      alt: "MiaoKo 发送指令"
    }), "\n", createVNode(Notice, {
      type: "tip",
      children: ["更多指令请移步《", createVNode(_components.a, {
        href: "https://www.ffq.la/1216.html",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
        children: "MiaoKo v4 命令详细文档"
      }), "》。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "4. 测试步骤"
      })
    }), "\n", createVNode(_components.p, {
      children: "选择测试后端后将通过其宽带进行测速，若结果不佳可随时更换后端。"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/03/04/miaoko-xuan-ze-ce-shi-hou-duan.webp",
      alt: "MiaoKo 选择测试后端"
    }), "\n", createVNode(_components.p, {
      children: "根据需要选择排序方式，或使用默认设置即可。"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/03/04/miaoko-xuan-ze-pai-xu-fang-shi.webp",
      alt: "MiaoKo 选择排序方式"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "5. 查看报告"
      })
    }), "\n", createVNode(_components.p, {
      children: "测试完成后，群内会收到测速图报告，但不会有提醒。"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/03/04/miaoko-cha-kan-bao-gao.webp",
      alt: "MiaoKo 查看报告"
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
          children: "MiaoKo 官网"
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
