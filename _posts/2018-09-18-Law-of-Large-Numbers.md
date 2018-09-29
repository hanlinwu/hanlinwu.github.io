---
title: 几种大数定律的区别与联系
tags:
 - 概率论基础
key : law-of-large-numbers
mathjax: true
---
 
人们发现, 在重复的试验中, 随着试验次数的增加, 事件发生的频率会趋于一个稳定值. 这意味着在偶然事件中包含着必然的结论. 大数定律就是描述相当多次重复的实验的结果的定律. 根据这个定律知道, 样本越多, 其平均值就会越接近期望值.

![大数定律](/assets/images/law-of-large-numbers/Largenumbers.png)

大数定律有两种常见的表现形式：弱大数定律和强大数定律. 在古典意义下, 两种大数定律都是表明样本的均值收敛于随机变量的期望值. 强与弱的差别在于收敛方式的不同, 强大数定律要求几乎处处收敛, 然而弱大数定律仅要求依概率收敛.

在现代意义下, 设 $\{X_n:n\in\mathbb N\}$ 是随机变量序列, 令 $S_n:=\sum_{k=1}^{n}X_k,n\in \mathbb N$. 若存在 $\{a_n\}\subset\mathbb R,\{b_n\}\subset\mathbb R_+$, 且 $b_n\rightarrow\infty$ 使

$$
    \frac{S_n-a_n}{b_n}\rightarrow 0, \text{依概率 $\mathbf P$ (或者 $a.e.$)},
$$

则称 $\{X_n\}$ 服从弱大数定律 (或者强大数定律).

## 弱大数定律

  根据条件的不同, 弱大数定律有几种不同的表现形式.
 
### Chebyshev 大数定理

  首先考虑古典意义下的弱大数定律. 假设 $\mathbf E S_n<\infty$, 如果 $\frac{S_n}{n}\xrightarrow 2 \frac{\mathbf E S_n}{n}$, 便可以得到 $\frac{S_n}{n}\xrightarrow{\mathbf P} \frac{\mathbf E S_n}{n}$. 由于
   
  $$\frac{S_n}{n}\xrightarrow2 \frac{\mathbf E S_n}{n}\Leftrightarrow\frac{\text{Var} (S_n)}{n^2}\rightarrow 0,$$

  为了简化 $\text{Var}(S_n)$ 的计算, 给出不相关随机变量的定义.

  **定义：**(不相关) 设$X,Y$ 为随机变量, $E\mid X\mid ^2<\infty,E\mid Y\mid ^2<\infty$ 且

  $$E(XY)=E(X)\cdot E(Y),$$

  则称 $X,Y$ 不相关. 若 $E(XY)=0$, 则称 $X,Y$ 正交.

  若 $\{X_n:n\in N\}$ 为两两不相关随机变量序列, 则

  $$
   \text{Var}(X_1+X_2+\cdots+X_n)=\text{Var}(X_1)+\text{Var}(X_2)+\cdots+\text{Var}(X_n).
  $$

  事实上, 令 $\mu_i=EX_i, S_n=\sum_{i=1}^{n}X_i.$ 有
   
  $$
   \begin{aligned}
    \text{Var}(S_n)&=E(S_n-ES_n)^2=E\left(\sum_{i=1}^{n}(X_i-\mu_i)\right)^2\\
   &=\sum_{i=1}^{n}E(X_i-\mu_i)^2+2\sum_{i=1}^{n}\sum_{j=1}^{i-1}E((X_i-\mu_i)(X_j-\mu_j)).
   \end{aligned}
  $$

  上式结果中的第一项为 $\text{Var}(X_1)+\text{Var}(X_2)+\cdots+\text{Var}(X_n)$, 所以只需要说明第二项为 0. 由于 $X_i$ 与 $X_j$ 是不相关的, 故
   
  $$
   \begin{aligned}
   E((X_i-\mu_i)(X_j-\mu_j))&=EX_iX_j-\mu_iEX_j-\mu_jEX_i+\mu_i\mu_j\\
   &=EX_iX_j-\mu_i\mu_j=0.
   \end{aligned}
  $$

  也就是说, 对于不相关的随机序列, 随机变量和的方差等于每个随机变量方差的和.

  **定理：**(Chebyshev 大数定理) 若 $\{X_n:n\in N\}$ 两两不相关, $\mathbf E S_n$ 存在且 $\mathop{\sup}\limits_n \text{Var} (X_n)<\infty$, 则
  
  $$
    \frac{S_n-ES_n}{n}\xrightarrow{2}0,
  $$
  
  因而
  
  $$
    \frac{S_n-ES_n}{n}\xrightarrow{\textbf P}0.
  $$

  **证明：** 因为 $\mathbf E(S_n)<\infty$, 令 $\mu:=\frac{\mathbf E S_n}{n}$. 所以 $\exists C\in\mathbb R$,
  
  $$
    E(S_n/n-\mu)^2=\text{Var}(S_n/n)=\frac{1}{n^2}(\text{Var}(X_1)+\cdots+\text{Var}(X_n))\leq\frac{Cn}{n^2}\xrightarrow 2 0,
  $$
  
  从而依概率收敛也正确.

  上述定理中极为重要的一种特殊情况是： $X_1,X_2,\cdots$ 为独立同分布序列. 简单地说, 上面定理告诉我们, 当 $EX_i^2<\infty$ 时, $S_n/n$ 依概率收敛到 $X_i$ 的均值.

