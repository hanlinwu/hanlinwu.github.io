---
title: Spinal Decomposition Theorem
tags:
 - 随机过程
 - 分枝随机游动
key : spinal-decomposition-theorem
mathjax: true
---
## 背景介绍

### 1 分枝过程

- **树的定义**：$\mathscr U:=\{\varnothing\}\cup \cup_{k=1}^\infty(\mathbb N^*)^k$. 树 $\omega$ 为 $\mathscr U$ 的子集, 且满足一些基本的条件. 
- $Z_n$ 为分枝过程, 给定其分枝机制, 能确定 $(\Omega,\mathscr F)$ 上的一个概率 $\mathbf P$.  $m$ 为其均值, 我们已知 $M_n := \frac{Z_n}{m^n}$ 是鞅. 
- 利用 $M_n$ 进行测度变换： 令 $\mathbf Q\mid_{\mathscr F_n}=M_n\cdot \mathbf P\mid_{\mathscr F_n}$. 在这个新的测度下, 过程的分枝机制变为 $\mathbf Q(Z_1=k)=\frac{kp_k}{m}$, 其中 $\{p_k,k\geq0\}$ 为分枝过程在 $\mathbf P$ 下的分枝机制. 
- **Size-Biased G-W Tree：** 
  - $\varnothing$ 按照 $\mathbf Q$ 产生后代.
  - 第一代中, 随机地(服从均匀分布)选取一个粒子为特殊粒子, 这个特殊粒子接下来按照 $\mathbf Q$ 产生后代, 其他粒子为正常的 G-W 树. 
  - 过程重复进行. 

### 2 分支随机游动

- 定义
  - 最初有一个祖先位于原点. 
  - 这个祖先的孩子构成第一代：孩子们在$\mathbb R$上的分布, 服从点过程$\Xi$. 
  - 每个孩子再按照同样的方式产生后代：即他们的后代构成第二代, 其后代的位置(相对于其本身)分布也服从$\Xi$. 
  - 系统无限地进行下去. 
  - 我们通常假设, 第$n$代中的每个粒子产生后代时, 与$n$代的其他粒子独立, 且与前$n-1$代独立. 

- Many-to-One 公式

$$\mathbf E\left[\sum_{\mid x\mid=n} g(V(x_1),\cdots,V(x_n))\right]=\mathbf E\left[e^{t s_n+n\psi(t)}g(S_1,\cdots,S_n)\right]$$
### 3 主要目的

- 在分枝随机游动中进行类似的测度变换, 使得过程不灭绝的概率为 $1$, 并给直观解释. 
- 给出 many-to-one 公式中 $(S_n)$ 的直观解释.

### 4 思路

- 首先介绍 Spine 的概念；
- 然后介绍测度变换；
- 给出 Spine Decomposition 定理；
- 最后给出其应用；