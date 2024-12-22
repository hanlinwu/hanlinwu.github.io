---
title: "Toward Efficient and Accurate Remote Sensing Image-Text Retrieval with a Coarse-to-Fine Approach"
authors:
- Wenqian Zhou
- hlwu
- Pei Deng
date: "2024-11-08T00:00:00Z"
doi: "10.1109/LGRS.2024.3494543"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-11-08T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["Journal article"]

# Publication name and optional abbreviated publication name.
publication: "*IEEE Geoscience and Remote Sensing Letters*"
publication_short: "*IEEE Geosci. Remote Sens. Letters*"
abstract: "Existing remote sensing (RS) image-text retrieval methods generally fall into two categories: dual-stream approaches and single-stream approaches. Dual-stream models are efficient but often lack sufficient interaction between visual and textual modalities, while single-stream models offer high accuracy but suffer from prolonged inference time. To pursue a trade-off between efficiency and accuracy, we propose a novel coarse-to-fine image-text retrieval (CFITR) framework that integrates both dual-stream and single-stream architectures into a two-stage retrieval process. Our method begins with a dual-stream hashing module (DSHM) to perform coarse retrieval by leveraging precomputed hash codes for efficiency. In the subsequent fine retrieval stage, a single-stream module (SSM) refines these results using a joint transformer to improve accuracy through enhanced cross-modal interactions. We introduce a local feature enhancement module (LFEM) based on convolutions to capture detailed local features and a post-processing similarity reranking (PPSR) algorithm that optimizes retrieval results without additional training. Extensive experiments on the RSICD and RSITMD datasets demonstrate that our CFITR framework significantly improves retrieval accuracy and supports real-time performance. Our code is publicly available at https://github.com/ZhWenQian/CFITR."
# Summary. An optional shortened abstract.
summary: 

tags:
- Multimodal
- Remote sensing image
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: ''
url_code: 'https://github.com/ZhWenQian/CFITR'
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
