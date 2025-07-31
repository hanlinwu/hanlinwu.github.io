---
title: "Latent Diffusion, Implicit Amplification: Efficient Continuous-Scale Super-Resolution for Remote Sensing Images"
authors:
- hlwu
- Jiangwei Mo
- Xiaohui Sun
- Jie Ma
date: "2025-05-19"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-05-19T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["Journal article"]

# Publication name and optional abbreviated publication name.
publication: "*IEEE Transactions on Geoscience and Remote Sensing*"
publication_short: "*IEEE Trans. Geosci. Remote Sens.* (SCI Q1 TOP)"
abstract: Recent advancements in diffusion models have significantly improved performance in super-resolution (SR) tasks. However, previous research often overlooks the fundamental differences between SR and general image generation. General image generation involves creating images from scratch, while SR focuses specifically on enhancing existing low-resolution (LR) images by adding typically missing high-frequency details. This oversight not only increases the training difficulty but also limits their inference efficiency. Furthermore, previous diffusion-based SR methods are typically trained and inferred at fixed integer scale factors, lacking flexibility to meet the needs of upsampling with non-integer scale factors. To address these issues, this paper proposes latent diffusion for continuous-scale SR (LDCSR), an efficient and flexible SR model designed for remote sensing imagery. LDCSR employs a two-stage latent diffusion paradigm. During the first stage, an autoencoder is trained to capture the differential priors between high-resolution (HR) and LR images. The encoder intentionally ignores the existing LR content to alleviate the encoding burden, while the decoder introduces an SR branch equipped with a continuous scale upsampling module to accomplish the reconstruction under the guidance of the differential prior. In the second stage, a conditional diffusion model is learned within the latent space to predict the true differential prior encoding. Experimental results demonstrate that LDCSR achieves superior objective metrics and visual quality compared to the state-of-the-art SR methods. Additionally, it reduces the inference time of diffusion-based SR methods to a level comparable to that of non-diffusion methods. The code is available https://github.com/MoooJianG/LDCSR.
# Summary. An optional shortened abstract.
summary: 

tags:
- Remote sensing
- Super-resolution
- Latent diffusion
- Continuous-scale
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: 'https://arxiv.org/pdf/2410.22830'
url_code: 'https://github.com/MoooJianG/LDCSR'
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
<!-- 
{{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Supplementary notes can be added here, including [code, math, and images](https://wowchemy.com/docs/writing-markdown-latex/). -->
