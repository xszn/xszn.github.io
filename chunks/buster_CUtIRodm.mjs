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
  "title": "Buster：验证码识别工具，一键绕过 reCAPTCHA",
  "meta_title": "",
  "description": "Buster 是一款浏览器扩展，利用语音识别技术自动解决验证码，特别是 reCAPTCHA 的音频验证码。它通过模拟用户操作或语音识别来完成验证，支持多种语音服务，界面简单。本文介绍了 Buster 的安装、配置和使用方法，帮助用户轻松应对验证码，提高浏览效率和体验。",
  "date": "2025-03-20T00:00:00.000Z",
  "image": "/images/posts/2025/03/20/buster.webp",
  "categories": ["工具"],
  "authors": ["John Doe"],
  "tags": ["开源软件", "扩展程序"],
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "buster-使用教程",
    "text": "Buster 使用教程"
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
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Buster 是一款浏览器扩展，利用语音识别技术自动解决验证码，特别是 reCAPTCHA 的音频验证码。它通过模拟用户操作或语音识别来完成验证，支持多种语音服务，界面简单。本文介绍了 Buster 的安装、配置和使用方法，帮助用户轻松应对验证码，提高浏览效率和体验。"
    }), "\n", createVNode(_components.h2, {
      id: "buster-使用教程",
      children: "Buster 使用教程"
    }), "\n", createVNode(Notice, {
      type: "tip",
      children: ["视频教程请移步 YouTube 观看《", createVNode(_components.a, {
        href: "https://youtu.be/YOS9jgGcbK0",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
        children: "Buster 使用教程"
      }), "》。"]
    }), "\n", createVNode(_components.h3, {
      id: "下载",
      children: "下载"
    }), "\n", createVNode(Button, {
      label: "Buster 下载",
      link: "https://github.com/dessant/buster/releases",
      style: "solid"
    }), "\n", createVNode(_components.h3, {
      id: "安装",
      children: "安装"
    }), "\n", createVNode(_components.p, {
      children: ["打开 Buster 仓库，选择应用商店点击 ", createVNode(_components.code, {
        children: "添加至浏览器"
      }), " 安装，完成后浏览器右上角显示图标。"]
    }), "\n", createVNode(_components.h3, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/03/20/buster-preview.webp",
      alt: "Buster 扩展预览"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "验证码识别"
      })
    }), "\n", createVNode(_components.p, {
      children: ["遇到验证码时，点击 ", createVNode(_components.code, {
        children: "扩展图标"
      }), " 自动识别，失败时可选择人工解决。"]
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/03/20/buster-tu-pian-yan-zheng-ma-shi-bie.webp",
      alt: "Buster 图片验证码识别"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/03/20/buster-yin-pin-yan-zheng-ma-shi-bie.webp",
      alt: "Buster 音频验证码识别"
    }), "\n", createVNode(Notice, {
      type: "info",
      children: ["如果你遇到 APl quota exceeded（APl 配额已超出）……请点击最左边的 ", createVNode(_components.code, {
        children: "刷新"
      }), " 按钮，再重试。"]
    }), "\n", createVNode(_components.p, {
      children: "Buster 支持文字、图片和音频验证码，利用自动化工具和客户端应用提高验证码通过率。它注重隐私保护，不记录用户信息。无论普通用户还是开发者，Buster 都能带来更顺畅的上网体验。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "参考资料"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/dessant/buster",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "Buster GitHub"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/dessant/buster/wiki",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "dessant/buster Wiki - GitHub"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://chromewebstore.google.com/detail/buster-captcha-solver-for/mpbjkejclgfgadiemmefgebjfooflfhl",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "Buster: Captcha Solver for Humans - Chrome 应用商店"
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

const url = "src/content/posts/2025/03/buster.mdx";
const file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/03/buster.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/03/buster.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
