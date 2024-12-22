---
title: "Remote Sensing Image Super-Resolution via Saliency-Guided Feedback GANs"
authors:
- hlwu
- Libao Zhang
- Jie Ma
date: "2020-12-21T00:00:00Z"
doi: "10.1109/TGRS.2020.3042515"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-12-21T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["Journal"]

# Publication name and optional abbreviated publication name.
publication: "IEEE Transactions on Geoscience and Remote Sensing"
publication_short: "*IEEE Trans. Geosci. Remote Sens.*"

abstract: In remote sensing images (RSIs), the visual characteristics of different regions are versatile, which poses a considerable challenge to single image super-resolution (SISR). Most existing SISR methods for RSIs ignore the diverse reconstruction needs of different regions and thus face a serious contradiction between high perception quality and less spatial distortion. The mean square error (MSE) optimization-based methods produce results of unsatisfactory visual quality, while generative adversarial networks (GANs) can produce photo-realistic but severely distorted results caused by pseudotextures. In addition, increasingly deeper networks, although providing powerful feature representations, also face problems of overfitting and occupying too much storage space. In this article, we propose a new saliency-guided feedback GAN (SG-FBGAN) to address these problems. The proposed SG-FBGAN applies different reconstruction principles for areas with varying levels of saliency and uses feedback (FB) connections to improve the expressivity of the network while reducing parameters. First, we propose a saliency-guided FB generator with our carefully designed paired-feedback block (PFBB). The PFBB uses two branches, a salient and a nonsalient branch, to handle the FB information and generate powerful high-level representations for salient and nonsalient areas, respectively. Then, we measure the visual perception quality of salient areas, nonsalient areas, and the global image with a saliency-guided multidiscriminator, which can dramatically eliminate pseudotextures. Finally, we introduce a curriculum learning strategy to enable the proposed SG-FBGAN to handle complex degradation models. Comprehensive evaluations and ablation studies validate the effectiveness of our proposal.

# Summary. An optional shortened abstract.
summary:

tags:
- Super-resolution
- GAN
- Saliency
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: ""
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
