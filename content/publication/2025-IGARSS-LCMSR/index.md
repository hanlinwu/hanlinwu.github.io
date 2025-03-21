---
title: "Single-Step Latent Consistency Model for Remote Sensing Image Super-Resolution"
authors:
- Xiaohui Sun
- Jiangwei Mo
- hlwu
- Jie Ma
date: "2025-03-21"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-03-21T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["Conference paper"]

# Publication name and optional abbreviated publication name.
publication: "*2025 IEEE International Geoscience and Remote Sensing Symposium*"
publication_short: "*IGARSS 2025*"
abstract: Recent advancements in diffusion models (DMs) have greatly advanced remote sensing image super-resolution (RSISR). However, their iterative sampling processes often result in slow inference speeds, limiting their application in real-time tasks. To address this challenge, we propose the latent consistency model for super-resolution (LCMSR), a novel single-step diffusion approach designed to enhance both efficiency and visual quality in RSISR tasks. Our proposal is structured into two distinct stages. In the first stage, we pretrain a residual autoencoder to encode the differential information between high-resolution (HR) and low-resolution (LR) images, transitioning the diffusion process into a latent space to reduce computational costs. The second stage focuses on consistency diffusion learning, which aims to learn the distribution of residual encodings in the latent space, conditioned on LR images. The consistency constraint enforces that predictions at any two timesteps along the reverse diffusion trajectory remain consistent, enabling direct mapping from noise to data. As a result, the proposed LCMSR reduces the iterative steps of traditional diffusion models from 50-1000 or more to just a single step, significantly improving efficiency. Experimental results demonstrate that LCMSR effectively balances efficiency and performance, achieving inference times comparable to non-diffusion models while maintaining high-quality output.
summary: 

tags:
- Remote sensing
- Supre-resolution
- Latent consistency model
- Single-step diffusion
featured: true

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

# # Featured image
# # To use, add an image named `featured.jpg/png` to your page's folder. 
# image:
#   placement: 2
#   caption: 'Flowchart'
#   focal_point: "Center"
#   preview_only: false

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
