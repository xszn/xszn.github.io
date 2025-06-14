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
  "title": "Upscayl：图像放大器，免费提升图片画质",
  "meta_title": "",
  "description": "Upscayl 是一款开源的人工智能图像放大工具，能将模糊或低分辨率图片放大成高清晰度图像，同时保持细节和颜色。它适合设计师、创作者及普通用户，用于修复旧照片或提升作品质量。支持 Linux、macOS 和 Windows 系统，需 Vulkan 兼容的显卡。操作简单，支持批量处理和多种模型选择，满足不同需求。",
  "date": "2025-04-19T06:20:18.000Z",
  "image": "/images/posts/2025/04/19/upscayl.webp",
  "categories": ["工具"],
  "authors": ["John Doe"],
  "tags": ["开源软件"],
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "upscayl-使用教程",
    "text": "Upscayl 使用教程"
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
      children: "Upscayl 是一款开源的人工智能图像放大工具，能将模糊或低分辨率图片放大成高清晰度图像，同时保持细节和颜色。它适合设计师、创作者及普通用户，用于修复旧照片或提升作品质量。支持 Linux、macOS 和 Windows 系统，需 Vulkan 兼容的显卡。"
    }), "\n", createVNode(_components.h2, {
      id: "upscayl-使用教程",
      children: "Upscayl 使用教程"
    }), "\n", createVNode(Notice, {
      type: "note",
      children: ["视频教程请移步 YouTube 观看《", createVNode(_components.a, {
        href: "https://youtu.be/TiPbsIrSCHM",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
        children: "Upscayl 使用教程"
      }), "》。"]
    }), "\n", createVNode(_components.h3, {
      id: "下载",
      children: "下载"
    }), "\n", createVNode(Button, {
      label: "Upscayl 下载",
      link: "https://upscayl.org/download",
      style: "solid"
    }), "\n", createVNode(Button, {
      label: "Upscayl GitHub",
      link: "https://github.com/upscayl/upscayl/releases",
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
          children: ["双击 ", createVNode(_components.code, {
            children: ".exe"
          }), " 文件启动安装，若出现 SmartScreen 警告，选择 ", createVNode(_components.code, {
            children: "更多信息"
          }), " 后点击 ", createVNode(_components.code, {
            children: "仍要运行"
          }), " 即可完成安装。"]
        })
      }), createVNode(Tab, {
        name: "macOS",
        children: createVNode(_components.p, {
          children: ["双击 ", createVNode(_components.code, {
            children: ".dmg"
          }), " 文件，拖拽 Upscayl 图标到 ", createVNode(_components.code, {
            children: "应用程序"
          }), " 文件夹，首次打开时需右键选择“打开”以绕过安全提示。"]
        })
      }), createVNode(Tab, {
        name: "Linux",
        children: createVNode(_components.p, {
          children: ["给予 ", createVNode(_components.code, {
            children: ".AppImage"
          }), " 文件执行权限后直接运行，或通过系统包管理器安装对应格式软件包。"]
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/04/19/upscayl-gui.webp",
      alt: "Upscayl 界面"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "1. 选择图片"
      })
    }), "\n", createVNode(_components.p, {
      children: "点击“选择图片”按钮，导入需要放大的图像文件。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "2. 选择模型"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Upscayl 提供多种适合照片、数字艺术等风格的 AI 模型，用户也可将自定义模型放入 ", createVNode(_components.code, {
        children: "models"
      }), " 文件夹加载，并支持多种放大倍数（如 ", createVNode(_components.code, {
        children: "2x"
      }), "、", createVNode(_components.code, {
        children: "4x"
      }), "、最高 ", createVNode(_components.code, {
        children: "16x"
      }), "）供选择。"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "3. 选择输出文件夹"
      })
    }), "\n", createVNode(_components.p, {
      children: "设定放大后图片的保存路径，方便管理。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "4. 启动放大"
      })
    }), "\n", createVNode(_components.p, {
      children: ["点击 ", createVNode(_components.code, {
        children: "升图"
      }), " 按钮即可开始处理图片，支持一次批量处理多张图片，提高效率。"]
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/04/19/upscayl-tu-xiang-zeng-qiang-hou.webp",
      alt: "Upscayl 图像增强后"
    }), "\n", createVNode(_components.p, {
      children: "Upscayl 是一款免费开源的 AI 图像放大工具，能轻松将低分辨率图片变清晰。它支持多平台，但需 Vulkan 兼容的显卡；软件不适合修复完全模糊的图片，使用时应耐心等待批量处理完成；对于不支持 Vulkan 的设备，可尝试社区提供的 CPU 模式或 SwiftShader，但性能有限。建议及时更新软件，确保功能和兼容性。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "参考资料"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://upscayl.org/",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "Upscayl 官网"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/upscayl/upscayl",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "Upscayl GitHub"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/upscayl/upscayl/wiki",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "Upscayl GitHub Wiki"
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

const url = "src/content/posts/2025/04/upscayl.mdx";
const file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/04/upscayl.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/04/upscayl.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
