---
title: "SD-FB-GAN: Saliency-Driven Feedback Gan for Remote Sensing Image Super-Resolution Reconstruction"
authors:
- Jie Ma
- hlwu
- Jue Zhang
- Libao Zhang

date: "2020-09-30T00:00:00Z"
doi: "10.1109/ICIP40778.2020.9190835"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-09-30T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["Conference"]

# Publication name and optional abbreviated publication name.
publication: "*2020 IEEE International Conference on Image Processing (ICIP)*"
publication_short: "*ICIP 2020*"
abstract: "The visual characteristics of different regions in remote sensing images are significantly versatile, which poses a huge challenge to single image super-resolution. Although generative adversarial network (GAN) has shown great potential in generating photo-realistic results, it provides unsatisfactory performance in objective metrics owning to pseudo textures brought by adversarial learning. In this paper, we propose a new saliency-driven feedback GAN to cope with these problems. We design a saliency-driven feedback generator based on paired-feedback blocks (PFBBs) and recurrent structure to provide strong reconstruction ability. In the PFBB, the saliency map serves as an indicator to reflect the texture complexity, so different reconstruction principles can be applied to restore areas with varying levels of saliency. Besides, we propose to measure the visual quality of salient areas, non-salient areas, and the whole image with multi-discriminators, which can dramatically eliminate pseudo textures. Comprehensive evaluations and ablation studies validate the superiority of our proposal."

# Summary. An optional shortened abstract.
summary: Image enhancement, super-resolution, saliency analysis

tags:
- Super-resolution
- Saliency
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