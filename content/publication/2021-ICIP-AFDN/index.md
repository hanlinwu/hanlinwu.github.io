---
title: "AFDN: Attention-Based Feedback Dehazing Network For Uav Remote Sensing Image Haze Removal"
authors:
- Shan Wang
- hlwu
- Libao Zhang
date: "2021-08-23T00:00:00Z"
doi: "10.1109/ICIP42928.2021.9506604"

# Schedule page publish date (NOT publication's date).
publishDate: "2021-08-23T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["Conference"]

# Publication name and optional abbreviated publication name.
publication: "*2021 IEEE International Conference on Image Processing (ICIP)*"
publication_short: "*ICIP 2021*"
abstract: "To efficiently remove haze in unmanned aerial vehicle (UAV) remote sensing images, a novel attention-based feedback dehazing network (AFDN) is proposed, which is constructed by feedback connections and attention-based feedback blocks (AFBs). It has three major advantages compared with other dehazing algorithms: 1) The feedback connections, which allow network to use previous state to improve current performance, can effectively help the proposed AFDN generate clear remote sensing scenes progressively. 2) The AFBs are specially designed to extract global residual features, in which the dual attention block can usefully reduce redundant information and improve the fitting ability of network. 3) To obtain abundant texture information from UAV remote sensing images and restore real ground surfaces, an energy loss is employed for texture features learning. Experiments on synthetic datasets and real UAV remote sensing images verify the superiority of AFDN over several state-of-the-art methods in terms of qualitative and quantitative analysis."

# Summary. An optional shortened abstract.
summary: Image enhancement, remote sensing image dehazing, feedback mechanism, CNN

tags:
- Image enhancement
- Remote sensing image dehazing
- feedback mechanism
- CNN
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