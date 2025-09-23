---
title: Real-ESRGAN
description: 图像/视频超分辨率
image: /images/guide/2025/04/real-esrgan/real-esrgan.webp
---

# Real-ESRGAN：图像/视频超分辨率

<p></p>
<Img src="/images/guide/2025/04/real-esrgan/real-esrgan.webp" alt="Real-ESRGAN" />

Real-ESRGAN 旨在开发用于通用图像/视频修复的实用算法。

## 下载

[Real-ESRGAN 下载](https://github.com/xinntao/Real-ESRGAN/releases)

[FFmpeg 下载](https://ffmpeg.org/download.html)

## 安装

略。

## 使用教程

### 图像超分辨率

通过命令行进入可执行文件所在目录，执行命令示例：

``` shell
realesrgan-ncnn-vulkan.exe -i input.jpg -o output.png -n realesrgan-x4plus
```

其中：

-i：输入图像。

-o：输出文件。

-n：模型名称（默认为 realesrgan-x4plus，也可选择动漫优化模型等）。

::: tip
更多模型请移步《[Real-ESRGAN 模型库](https://github.com/xinntao/Real-ESRGAN/blob/master/docs/model_zoo.md)》。
:::

### 视频超分辨率

**1. 使用 FFmpeg 提取视频帧**

提前创建文件夹如 tmp_frames。

``` shell
ffmpeg -i onepiece_demo.mp4 -qscale:v 1 -qmin 1 -qmax 1 -vsync 0 tmp_frames/frame%08d.png
```

**2. 使用 Real-ESRGAN 执行文件进行推理**

以 Windows 系统为例，提前创建文件夹如 out_frames。

``` shell
realesrgan-ncnn-vulkan.exe -i tmp_frames -o out_frames -n realesr-animevideov3 -s 2 -f jpg
```

**3. 将增强后的帧重新编码成视频**

首先从输入视频中获得 FPS：

``` shell
ffmpeg -i onepiece_demo.mp4
```

您将得到类似于以下屏幕截图的输出。

<Img src="/images/guide/2025/04/real-esrgan/real-esrgan-huo-qu-shi-pin-fps.webp" alt="Real-ESRGAN 获取视频 FPS" />

合并视频：

``` shell
ffmpeg -r 23.98 -i out_frames/frame%08d.jpg -c:v libx264 -r 23.98 -pix_fmt yuv420p output.mp4
```

如果您还想保留原始音频，可以使用以下命令：

``` shell
ffmpeg -r 23.98 -i out_frames/frame%08d.jpg -i onepiece_demo.mp4 -map 0:v:0 -map 1:a:0 -c:a copy -c:v libx264 -r 23.98 -pix_fmt yuv420p output_w_audio.mp4
```

完！

**参考资料**

1. [Real-ESRGAN GitHub](https://github.com/xinntao/Real-ESRGAN)
2. [Real-ESRGAN 动漫视频模型介绍 - GitHub](https://github.com/xinntao/Real-ESRGAN/blob/master/docs/anime_video_model.md)