---
title: "Hierarchical Feature Aggregation and Self-Learning Network for Remote Sensing Image Continuous-Scale Super-Resolution"
authors:
- Ning Ni
- hlwu
- Libao Zhang
date: "2021-10-26T00:00:00Z"
doi: "10.1109/LGRS.2021.3122985"

# Schedule page publish date (NOT publication's date).
publishDate: "2021-10-26T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*IEEE Geoscience and Remote Sensing Letters*"
publication_short: "*IEEE Geosci. Remote Sens. Letters*"

abstract: Conducting research on remote sensing image (RSI) super-resolution (SR) is important, especially in terms of the continuous scale, which is beneficial to the application of RSI, such as RSI object detection and data fusion. Continuous-scale SR aims to use a single model to achieve SR at arbitrary (integer and noninteger) scale factors. Therefore, in this letter, we propose a hierarchical feature aggregation and self-learning network for RSI continuous-scale SR (RSI-HFAS). Our network can magnify the RSI continuously, which is beneficial for extracting the RSI multiscale features. First, we design a hierarchical feature aggregation module (HFAM) that is used for hierarchical feature extraction by placing convolutional layers on different floors and completing global feature fusion, which is crucial for achieving RSI continuous-scale SR with a single model. Second, the proposed network introduces a feedback mechanism, which can refine the hierarchical feature through feature feedback and enrich the texture parts of the RSI step by step. Finally, we design a self-learning upscaling structure to dynamically predict the number and weights of the upsampling filters, which can achieve RSI continuous-scale SR. Compared to the meta-learning based on enhanced deep SR (META-EDSR) method, our experimental results show a nearly 0.2-dB improvement on the metrics of the peak signal-to-noise ratio (PSNR).
# Summary. An optional shortened abstract.
summary: Remote sensing image, super-resolution, hierarchical feature, continuous-scale, feedback mechanism.

tags:
- Remote sensing image
- Super-resolution
- Hierarchical feature
- Continuous-scale
- Feedback mechanism
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: ""
url_code: 'https://github.com/NN-cell/RSI-HFAS'
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
