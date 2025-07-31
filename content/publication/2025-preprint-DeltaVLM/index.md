---
title: "DeltaVLM: Interactive Remote Sensing Image Change Analysis via Instruction-guided Difference Perception"
authors:
- Pei Deng
- Wenqian Zhou
- hlwu
date: "2025-07-30"
doi: "10.48550/arXiv.2507.22346"

# Schedule page publish date (NOT publication's date).
publishDate: "2025-07-30T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["Preprint Paper"]

# Publication name and optional abbreviated publication name.
publication: "arXiv:2507.22346"
publication_short: "arXiv:2507.22346"

abstract: "Accurate interpretation of land-cover changes in multi-temporal satellite imagery is critical for real-world scenarios. However, existing methods typically provide only one-shot change masks or static captions, limiting their ability to support interactive, query-driven analysis. In this work, we introduce remote sensing image change analysis (RSICA) as a new paradigm that combines the strengths of change detection and visual question answering to enable multi-turn, instruction-guided exploration of changes in bi-temporal remote sensing images. To support this task, we construct ChangeChat-105k, a large-scale instruction-following dataset, generated through a hybrid rule-based and GPT-assisted process, covering six interaction types: change captioning, classification, quantification, localization, open-ended question answering, and multi-turn dialogues. Building on this dataset, we propose DeltaVLM, an end-to-end architecture tailored for interactive RSICA. DeltaVLM features three innovations: (1) a fine-tuned bi-temporal vision encoder to capture temporal differences; (2) a visual difference perception module with a cross-semantic relation measuring (CSRM) mechanism to interpret changes; and (3) an instruction-guided Q-former to effectively extract query-relevant difference information from visual changes, aligning them with textual instructions. We train DeltaVLM on ChangeChat-105k using a frozen large language model, adapting only the vision and alignment modules to optimize efficiency. Extensive experiments and ablation studies demonstrate that DeltaVLM achieves state-of-the-art performance on both single-turn captioning and multi-turn interactive change analysis, outperforming existing multimodal large language models and remote sensing vision-language models. Code, dataset and pre-trained weights are available at https://github.com/hanlinwu/DeltaVLM."
summary: 

tags:
- Remote sensing
- VLM
- Change Analysis
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: 'https://arxiv.org/pdf/2507.22346'
url_code: 'https://github.com/hanlinwu/DeltaVLM'
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
