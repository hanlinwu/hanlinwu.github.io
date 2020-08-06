---
title: "CVPR2019: Second-order Attention Network for Single Image Super-Resolution"
tags:
 - SISR
key : CVPR2019-SAN
mathjax: true
---

# CVPR2019: Second-order Attention Network for Single Image Super-Resolution

![image-20191112100924476](C:\Users\hlwu\OneDrive - mail.bnu.edu.cn\5projects\hanlinwu.github.io\_posts\2019-11-12-second-order-attention-network-for-single-image-super-resolution.assets\image-20191112100924476.png)

## Abstract

- most of the existing CNN-based SISR methods mainly focus on wider or deeper architecture design, neglecting to explore the feature correlations ofintermediate layers, hence hindering the representational power of CNNs. 
- To address this issue, in this paper, we propose a second-order attention network (SAN) for more powerful feature expression and feature correlation learning. 
  - Specifically, a novel trainable second-order channel attention (SOCA) module is developed to adaptively rescale the channel-wise features by using second-order feature statistics for more discriminative representations. 
  - Furthermore, we present a non-locally enhanced residual group (NLRG) structure, which not only incorporates non-local operations to capture long-distance spatial contextual information, but also contains repeated local-source residual attention groups (LSRAG) to learn increasingly abstract feature representations. 
- Experimental results demonstrate the superiority ofour SANnetwork over state-of-the-art SISR methods in terms of both quantitative metrics and visual quality.

## Introduction

- We propose a deep second-order attention network (SAN) for accurate image SR. Extensive experiments on public datasets demonstrate the superiority of our SAN over state-of-the-art methods in terms of both quantitive and visual quality.
- We propose second-order channel attention (SOCA) mechanism to adaptively rescale features by consid- ering feature statistics higher than first-order. Such SOCA mechanism allows our network to focus on more informative features and enhance discriminative learning ability. Besides, we also utilize an iterative method for covariance normalization to speed up the training of our network.
- We propose non-locally enhanced residual group (NLRG) structure to build a deep network, which fur- ther incorporates non-local operations to capture spa- tial contextual information, and share-source residual group structure to learn deep features. Besides, the share-source residual group structure through share- source skip connections could allow more abundant in- formation from the LR input to be bypassed and ease the training of the deep network.

## Related work

- interpolation-based
- model-based
- CNN-based mothods

### CNN-based SR methods

- SRCNN
- VDSR:  more than 16 layers based on resual learning
- DRCN: more than 16 layers based on resual learning

### Attention mechanism

- SENet was introduced to deep CNNs to further improve SR perfomance.
  - only explores first-order statistics : global average pooling
  - while ignoring the statistic higher than first-order.
- In image SR, feature with more high-frequency informantion are more informative for HR reconstruction. 

## Method

### Network Framework

- shallow feature extraction

  ![image-20191112103317428](C:\Users\hlwu\OneDrive - mail.bnu.edu.cn\5projects\hanlinwu.github.io\_posts\2019-11-12-second-order-attention-network-for-single-image-super-resolution.assets\image-20191112103317428.png)

- non-locally enhanced residual group (NLRG)

  ![image-20191112103421670](C:\Users\hlwu\OneDrive - mail.bnu.edu.cn\5projects\hanlinwu.github.io\_posts\2019-11-12-second-order-attention-network-for-single-image-super-resolution.assets\image-20191112103421670.png)

- up-scale module

  ![image-20191112103524118](C:\Users\hlwu\OneDrive - mail.bnu.edu.cn\5projects\hanlinwu.github.io\_posts\2019-11-12-second-order-attention-network-for-single-image-super-resolution.assets\image-20191112103524118.png)

- reconstruction part

  ![image-20191112103624011](C:\Users\hlwu\OneDrive - mail.bnu.edu.cn\5projects\hanlinwu.github.io\_posts\2019-11-12-second-order-attention-network-for-single-image-super-resolution.assets\image-20191112103624011.png)

Then the SAN will be optimized with $L_1$ loss. 



### NLRG: Non-locally Enhanced Residual Group

![image-20191113090406155](C:\Users\hlwu\OneDrive - mail.bnu.edu.cn\5projects\hanlinwu.github.io\_posts\2019-11-12-second-order-attention-network-for-single-image-super-resolution.assets\image-20191113090406155.png)

- region-level non-local modules: RL-NL
  - exploits the abundant structure cues in LR features
  - self-similarities in HR nature scenes.
- share-source residual group: SSRG
  - G local-source residual attention groups (LSRAG)
  - Each LSRAG further contains M simplifies residual blocks with local-source skip connection. 
  - followed by a second-order channel attention (SOCA) module to exploit feature interdependencies.

It has been vertified that stacking residual blocks is helpful to form a deep CNN in [Bee, 2017, Ying, 2017]. However, very deep network built in such way would suffer from training difficulty and performance bottleneck due to the problem of gradient vanishing and exploding in deep network. 

Inspired by work [15], we proposed local-source residual attention group (LSRAG) as a fundamental unit.

**It is known that simply stacking repeated LSRAGs would fail to obtain better perfromance.** To address this issue, the share-source skip connection (SSC) is introduced in NLRG to not only facilitate the training of our deep network, but also to bypass abuntant low-frequency information from LR images. 

Then a LSRAG in the $g$-th group is represented as :

![image-20191113092522437](C:\Users\hlwu\OneDrive - mail.bnu.edu.cn\5projects\hanlinwu.github.io\_posts\2019-11-12-second-order-attention-network-for-single-image-super-resolution.assets\image-20191113092522437.png)

where the $W_{SSC}$ denotes the weights to the convolution layer, and is initialized as 0, and then gradually learns to assign more weight to the shallow feature. $H_g(\cdot)$ is the function of the $g$-th LSRAG.

**Such SSRG structure can not only ease the flow of information across LSRGAs, but also make it possible to train very deep CNN for image SR with hight performance.**



 #### Region-level non-local module (RL-NL).

#### Second-order Channel Attention (SOCA)

**On the other hand, recent works [19, 21] have shown that second-order statistics in deep CNNs are more helpful for more discrimi- native representations than first-order ones.**