### Khinchin 大数定理
  Chebyshev 大数定理的核心结论仅仅与 $X_n$ 有关, 但是条件却涉及到了二阶矩, 于是我们希望这个假设可以去掉. 事实上, 二阶矩有限的条件不是必需的, 这样就有了 Khinchin 大数定理.

  **定理：** (Khinchin 大数定理) 设 $\{X_n:n\in N\}$ 为独立同分布序列且 $\mathbf E\mid X_1\mid <\infty$, 令 $S_n:=\sum_{k=1}^{n}X_k$, 则

  $$
    \frac{S_n}{n}\xrightarrow{\mathbf P} \mathbf E X_1.
  $$

  在 Khinchin 大数定理中, 将二阶矩有限的条件减弱到了一阶矩有限. 令人惊奇的是, 我们甚至可以将一阶矩有限的条件去掉, 得到一个更强的结论. 我们将先证明下面这个定理, 然后则不难给出 Khinchin 大数定理的证明.

  **定理：**(精确的弱大数定律) 设 $X_n:n\in N$ 为独立同分布序列, $S_n:=\sum_{k=1}^{n}X_k$, 则 $\{X_n:n\in \mathbf N\}$ 满足弱大数定律（即存在 $\{a_n\}\subset\mathbf R$ 使 $\frac{S_n}{n}-a_n\rightarrow 0$）的充要条件是
  
  $$
    \lim_{x\rightarrow\infty}x\mathbf P(|X_1|>x)=0.
  $$

  在条件成立时, $a_n:=\mathbf E(X_1I_{\{X_1\leq n\}}). $

  需要注意的是, 上述定理并不要求期望 $\mathbf E(X_1)$ 存在.

  证明上述定理需要用到尾等价序列的概念以及“截尾”、对称化的手法.

## 强大数定律

  **定理：**(强大数定律) 设 $X_1,X_2,\cdots$ 是独立同分布随机变量序列, 且 $E\mid X_i\mid <\infty$. 令 $EX_1=\mu, S_n=X_1+X_2+\cdots X_n$. 那么 
    
  $$\frac{S_n}{n}\xrightarrow{a.s.}\mu,\ \ n\rightarrow\infty.$$

  强大数定律的证明与弱大数定律类似, 同样要利用“截尾”的方法.
  
## 几个不同大数定律的区别与联系

前文我们讨论了几种常见的大数定律. 其中精确地弱大数定律和精确地强大数定律是最严格, 同样也是最精妙的结果. 它们成立的条件不仅仅是充分的, 也是必要条件. 

下表展示了几种不同的大数定律的区别与联系.

  |         | Chebyshev 大数定理 |  Khinchin 大数定理 | 精确的弱大数定理 | 精确的强大数定律 |
  | :----:  | :----: |:----:   | :----: | :----: |
  | 对于矩的要求 | 二阶矩存在 | 一阶矩存在 | - | 一阶矩存在 |
  |对序列的要求  | 仅要求不相关 | i.i.d. | i.i.d.| i.i.d.|
  | 其他条件     |   -       |     -    | $\mathop{\lim}\limits_{x\rightarrow\infty}x\mathbf P(\mid X_1\mid >x)=0$ |  -   |
  | 收敛方式    |  依概率 | 依概率 | 依概率 | 几乎必然 |


  从 Chebyshev 大数定理到 Khinchin 大数定理, 将二阶矩有限的条件减弱为了一阶矩有限, 当然代价是要求序列为独立同分布.

  Khinchin 大数定理与“精确的弱大数定理”的区别在于把一阶矩有限的条件换成了 $\lim\limits_{x\rightarrow\infty}x\mathbf P(\mid X_1\mid >x)=0$. 这两个条件的共同点是：要求 “$\mid X_1\mid $ 很大”的概率要足够的小, 下面这个例子可以说明, 确实有随机变量序列, 满足“精确的弱大数定律”, 但其一阶矩不存在.

  **例子：** 令 $X_1,X_2,\cdots$ 是独立同分布序列, 且 $\mathbf P(X_i=(-1)^kk)=\frac{C}{k^2\log k}, k\geq 2$, 其中 $C$ 是一个常数令概率和为 1.

  **证明：** 分析可知

  $$
     \lim\limits_{x\rightarrow\infty}x\mathbf P(|X_1|>x)=\lim\limits_{n\rightarrow\infty}n\sum_{k=n}^\infty\frac{C}{k^2\log k}=0.
  $$

  故 $\{X_k\}$ 满足“精确的弱大数定律”, 但是其一阶矩却不存在. 事实上, 广义积分
  
  $$
   \int_2^\infty\frac{dx}{x\log x}=\int_{\log 2}^{+\infty}\frac{dt}{t}
  $$

  发散, 故
  
  $$
     \mathbf E(|X_1|)=\sum_{k=2}^{\infty}\frac{C}{k\log k}=\infty.
  $$