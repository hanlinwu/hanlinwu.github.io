---
title: "Lightweight Stepless Super-Resolution of Remote Sensing Images via Saliency-Aware Dynamic Routing Strategy"
authors:
- hlwu
- Ning Ni
- Libao Zhang
date: "2023-01-13T00:00:00Z"
doi: "10.1109/TGRS.2023.3236624"

# Schedule page publish date (NOT publication's date).
publishDate: "2023-01-13T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*IEEE Transactions on Geoscience and Remote Sensing*"
publication_short: "*IEEE Trans. Geosci. Remote Sens.* (SCI Q1 TOP)"

abstract: Deep learning-based algorithms have greatly improved the performance of remote sensing image (RSI) superresolution (SR). However, increasing network depth and parameters cause a huge burden of computing and storage. Directly reducing the depth or width of existing models results in a large performance drop. We observe that the SR difficulty of different regions in an RSI varies greatly, and existing methods use the same deep network to process all regions in an image, resulting in a waste of computing resources. In addition, existing SR methods generally predefine integer scale factors and cannot perform stepless SR, i.e., a single model can deal with any potential scale factor. Retraining the model on each scale factor wastes considerable computing resources and model storage space. To address the above problems, we propose a saliency-aware dynamic routing network (SalDRN) for lightweight and stepless SR of RSIs. First, we introduce visual saliency as an indicator of region-level SR difficulty and integrate a lightweight saliency detector into the SalDRN to capture pixel-level visual characteristics. Then, we devise a saliency-aware dynamic routing strategy that employs path selection switches to adaptively select feature extraction paths of appropriate depth according to the SR difficulty of subimage patches. Finally, we propose a novel lightweight stepless upsampling module whose core is an implicit feature function for realizing mapping from low-resolution feature space to high-resolution feature space. Comprehensive experiments verify that the SalDRN can achieve a good tradeoff between performance and complexity. The code is available at https://github.com/hanlinwu/SalDRN.
# Summary. An optional shortened abstract.
summary: Lightweight, remote sensing, saliency analysis, stepless, super-resolution (SR).

tags:
- Lightweight
- Remote sensing image
- Saliency analysis
- Stepless
- Scale aware
- Super-resolution
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: ''
url_code: 'https://github.com/hanlinwu/SalDRN'
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
  caption: 'Flowchart'
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
