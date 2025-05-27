import { x as createVNode, k as Fragment, _ as __astro_tag_component__ } from './astro/server_BBoAqXZx.mjs';
import { B as Button } from './Button_B9KQGQXu.mjs';
import 'react/jsx-runtime';
import 'react';
import { N as Notice } from './Notice_DDbu5IPA.mjs';
import 'react-lite-youtube-embed';
/* empty css                                    */
import 'marked';
import { I as Image } from './Image_CXGKaHf-.mjs';
import 'clsx';

const frontmatter = {
  "title": "Real-ESRGAN：图片修复工具，AI 提升图像清晰度",
  "meta_title": "Real-ESRGAN：图片修复工具，AI 提升图像清晰度",
  "description": "Real-ESRGAN 是一款基于人工智能的图像和视频超分辨率修复工具，专注于提升现实世界中图像的清晰度和细节表现。它不仅支持普通照片的放大和修复，还针对动漫视频和插画提供了专门优化的模型，适合图像修复、动漫视频增强、老旧照片修复等多种应用场景。Real-ESRGAN 支持 Windows、Linux 和 macOS 等主流系统平台，且提供了跨平台的可执行文件和图形用户界面，方便不同用户群体使用。",
  "date": "2025-04-14T08:51:29.000Z",
  "image": "/images/posts/2025/04/15/real-esrgan.webp",
  "categories": ["图像处理"],
  "authors": ["John Doe"],
  "tags": ["开源软件"],
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "real-esrgan-使用教程",
    "text": "Real-ESRGAN 使用教程"
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
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Real-ESRGAN 是一款基于人工智能的图像和视频超分辨率修复工具，专注于提升现实世界中图像的清晰度和细节表现。它不仅支持普通照片的放大和修复，还针对动漫视频和插画提供了专门优化的模型，适合图像修复、动漫视频增强、老旧照片修复等多种应用场景。Real-ESRGAN 支持 Windows、Linux 和 macOS 等主流系统平台，且提供了跨平台的可执行文件和图形用户界面，方便不同用户群体使用。"
    }), "\n", createVNode(_components.h2, {
      id: "real-esrgan-使用教程",
      children: "Real-ESRGAN 使用教程"
    }), "\n", createVNode(Notice, {
      type: "note",
      children: ["观看视频教程请移步：", createVNode(_components.a, {
        href: "https://youtu.be/TYLZB24PZyw",
        rel: "noopener noreferrer nofollow",
        target: "_blank",
        children: "https://youtu.be/TYLZB24PZyw"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "下载",
      children: "下载"
    }), "\n", createVNode(Button, {
      label: "Real-ESRGAN 下载",
      link: "https://github.com/xinntao/Real-ESRGAN/releases/tag/v0.2.5.0",
      style: "solid"
    }), "\n", createVNode(Button, {
      label: "FFmpeg 下载",
      link: "https://ffmpeg.org/download.html",
      style: "solid"
    }), "\n", createVNode(_components.h3, {
      id: "安装",
      children: "安装"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "下载完成后，将压缩包解压到指定文件夹，例如“Real-ESRGAN”文件夹。"
      }), "\n", createVNode(_components.li, {
        children: "对于视频处理，建议安装 FFmpeg 以便提取和合成视频帧。"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/04/15/real-esrgan-rendering.webp",
      alt: "Real-ESRGAN 图像修复效果图"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "图像超分辨率"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "通过命令行进入可执行文件所在目录，执行命令示例："
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
              color: "#56B6C2"
            },
            children: "realesrgan-ncnn-vulkan.exe"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "i input.jpg "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "o output.png "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "n realesrgan"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "x4plus"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["其中 ", createVNode(_components.code, {
        children: "-i"
      }), " 指定输入图像，", createVNode(_components.code, {
        children: "-o"
      }), " 指定输出文件，", createVNode(_components.code, {
        children: "-n"
      }), " 指定模型名称（默认为 ", createVNode(_components.code, {
        children: "realesrgan-x4plus"
      }), "，也可选择动漫优化模型等）。"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "视频超分辨率"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "步骤 1"
      }), "：使用 FFmpeg 提取视频帧"]
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "ffmpeg -i onepiece_demo.mp4 -qscale:v 1 -qmin 1 -qmax 1 -vsync 0 tmp_frames/frame%08d.png"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["记住提前创建文件夹 ", createVNode(_components.code, {
        children: "tmp_frames"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "步骤 2"
      }), "：使用 Real-ESRGAN 执行文件进行推理"]
    }), "\n", createVNode(_components.p, {
      children: "以 Windows 操作系统为例，执行命令："
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "realesrgan-ncnn-vulkan.exe -i tmp_frames -o out_frames -n realesr-animevideov3 -s 2 -f jpg"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["记住提前创建文件夹 ", createVNode(_components.code, {
        children: "out_frames"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "步骤 3"
      }), "：将增强后的帧重新编码成视频"]
    }), "\n", createVNode(_components.p, {
      children: "首先从输入视频中获得 FPS："
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "ffmpeg -i onepiece_demo.mp4"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "您将得到类似于以下屏幕截图的输出。"
    }), "\n", createVNode(Image, {
      src: "/images/posts/2025/04/15/real-esrgan-fps.webp",
      alt: "Real-ESRGAN 获取视频 FPS"
    }), "\n", createVNode(_components.p, {
      children: "合并视频："
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "ffmpeg -r 23.98 -i out_frames/frame%08d.jpg -c:v libx264 -r 23.98 -pix_fmt yuv420p output.mp4"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "如果您还想保留原始音频，可以使用以下命令："
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "ffmpeg -r 23.98 -i out_frames/frame%08d.jpg -i onepiece_demo.mp4 -map 0:v:0 -map 1:a:0 -c:a copy -c:v libx264 -r 23.98 -pix_fmt yuv420p output_w_audio.mp4"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Real-ESRGAN 作为一款实用的图像和视频超分辨率工具，极大地提升了图像细节和清晰度，适用于照片修复、动漫视频放大、老旧影像修复等多种场景。其跨平台的可执行文件和图形界面降低了使用门槛，支持多种模型和自定义微调，满足不同用户需求。使用时需注意选择合适的模型和放大倍数，视频处理需配合 FFmpeg 等工具。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "参考资料"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/xinntao/Real-ESRGAN/blob/master/README_CN.md",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "Real-ESRGAN - GitHub"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/xinntao/Real-ESRGAN/blob/master/docs/anime_video_model.md",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "Real-ESRGAN 动漫视频模型介绍 - GitHub"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan",
          rel: "noopener noreferrer nofollow",
          target: "_blank",
          children: "Real-ESRGAN ncnn Vulkan - GitHub"
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

const url = "src/content/posts/2025/04/real-esrgan.mdx";
const file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/04/real-esrgan.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/04/real-esrgan.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
