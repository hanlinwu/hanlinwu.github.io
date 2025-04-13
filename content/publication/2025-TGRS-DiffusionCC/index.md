---
title: "Diffusion-RSCC: Diffusion Probabilistic Model for Change Captioning in Remote Sensing Images"
authors:
- Xiaofei Yu
- Yitong Li
- Jie Ma
- Chang Li
- hlwu
date: "2025-03-25"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-03-25T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["Journal article"]

# Publication name and optional abbreviated publication name.
publication: "*IEEE Transactions on Geoscience and Remote Sensing*"
publication_short: "*IEEE Trans. Geosci. Remote Sens.* (SCI Q1 TOP)"

abstract: Remote sensing image change captioning (RSICC) aims at generating human-like language to describe the semantic changes between bitemporal remote sensing image (RSI) pairs. It provides valuable insight into environmental dynamics and land management. Unlike conventional change captioning (CC) tasks, RSICC involves not only retrieving relevant information across different modalities and generating fluent captions but also mitigating the impact of pixel-level differences on the terrain change localization. Pixel-level discrepancies over a long time span decrease caption accuracy. To address these problems, we propose a probabilistic diffusion-based model that leverages its remarkable generative capability to produce flexible captions. In the training phase, we construct a condition denoiser to efficiently map the real caption distribution to a standard Gaussian distribution. This denoiser incorporates cross-mode fusion (CMF) and stacking self-attention (SSA) modules to enhance cross-modal alignment and reduce pixel interference, thereby improving caption accuracy. In the training phase, the condition denoiser provides a new strategy for mean value estimation and helps to generate captions step by step. Extensive experiments on the LEVIR-CC dataset and DUBAI-CC dataset demonstrate the effectiveness of our Diffusion-RSCC and each of its individual components. The quantitative results showcase superior performance over existing methods across both traditional and newly introduced metrics. The code is available at https://github.com/Fay-Y/Diffusion-RSCC.
summary: 

tags:
- Remote sensing
- Change captioning
- Diffusion
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: 'https://ieeexplore.ieee.org/document/10938702'
url_code: 'https://github.com/Fay-Y/Diffusion-RSCC'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 

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
<!-- 
{{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Supplementary notes can be added here, including [code, math, and images](https://wowchemy.com/docs/writing-markdown-latex/). -->
