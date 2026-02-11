const site = {
  homeUrl: "#top",
  publicationsUrl: "/publication/",
  heroBackground: "/media/bg-triangles.svg",
  nav: [
    { label: "About", href: "#about", active: true },
    { label: "Publications", href: "#papers", active: false },
    { label: "Funding", href: "#funding", active: false }
  ],
  profile: {
    name: "Hanlin Wu (吴瀚霖)",
    title: "Lecturer with the School of Information Science and Technology",
    org: "Beijing Foreign Studies University",
    orgUrl: "https://www.bfsu.edu.cn/",
    avatar: "/author/hanlin-wu-%E5%90%B4%E7%80%9A%E9%9C%96/avatar_hu17968607534277675451.png",
    emoji: "😃",
    aboutHtml: "<h2 id=\"about-me\">About Me</h2><p>Hanlin Wu received the B.S. degree in statistics and the Ph.D. degree in computer application technology from Beijing Normal University, Beijing, China, in 2015 and 2022, respectively. He is currently a Lecturer with the School of Information Science and Technology, Beijing Foreign Studies University, Beijing.</p>"
  },
  social: [
    {
      label: "E-mail Me",
      href: "mailto:hlwu@bfsu.edu.cn",
      ariaLabel: "at-symbol",
      target: "_self",
      icon: "<svg style='height: 1.5rem;' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-width='1.5' d='M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25'/></svg>"
    },
    {
      label: "GitHub",
      href: "https://github.com/hanlinwu",
      ariaLabel: "brands/github",
      target: "_blank",
      icon: "<svg style='height: 1.5rem;' fill='currentColor' viewBox='3 3 18 18'><path d='M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z'></path></svg>"
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=o4bZgbIAAAAJ",
      ariaLabel: "academicons/google-scholar",
      target: "_blank",
      icon: "<svg style='height: 1.5rem;' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M343.759 106.662V79.43L363.524 64h-213.89L20.476 176.274h85.656a82.339 82.339 0 0 0-.219 6.225c0 20.845 7.22 38.087 21.672 51.861c14.453 13.797 32.252 20.648 53.327 20.648c4.923 0 9.75-.368 14.438-1.024c-2.907 6.5-4.374 12.523-4.374 18.142c0 9.875 4.499 20.43 13.467 31.642c-39.234 2.67-68.061 9.732-86.437 21.163c-10.531 6.5-19 14.704-25.39 24.531c-6.391 9.9-9.578 20.515-9.578 31.962c0 9.648 2.062 18.336 6.219 26.062c4.156 7.726 9.578 14.07 16.312 18.984c6.718 4.968 14.469 9.101 23.219 12.469c8.734 3.344 17.406 5.718 26.061 7.062A167.052 167.052 0 0 0 180.555 448c13.469 0 26.953-1.734 40.547-5.187c13.562-3.485 26.28-8.642 38.171-15.493c11.86-6.805 21.515-16.086 28.922-27.718c7.39-11.68 11.094-24.805 11.094-39.336c0-11.016-2.25-21.039-6.75-30.14c-4.468-9.073-9.938-16.542-16.452-22.345c-6.501-5.813-13-11.155-19.516-15.968c-6.5-4.845-12-9.75-16.468-14.813c-4.485-5.046-6.735-10.054-6.735-14.984c0-4.921 1.734-9.672 5.216-14.265c3.455-4.61 7.674-9.048 12.61-13.306c4.937-4.25 9.875-8.968 14.796-14.133c4.922-5.147 9.141-11.827 12.61-20.008c3.485-8.18 5.203-17.445 5.203-27.757c0-13.453-2.547-24.46-7.547-33.314c-.594-1.022-1.218-1.803-1.875-3.022l56.907-46.672v17.119c-7.393.93-6.624 5.345-6.624 10.635V245.96c0 5.958 4.875 10.834 10.834 10.834h3.989c5.958 0 10.833-4.875 10.833-10.834V117.293c0-5.277.778-9.688-6.561-10.63zm-107.36 222.48c1.14.75 3.704 2.78 7.718 6.038c4.05 3.243 6.797 5.695 8.266 7.414a443.553 443.553 0 0 1 6.376 7.547c2.813 3.375 4.718 6.304 5.718 8.734c1 2.477 2.016 5.461 3.047 8.946a38.27 38.27 0 0 1 1.485 10.562c0 17.048-6.564 29.68-19.656 37.859c-13.125 8.18-28.767 12.274-46.938 12.274c-9.187 0-18.203-1.093-27.063-3.196c-8.843-2.116-17.311-5.336-25.39-9.601c-8.078-4.258-14.577-10.204-19.5-17.797c-4.938-7.64-7.407-16.415-7.407-26.25c0-10.32 2.797-19.29 8.422-26.906c5.594-7.625 12.938-13.391 22.032-17.315c9.063-3.946 18.25-6.742 27.562-8.398a157.865 157.865 0 0 1 28.438-2.555c4.47 0 7.936.25 10.405.696c.455.219 3.032 2.07 7.735 5.563c4.704 3.462 7.625 5.595 8.75 6.384zm-3.359-100.579c-7.406 8.86-17.734 13.288-30.953 13.288c-11.86 0-22.298-4.764-31.266-14.312c-9-9.523-15.422-20.328-19.344-32.43c-3.937-12.109-5.906-23.984-5.906-35.648c0-13.694 3.596-25.352 10.781-34.976c7.187-9.65 17.5-14.485 30.938-14.485c11.875 0 22.374 5.038 31.437 15.157c9.094 10.085 15.61 21.413 19.517 33.968c3.922 12.54 5.873 24.53 5.873 35.984c0 13.446-3.702 24.61-11.076 33.454z'/></svg>"
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0000-0002-3505-0521",
      ariaLabel: "academicons/orcid",
      target: "_blank",
      icon: "<svg style='height: 1.5rem;' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M336.62 194.538c-7.13-3.328-13.866-5.56-20.253-6.614c-6.365-1.095-16.574-1.612-30.71-1.612h-36.704v152.747h37.634c14.673 0 26.081-1.013 34.224-3.017c8.142-2.004 14.921-4.526 20.356-7.626a69.448 69.448 0 0 0 14.942-11.388c14.488-14.714 21.742-33.273 21.742-55.717c0-22.052-7.44-40.052-22.341-53.982c-5.498-5.166-11.822-9.444-18.89-12.793zM256 8C119.022 8 8 119.042 8 256s111.022 248 248 248s248-111.042 248-248S392.978 8 256 8Zm-82.336 357.513h-29.389V160.148h29.389zM158.95 138.696c-11.14 0-20.213-9.01-20.213-20.212c0-11.118 9.052-20.191 20.213-20.191c11.18 0 20.232 9.052 20.232 20.191a20.194 20.194 0 0 1-20.232 20.212zm241.386 163.597c-5.29 12.545-12.834 23.581-22.65 33.088c-9.982 9.837-21.597 17.194-34.844 22.196c-7.75 3.017-14.839 5.063-21.307 6.117c-6.49 1.013-18.828 1.509-37.076 1.509h-64.956V160.148h69.233c27.962 0 50.034 4.154 66.32 12.545c16.265 8.37 29.181 20.728 38.792 36.972c9.61 16.265 14.425 34.018 14.425 53.196c.023 13.765-2.666 26.908-7.936 39.432z'/></svg>"
    }
  ],
  interests: [
    "Computer Vision",
    "Multimodal Machine Learning",
    "Image Restoration",
    "Score-based Generative Models",
    "Remote Sensing Image Processing"
  ],
  education: [
    {
      degree: "Ph.D. in Computer Application Technology",
      school: "Beijing Normal University"
    },
    {
      degree: "M.S. in Probability and Statistics",
      school: "Beijing Normal University"
    },
    {
      degree: "B.S. in Statistics",
      school: "Beijing Normal University"
    }
  ],
  research: [
    {
      title: "Super-resolution (SR)",
      description: "SR techniques for remote sensing images, particularly continuous-scale methods, developing lightweight and dynamic models to enhance data quality."
    },
    {
      title: "Vision-Language Models (VLMs)",
      description: "Multi-modal (vision-language) remote sensing data processing, involving efficient image-text retrieval and change interpretation in large datasets."
    }
  ],
  featuredPublications: [
    {
      title: "DeltaVLM: Interactive Remote Sensing Image Change Analysis via Instruction-guided Difference Perception",
      tag: "Remote Sensing",
      href: "/publication/2025-preprint-deltavlm/",
      image: "/publication/2025-preprint-deltavlm/featured_hu11254646614533154112.webp",
      date: "2025-07-30",
      dateLabel: "Jul 30, 2025"
    },
    {
      title: "Latent Diffusion, Implicit Amplification: Efficient Continuous-Scale Super-Resolution for Remote Sensing Images",
      tag: "Remote Sensing",
      href: "/publication/2025-tgrs-latentdiffsr/",
      image: "/publication/2025-tgrs-latentdiffsr/featured_hu18243097957329172730.webp",
      date: "2025-05-19",
      dateLabel: "May 19, 2025"
    },
    {
      title: "ChangeChat: An Interactive Model for Remote Sensing Change Analysis via Multimodal Instruction Tuning",
      tag: "Multimodal",
      href: "/publication/2025-icassp-changechat/",
      image: "/publication/2025-icassp-changechat/featured_hu9713426173018504942.webp",
      date: "2025-01-01",
      dateLabel: "Jan 1, 2025"
    }
  ],
  funding: [
    "⭐ 2025.01-2027.12，国家自然科学基金青年科学基金项目：开放场景下认知启发的遥感影像超分辨率重建方法研究, 主持",
    "⭐ 2024.06-2027.06，北京外国语大学学术青年创新团队项目：生成式大语言模型的核心价值观对齐研究，参与",
    "⭐ 2024.06-2027.06，北京外国语大学：基于状态空间扩散模型的遥感影像变化描述方法研究，参与",
    "⭐ 2023.01-2025.12，国家自然科学基金面上项目：演进学习框架下协同感知显著性引导的弱标注遥感影像语义分割方法研究，参与",
    "⭐ 2022.09-2025.09，北京外国语大学：自适应学习框架下显著性引导的遥感影像超分辨率重建方法研究，主持"
  ],
  footerText: "© 2026 Hanlin Wu. Built with Vue (no static site generator)."
};

const { createApp } = Vue;

createApp({
  data() {
    return { site };
  },
  methods: {
    toggleTheme() {
      const isDark = document.documentElement.classList.contains("dark");
      if (isDark) {
        localStorage.setItem("wc-color-theme", "light");
        window.hbb.setLightTheme();
      } else {
        localStorage.setItem("wc-color-theme", "dark");
        window.hbb.setDarkTheme();
      }
    }
  }
}).mount("#app");
