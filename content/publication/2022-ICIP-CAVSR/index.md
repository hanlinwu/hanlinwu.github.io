---
title: "Deformable Alignment And Scale-Adaptive Feature Extraction Network For Continuous-Scale Satellite Video Super-Resolution"
authors:
- Ning Ni
- hlwu
- Libao Zhang
date: "2022-10-18T00:00:00Z"
doi: "10.1109/ICIP46576.2022.9897998"

# Schedule page publish date (NOT publication's date).
publishDate: "2022-10-18T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["Conference"]

# Publication name and optional abbreviated publication name.
publication: "*2022 IEEE International Conference on Image Processing (ICIP)*"
publication_short: "*ICIP 2022*"

abstract: Video super-resolution (VSR), especially continuous-scale VSR, plays a crucial role in improving the quality of satellite video. Continuous-scale VSR aims to use a single model to process arbitrary (integer or non-integer) scale factors, which is conducive to meeting the needs of video images transmission with different compression ratios and arbitrarily zooming by rolling the mouse wheel. In this article, we propose a novel network to achieve continuous-scale satellite VSR (CAVSR). Specifically, first, we propose a time-series-aware dynamic routing deformable alignment module (TDAM) for feature alignment. Second, we develop a scale-adaptive feature extraction module (SFEM), which uses the proposed scale-adaptive convolution (SA-Conv) to dynamically generate different filters based on the input scale information. Finally, we design a global implicit function feature-adaptive walk continuous-scale upsampling module (GFCUM), which can perform feature-adaptive walks according to the input features with different scale information and finally complete the continuous-scale mapping from coordinates to pixel values. Experimental results have demonstrated the CAVSR has superior reconstruction performance.

# Summary. An optional shortened abstract.
summary: Video super-resolution, continuous-scale, deformable convolutional alignment, scale-adaptive feature, feature-adaptive walk

tags:
- Video super-resolution
- Continuous-scale
- Deformable convolutional alignment
- Scale-adaptive feature
- Feature-adaptive walk
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: ""
url_code: ''
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

---

<!-- {{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Supplementary notes can be added here, including [code, math, and images](https://wowchemy.com/docs/writing-markdown-latex/). -->
