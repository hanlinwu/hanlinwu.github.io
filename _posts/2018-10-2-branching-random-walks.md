---
title: 分枝随机游动
tags:
 - 随机过程
key : branching-random-walks
mathjax: true
---

## 1.2 分枝随机游动

离散时间, 一维的分枝随机游动是 Galton-Waston 过程的一种空间中的扩展. 分枝随机游动的分布, 由一个$\mathbb R$上有限的点过程 $\Xi$ 决定. 直观地, 可将$\Xi$看成是一个随机的$N$元组$(\xi_i,1\leq i\leq N)$, $\xi_i\in\mathbb R, 1\leq i\leq N$. 注意：$N$也是随机的. 下面严格地给出点过程的定义. 

### 随机测度与点过程的定义

我们首先给出随机测度的概念. 设$E$是完备可分的度量空间, 记$\mathscr E=\mathscr B(E)$. 用$M$表示$E$上的博雷尔测度(定义在Borel集上的测度)的全体, 并定义$M$上的$\sigma$代数

$$
    \mathscr M=\sigma(\{\nu\mapsto \mu(B):B\in\mathscr E\}).
$$

定义在某个完备的概率空间$(\Omega,\mathscr F,\mathbf P)$, 取值于$(M,\mathscr M)$的随机元$X$称为$E$上的随机测度. 令$E_0\subset E$为所有只取正整数值的测度全体, $\mathscr M_0 = E_0\cap \mathscr M$. 如果$X$是$(E,\mathscr E)\rightarrow (M_0,\mathscr M_0)$的可测映射, 则称$X$为点过程. 给定$E$上的随机测度$X$, 

$$
    \mu(B)=\mathbf E(X(B))
$$

为$E$上的测度, 称之为$X$的强度. 特别地, 有如下普瓦松随机测度的定义：
![pic1](/assets/images/branching-random-walks/pic1.jpg)

### 分枝随机游动的定义

- 最初有一个祖先位于原点. 
- 这个祖先的孩子构成第一代：孩子们在$\mathbb R$上的分布, 服从点过程$\Xi$. 
- 每个孩子再按照同样的方式产生后代：即他们的后代构成第二代, 其后代的位置(相对于其本身)分布也服从$\Xi$. 
- 系统无限地进行下去. 
- 我们通常假设, 第$n$代中的每个粒子产生后代时, 与$n$代的其他粒子独立, 且与前$n-1$代独立. 

![pic2](/assets/images/branching-random-walks/pic2.jpg)

上图为一个分枝随机游动的示意图, **注意：可能在一个位置有多个粒子.** 如果我们只关心每一代中的例子个数而不关心它们所在的位置, 那么就退化成了G-W过程. 其分枝机制为$N:=\# \Xi$. 

令$\mid x\mid$表示粒子$x$所在的代数, $x_i$表示$x$的第$i$代的祖先($x_0=\varnothing$, $x_{\mid x\mid}=x$). 令$V(x)$表示粒子$x$所在的位置, 我们常常关心最左位置(或者最小位置)$\inf_{\mid x\mid = n}V(x)$的渐进行为.  

### 点过程的 Laplace 变换
定义点过程的$\log$-Laplace变换为：

$$
    \psi(t):=\ln \mathbf E\left(\sum_{\mid x\mid =1 }e^{-t V(x)}\right)\in (-\infty,\infty], t\in\mathbb R.
$$

通常假设$\psi(0)>0$, 存在$t_0>0$使得$\psi(t_0)<\infty$. 

假设$\psi(0)>0$意味着分枝机制是上临界的, 即过程以概率1不灭绝. $\psi(0)$可以是无穷. $\inf_{t>0} \psi(t)<\infty$的假设保证了最左位置有一个线性的阶.
## 1.3 Many-to-One 公式

固定$t>0$使得$\psi(t)<\infty$. 

令$S_0:=0$, $(S_n-S_{n-1}:n\geq 1)$是一列独立同分布的随机变量序列, 满足对于任何的可测函数$h:\mathbb R\rightarrow [0,\infty)$,

$$
    \mathbf E[h(S_1)]=\frac{\mathbf E[\sum_{\mid x\mid =1}e^{-tV(x)}h(V(x))]}{\mathbf E [\sum_{\mid x\mid =1} e^{-t V(x)}]},
$$

如果用点过程的记号, 上式可以表达成

$$
    \mathbf E[h(S_1)]=\frac{\mathbf E[\sum_{u\in\Xi}e^{-tu}h(u)]}{\mathbf E[\sum_{u\in\Xi}e^{-tu}]}.
$$

> 问题： $S_1$的存在性？

**定理1.1** (Many-to-One) 假设$t>0$满足$\psi(t)<\infty$. 对于任意的$n>1$和可测函数$g:\mathbb R^n\rightarrow [0,\infty)$, 有

$$
    \mathbf E\left[\sum_{\mid x\mid = n}g(V(x_1),\cdots,V(x_n))\right]=\mathbf E\left[e^{t S_n+n\psi(t)}g(S_1,\cdots,S_n)\right].
$$

**证明** 用归纳法证明. 对于$n=1$, 

$$
\begin{aligned}
    \mathbf E [e^{S_1+\psi(t)}g(S_1)]& =\mathbf E[e^{tS_1}g(S_1)]\mathbf{E}\left(\sum_{\mid x\mid =1}e^{-tV(x)}\right) \\
   (令 h(x)=e^{tx}g(x))& =  \mathbf E[h(S_1)]\mathbf{E}\left(\sum_{\mid x\mid =1}e^{-tV(x)}\right) \\
   (由S_1的定义)&= \mathbf E\left(\sum_{\mid x\mid=1}e^{-tV(x)}h(V(x))\right)\\
   &= \mathbf E\left(\sum_{\mid x\mid=1} g(V(x))\right).
\end{aligned}
$$
即得欲证等式. 设对于某个$n$结论成立, 

$\square$
## 1.4 应用：最左位置的速度