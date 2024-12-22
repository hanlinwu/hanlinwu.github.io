---
title: "跨尺度耦合的连续比例因子图像超分辨率"
authors:
- hlwu
- 李宛谕
- 张立保
date: "2022-01-18T00:00:00Z"
doi: "10.11834/jig.210815"

# Schedule page publish date (NOT publication's date).
publishDate: "2022-01-18T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["Journal"]

# Publication name and optional abbreviated publication name.
publication: "中国图象图形学报"
publication_short: "中国图象图形学报 (CCF T2)"

abstract:  "**目的**：虽然深度学习技术已大幅提高了图像超分辨率的性能，但是现有方法大多仅考虑了特定的整数比 例因子,不能灵活地实现连续比例因子的超分辨率。现有方法通常为每个比例因子训练一次模型，导致耗费很长的训练时间和占用过多的模型存储空间。 针对以上问题，本文提出了一种基于跨尺度耦合网络的连续比例因子超分辨率方法。 <br/>
**方法**：提出一个用于替代传统上采样层的跨尺度耦合上采样模块,用于实现连续比例因子上采样。 其次，提出一个跨尺度卷积层，可以在多个尺度上并行提取特征，通过动态地激活和聚合不同尺度的特征来挖掘跨 尺度上下文信息,有效提升连续比例因子超分辨率任务的性能。 <br/>
**结果**：在3个数据集上与最新的超分辨率方法进行比较,在连续比例因子任务中，相比于性能第 2 的对比算法 Meta-SR( meta super-resolution) ，峰值信噪比提升达 0.13 dB,而参数量减少了 73% 。在整数比例因子任务中，相比于参数量相近的轻量网络 SRFBN( super-resolution feedback network) ，峰值信噪比提升达 0.24 dB。 同时，提出的算法能够生成视觉效果更加逼真、纹理更加清晰的结果。 消融实验证明了所提算法中各个模块的有效性。 <br/>
**结论**：本文提出的连续比例因子超分辨率模型，仅需要一次训练，就可以在任意比例因子上获得优秀的超分辨率结果。 此外，跨尺度耦合上采样模块可以用于替代常用的亚像素层或反卷积层，在实现连续比例因子上采样的同时，保持模型性能。"
# Summary. An optional shortened abstract.
summary: Lightweight, remote sensing, saliency analysis, stepless, super-resolution (SR).

tags:
- Super-resolution
- Remote sensing
- Saliency analysis
- Continuous Scale

featured: false

# links:
# - name: ""
#   url: ""
url_pdf: ''
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  placement: 2
  caption: '流程图'
  focal_point: "Center"
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---

<!-- {{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Supplementary notes can be added here, including [code, math, and images](https://wowchemy.com/docs/writing-markdown-latex/). -->
