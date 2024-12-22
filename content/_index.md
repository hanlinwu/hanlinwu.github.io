---
# Leave the homepage title empty to use the site title
title: ""
date: 2024-11-14
type: landing

design:
  # Default section spacing
  spacing: "4rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: hlwu
      text: ""
    design:
      margin-top: 1
      css_class: dark
      background:
        image:
          # Add your image background to `assets/media/`.
          filename: bg-triangles.svg
          filters:
            brightness: 0.3
          size: cover
          position: center
          parallax: true
      spacing:
        padding: ['2em', '0', '6em', '0']
  - block: markdown
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
        **Super-resolution (SR):**  SR techniques for remote sensing images, particularly continuous-scale methods, developing lightweight and dynamic models to enhance data quality.

        **Vision-Language Models (VLMs):** multi-modal (vision-language) remote sensing data processing, involving efficient image-text retrieval and change interpretation in large datasets.
    design:
      columns: '1'
  - block: collection
    id: papers
    content:
      title: Featured Publications
      count: 3
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: article-grid
      columns: 3
  - block: collection
    content:
      title: "Publications"
      text: ""
      count: 20
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation
      spacing:
        padding: ['1rem', '0', '1rem', '0']

  - block: markdown
    id: funding
    content:
      title: 'Funding'
      subtitle: ''
      text: |- 
        <div style="padding-top:2rem;font-size:1rem;">
        ⭐ 2025.01-2027.12，国家自然科学基金青年科学基金项目：开放场景下认知启发的遥感影像超分辨率重建方法研究, 主持

        ⭐ 2024.06-2027.06，北京外国语大学学术青年创新团队项目：生成式大语言模型的核心价值观对齐研究，参与

        ⭐ 2024.06-2027.06，北京外国语大学：基于状态空间扩散模型的遥感影像变化描述方法研究，参与

        ⭐ 2023.01-2025.12，国家自然科学基金面上项目：演进学习框架下协同感知显著性引导的弱标注遥感影像语义分割方法研究，参与

        ⭐ 2022.09-2025.09，北京外国语大学：自适应学习框架下显著性引导的遥感影像超分辨率重建方法研究，主持
        </div>
    design:
      columns: '1'
---
