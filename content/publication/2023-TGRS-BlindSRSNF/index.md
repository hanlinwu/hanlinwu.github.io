---
title: "Conditional Stochastic Normalizing Flows for Blind Super-Resolution of Remote Sensing Images"
authors:
- hlwu
- Ning Ni
- Shan Wang
- Libao Zhang
date: "2023-08-11T00:00:00Z"
doi: "10.1109/tgrs.2023.3304297"

# Schedule page publish date (NOT publication's date).
publishDate: "2023-08-11T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["Conference paper"]

# Publication name and optional abbreviated publication name.
publication: "*IEEE Transactions on Geoscience and Remote Sensing*"
publication_short: "*IEEE Trans. Geosci. Remote Sens.* (SCI Q1 TOP)"

abstract: Remote sensing images (RSIs) in real scenes may be disturbed by multiple factors, such as optical blur, undersampling, and additional noise, resulting in complex and diverse degradation models. At present, mainstream super-resolution (SR) algorithms only consider a single and fixed degradation (such as bicubic interpolation) and cannot flexibly handle complex degradations in real scenes. Therefore, designing an SR model that can deal with various degradations has gradually attracted researchers' attention. Some early studies estimate degradation kernels and then perform degradation-adaptive SR but face the problems of estimation error amplification and insufficient high-frequency details in the results. Although blind SR algorithms based on generative adversarial networks (GANs) have greatly improved visual quality, they still suffer from pseudo-texture, mode collapse, and poor training stability. This article proposes a novel blind SR framework based on the stochastic normalizing flow (BlindSRSNF) to address the above problems. BlindSRSNF learns the conditional probability distribution over the high-resolution image space given a low-resolution (LR) image by explicitly optimizing the variational bound on the likelihood. BlindSRSNF is easy to train and can generate photorealistic SR results that outperform GAN-based models. In addition, we introduce a degradation representation strategy based on contrastive learning to avoid the error amplification problem caused by explicit degradation estimation. Comprehensive experiments show that the proposed algorithm can obtain SR results with excellent visual perception quality on both simulated LR and real-world RSIs. The code is available at https://github.com/hanlinwu/BlindSRSNF.

# Summary. An optional shortened abstract.
summary: Remote sensing, blind super-resolution, deep learning, stochastic normalizing flow.

tags:
- Remote Sensing
- Blind super-resolution
- Deep learning
- Stochastic normalizing flow
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: ''
url_code: 'https://github.com/hanlinwu/BlindSRSNF'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Cover image
# To use, place an image named `featured.jpg/png` in your page's folder.
# Otherwise, specify the `filename` option to load an image from your `assets/media/` folder.
# Placement options: 1 = Full column width, 2 = Out-set, 3 = Screen-width
# Focal point options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
# Set `preview_only` to `true` to just use the image for thumbnails.
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
