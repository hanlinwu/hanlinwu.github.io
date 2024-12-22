---
title: "Learning Dynamic Scale Awareness and Global Implicit Functions for Continuous-Scale Super-Resolution of Remote Sensing Images"
authors:
- hlwu
- Ning Ni
- Libao Zhang
date: "2023-01-27T00:00:00Z"
doi: "10.1109/TGRS.2023.3240254"

# Schedule page publish date (NOT publication's date).
publishDate: "2023-01-27T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["Conference paper"]

# Publication name and optional abbreviated publication name.
publication: "*IEEE Transactions on Geoscience and Remote Sensing*"
publication_short: "*IEEE Trans. Geosci. Remote Sens.* (SCI Q1 TOP)"

abstract: The mainstream remote sensing image (RSI) superresolution (SR) algorithms treat tasks with different scale factors independently, and a single model can only process a fixed integer scale factor. However, in practical applications, it is important to continuously super-resolve RSIs to multiple resolutions, as different resolutions present various levels of detail. Retraining the model for each scale factor consumes huge computational resources and storage space. Existing continuous-scale SR models employ static convolutions, and most are designed for natural scenes, ignoring dynamic feature extraction needs for different scale factors and the inherent properties of RSIs. In addition, efficiently obtaining the continuous representation of RSIs and avoiding the artifacts of RSI SR results is still a challenging problem. To address the above problems, we propose a scale-aware dynamic network (SADN) for RSI continuous-scale SR. First, we devise a scale-aware dynamic convolutional (SAD-Conv) layer to handle the strong randomness of the RSI textural distribution and achieve dynamic feature extraction according to scale factors. Second, we devise a continuous-scale upsampling module (CSUM) with the multi-bilinear global implicit function (MBGIF) for any-scale upsampling. The CSUM constructs multiple feature spaces with asymptotic resolutions to approximate the continuous representation of an image, and then, the MBGIF makes full use of multiresolution features to map arbitrary coordinates to spectral values. We evaluate our SADN using various benchmarks, and the experimental results show that the CSUM can efficiently achieve continuous-scale upsampling while maintaining excellent objective and visual performance. Moreover, our SADN uses fewer parameters and even outperforms the state-of-theart fixed-scale SR methods. The source code is available at https://github.com/hanlinwu/SADN.

# Summary. An optional shortened abstract.
summary: Continuous scale, dynamic convolution, implicit function, remote sensing image (RSI), scale aware, superresolution (SR).

tags:
- Continuous scale
- Dynamic convolution
- Implicit function
- Remote sensing image
- Scale aware
- Super-resolution
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: ''
url_code: 'https://github.com/hanlinwu/SADN'
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
