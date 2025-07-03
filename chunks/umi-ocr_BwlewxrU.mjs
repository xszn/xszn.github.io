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
  "title": "Umi-OCR：文字识别工具，轻松提取文档文本",
  "meta_title": "",
  "description": "Umi-OCR 是一款免费开源的离线文字识别软件，支持多语言和批量识别图片、PDF，能去除水印并识别或生成二维码。它适用于文档数字化、截图文字提取、自动化数据录入等场景。支持 Windows 和 Linux 系统，并提供命令行和 HTTP 接口，方便集成和自动化使用。",
  "date": "2025-04-22T00:00:00.000Z",
  "image": "/images/posts/2025/04/22/umi-ocr.webp",
  "categories": ["工具"],
  "authors": ["John Doe"],
  "tags": ["开源软件"],
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "umi-ocr-使用教程",
    "text": "Umi-OCR 使用教程"
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
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Umi-OCR 是一款免费开源的离线文字识别软件，支持多语言和批量识别图片、PDF，能去除水印并识别或生成二维码。它适用于文档数字化、截图文字提取、自动化数据录入等场景。支持 Windows 和 Linux 系统，并提供命令行和 HTTP 接口，方便集成和自动化使用。"
    }), "\n", createVNode(_components.h2, {
      id: "umi-ocr-使用教程",
      children: "Umi-OCR 使用教程"
    }), "\n", createVNode(Notice, {
      type: "tip",
      children: ["视频教程请移步 YouTube 观看《", createVNode(_components.a, {
        href: "https://youtu.be/jCkAg3s-BMo",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
        children: "Umi-OCR 使用教程"
      }), "》。"]
    }), "\n", createVNode(_components.h3, {
      id: "下载",
      children: "下载"
    }), "\n", createVNode(Button, {
      label: "Umi-OCR 下载",
      link: "https://github.com/hiroi-sora/Umi-OCR/releases",
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
        name: "Windows",
        children: createVNode(_components.p, {
          children: ["解压软件包，无需安装，直接双击 ", createVNode(_components.code, {
            children: "Umi-OCR.exe"
          }), " 启动。"]
        })
      }), createVNode(Tab, {
        name: "Linux",
        children: createVNode(_components.p, {
          children: ["Linux 用户可运行 ", createVNode(_components.code, {
            children: "umi-ocr.sh"
          }), " 脚本启动。"]
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/04/22/umi-ocr-gui.webp",
      alt: "Umi-OCR 界面"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "截图 OCR"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "通过快捷键或界面按钮，快速截图识别图片中的文字"
      }), "\n", createVNode(_components.li, {
        children: "支持复制、编辑识别结果，支持多条识别历史记录管理"
      }), "\n", createVNode(_components.li, {
        children: "可粘贴图片到软件窗口直接识别"
      }), "\n"]
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/04/22/umi-ocr-jie-tu-ocr.webp",
      alt: "Umi-OCR 截图 OCR"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "批量 OCR"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "支持批量导入本地图片（jpg、png、webp 等格式），一次性识别大量文件"
      }), "\n", createVNode(_components.li, {
        children: "识别结果可导出为 txt、csv、jsonl、md 等格式"
      }), "\n", createVNode(_components.li, {
        children: "支持“忽略区域”设置，排除水印、LOGO 等干扰内容"
      }), "\n"]
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/04/22/umi-ocr-pi-liang-ocr.webp",
      alt: "Umi-OCR 批量 OCR"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "文档识别"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "支持 PDF、xps、epub、mobi 等格式文档的 OCR 识别"
      }), "\n", createVNode(_components.li, {
        children: "可输出为双层可搜索 PDF，便于后续检索"
      }), "\n", createVNode(_components.li, {
        children: "支持设置忽略区域，自动关机/休眠等任务选项"
      }), "\n"]
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/04/22/umi-ocr-pi-liang-wen-dang.webp",
      alt: "Umi-OCR 批量文档"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "二维码功能"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "支持识别图片中的二维码、条形码（19 种协议）"
      }), "\n", createVNode(_components.li, {
        children: "支持输入文本生成二维码图片，支持纠错等级设置"
      }), "\n"]
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/04/22/umi-ocr-er-wei-ma.webp",
      alt: "Umi-OCR 二维码"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "全局设置与高级用法"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "支持多语言界面、主题切换、快捷方式添加、开机自启等"
      }), "\n", createVNode(_components.li, {
        children: "支持命令行和 HTTP 接口，便于开发者二次集成和自动化调用"
      }), "\n", createVNode(_components.li, {
        children: "可切换不同 OCR 引擎插件，满足不同性能和兼容性需求"
      }), "\n"]
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/04/22/umi-ocr-quan-ju-she-zhi.webp",
      alt: "Umi-OCR 全局设置"
    }), "\n", createVNode(_components.p, {
      children: "Umi-OCR 功能丰富，支持截图、批量、文档和二维码等文字识别，操作简单，适合高效提取和管理文本。首次运行如遇报错，可按提示解决。建议关注官方更新，不要同时安装不同引擎版本，软件永久免费，欢迎参与社区反馈和翻译。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "参考资料"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/hiroi-sora/Umi-OCR",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "Umi-OCR GitHub"
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

const url = "src/content/posts/2025/04/umi-ocr.mdx";
const file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/04/umi-ocr.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/04/umi-ocr.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
