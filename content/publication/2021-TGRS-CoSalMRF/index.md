---
title: "Cosaliency Detection and Region-of-Interest Extraction via Manifold Ranking and MRF in Remote Sensing Images"
authors:
- Libao Zhang
- hlwu
date: "2021-05-27T00:00:00Z"
doi: "10.1109/TGRS.2020.3042515"

# Schedule page publish date (NOT publication's date).
publishDate: "2021-05-27T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["Journal"]

# Publication name and optional abbreviated publication name.
publication: "*IEEE Transactions on Geoscience and Remote Sensing*"
publication_short: "*IEEE Trans. Geosci. Remote Sens.*"

abstract: Saliency-based region-of-interest (ROI) extraction is significant for the interpretation of remote sensing images (RSIs). Recently, cosaliency detection has shown its superiority of better extraction of common ROIs by using both intraimage and interimage cues. However, most existing methods still suffer from the complex backgrounds of RSIs, resulting in incomplete ROI extraction, many false positives, and blurred boundaries. In this article, we propose a cosaliency detection framework via manifold ranking and the Markov random field (MRF) for RSIs to address these problems. First, we design a two-stage manifold ranking schema for converting single-image saliency maps (SISMs) to multi-image saliency maps (MISMs). This step takes full advantage of the correlation between images to improve the integrity of ROIs and reduce false positives. Second, we locally fuse saliency proposals by minimizing the energy function in an MRF. The design of the energy function comprehensively considers the global and local performance of saliency proposals to assign appropriate fusion weights. Finally, we generate the ROI masks by thresholding the cosaliency maps. Our approach is evaluated on four RSI datasets and compared to the state-of-the-art methods. Experimental results demonstrate the effectiveness of our model in both cosaliency detection and ROI extraction.
# Summary. An optional shortened abstract.
summary: Manifold ranking, Markov random field (MRF), region-of-interest (ROI) extraction, remote sensing, saliency detection.

tags:
- Manifold ranking
- Markov random field (MRF)
- Region-of-interest (ROI)
- Remote sensing
- Saliency detection
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: ""
url_code: 'https://github.com/hanlinwu/TGRS-CSMRF'
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
