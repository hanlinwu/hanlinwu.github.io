---
title: §1.3 布朗运动的不可微性
tags:
 - 随机过程
 - 布朗运动
 - 读书笔记
key : brownianmotion1-3
mathjax: true
---

布朗运动的轨道在任何区间上都是不单调的.

**定理1.22** 几乎必然地, 对于任意的 $$0<a<b<\infty$$, 布朗运动在区间 $$[a,b]$$ 上不单调.

**证明:** 首先固定一个区间 $$[a,b],a<b$$. 若布朗运动 $$B(t)$$ 在 $$[a,b]$$ 上是单调的, 则对于任意的

$$a=a_1\leq a_2\leq\cdots\leq a_{n+1}=b,$$

可以将区间 $$[a,b]$$ 分成 $$n$$ 个子区间 $$[a_i,a_{i+1}],1\leq i\leq n$$.  那么每个增量 $$B(a_i)-B(a_{i+1})$$ 都有相同的符号. 因为增量是独立的, 所以概率为 $$2\cdot 2^{-n}$$, 令 $$n\rightarrow\infty$$, 可知 $$B(t)$$ 在 $$[a,b]$$ 上单调的概率为 0.

下证, $$\mathbb P \{\forall a<b, B(t) 在 [a,b] 上不单调\}=1$$.

$$\begin{aligned}
1\geq & \mathbb P \{\forall a<b\in\mathbb Q, B(t) 在 [a,b] 上不单调\}\\
= & 1- \mathbb P\{\exists a<b\in\mathbb Q, B(t) 在 [a,b] 上单调\}\\
= & 1- \mathbb P\left\{\bigcup_{a<b\in\mathbb Q}\{B(t)在 [a,b]上单调\}\right\}\\
\geq & 1- \sum_{a<b\in\mathbb Q}\mathbb P\{B(t)在 [a,b]上单调\}\\
= & 1.
\end{aligned}$$

所以, 几乎必然地, 布朗运动在以有理数为端点的非退化区间(区间长度大于0)上不单调.  只需注意, 任意一个非退化的区间, 必然包含一个以有理数为端点的非退化的区间, 故结论成立. $$\square$$

> 此处可以画图说明: "几乎必然"与"任意区间"两句话交换位置, 意义不同.

接下来, 我们先证明一个大数定律的加强版本. 大数定律告诉我们, 布朗运动趋于无穷的速度比线性要慢. 下面的命题表明, 布朗运动 $$B(t)$$ 趋于无穷的速度比 $$\sqrt{t}$$ 要快.

**命题1.23** 几乎必然地,

$$\limsup_{n\rightarrow\infty}\frac{B(n)}{\sqrt{n}}=+\infty, 且 \liminf_{n\rightarrow\infty}\frac{B(n)}{\sqrt{n}}=-\infty.$$

为了证明这个命题, 先给出对于可交换事件的 Hewitt-Savage 0-1 律.

**定义1.24** 令 $$X_1,X_2,\cdots$$ 是 $$(\Omega,\mathscr F,\mathbb P)$$ 上的一列随机变量, 集合 $$A$$ 满足

$$\{(X_1,X_2,\cdots)\in A\}\in \mathscr F.$$

称事件 $$\{(X_1,X_2,\cdots)\in A\}$$ 是**可交换的**, 如果对于任意的有限排列 $$\sigma:\mathbb N\rightarrow\mathbb N$$, 都满足

$$\{(X_1,X_2,\cdots)\in A\}\subset \{(X_{\sigma_1},X_{\sigma_2},\cdots)\in A\}.$$

其中 $$\sigma$$ 表示 $$\mathbb N\rightarrow \mathbb N$$ 的双射, 且对于充分大的
$$n, \sigma_n=n$$.

**引理1.25** (Hewitt-Savage 0-1 律) 若 $$X_1,X_2,\cdots$$ 独立同分布, 且 $$E:=\{(X_1,X_2,\cdots)\in A\}$$ 为可交换事件, 那么 $$\mathbb P(E)=0$$ 或 $$1$$.

>**引理1.25的证明:**  请参考 [Billingsley P. Probability and measure[M]. John Wiley & Sons, 2008] 第496页, 定理36.5.

>**例子:** $$\{X_n\}_{n\in\mathbb N}$$ 是一列取值为 $$[0,\infty)$$ 的独立同分布的随机变量序列.
>
>$$E:=\left\{\sum_{n=1}^\infty X_n<\infty\right\}$$
>
>就是一个可交换的事件, 由Hewitt-Savage 0-1 律可知 $$\mathbb P(E)=1$$ 或 $$0$$. 如果我们再假设 $$E(X_n)>0$$, 则 $$\mathbb P(E)=0$$.

**命题1.23的证明:** 对 $$\forall c>0$$, 根据Fatou引理,

$$\mathbb P\{B(n)>c\sqrt{n}\ \ \text{i.o.}\}\geq \limsup_{n\rightarrow\infty}\mathbb P\{B(n)>c\sqrt{n}\}.$$

根据Scaling不变性, 上式右侧等于 $$\mathbb P\{B(1)>c\}>0$$.  令 $$X_n=B(n)-B(n-1)$$, 注意到

$$\{B(n)>c\sqrt{n}\ \ \text{i.o.}\} = \{\sum_{j=1}^nX_j>c\sqrt{n}\ \ \text{i.o.}\}$$

是一个可交换事件. 因此, 由Heiwitt-Savage 0-1律, $$\mathbb P\{B(n)>c\sqrt{n}\ \ \text{i.o.}\}=1$$. 由 $$c$$ 的任意性知命题的第一部分成立.

注意到 $$-B(n)$$ 仍为布朗运动, 且 $$\limsup_{n\rightarrow \infty}\frac{-B(n)}{\sqrt{n}}=+\infty$$, 故 $$\liminf_{n\rightarrow \infty}\frac{B(n)}{\sqrt{n}}=-\infty$$. $$\square$$

**注记1.26** 我们自然地会问, 能否找到一个合适函数 $$\varphi : [0,\infty)\rightarrow [0,\infty)$$, 使得 $$B(t)/\varphi(t)$$ 的上极限大于 $$0$$ 且小于无穷. 在第五章的第一节中, 我们将利用重对数律给出这个答案.

对于一个函数 $$f$$, 定义上(下)右导数如下:

$$D^*f(t)=\limsup_{h\downarrow 0}\frac{f(t+h)-f(t)}{h},$$

和

$$D_*f(t)=\liminf_{h\downarrow 0}\frac{f(t+h)-f(t)}{h}.$$

下面我们证明, 对于任意给定的时间 $$t$$, 几乎必然地, 布朗运动在 $$t$$ 处不可微.

**定理1.27** 给定 $$t>0$$. 几乎必然地, 布朗运动在 $$t$$ 处不可微.  此外, $$D^*B(t)=+\infty$$ 且 $$D_*B(t)=-\infty$$.

**证明:**  给定一个标准布朗运动 $$B$$, 我们可以用时间反演的技巧, 构造一个新的布朗运动 $$X$$. 这样的好处是, 对于 $$B$$ 趋于 0 时刻的行为, 可以转化为 $$X$$ 时间趋于无穷的行为.

$$D^*X(0)\geq \limsup_{n\rightarrow\infty}\frac{X(\frac{1}{n})-X(0)}{\frac{1}{n}}\geq \limsup_{n\rightarrow\infty}\sqrt{n}X(\frac{1}{n})=\limsup_{n\rightarrow\infty}\frac{B(n)}{\sqrt{n}}.$$

根据命题1.23, 上式右边是无穷. 类似地, 可以证明 $$D_*X(0)=-\infty$$. 这说明, $$X$$ 在 $$0$$ 处是不可微的.

给定任意的 $$t>0$$, $$\{B(t):t\geq 0\}$$ 是布朗运动. 那么 $$X(s)=B(t+s)-B(t)$$ 是一个标准布朗运动, 且 $$X$$ 在 $$0$$ 处不可微当且仅当 $$B$$ 在 $$t$$ 处不可微. $$\square$$

**注意:**  前面的证明只能说明, 对于给定的时间 $$t$$, 布朗运动是几乎必然不可微的. 然而, 这不意味着, 几乎必然地, 对于任意的时间 $$t$$, 布朗运动是不可微的. 这里"几乎必然"与"任意的t"这两句话的顺序是非常重要的. 若交换之, 则含义完全不同. 定理1.27证明了, 对于给定的时间 $$t_0$$, 存在一个概率为 $$0$$ 的例外集 $$N_{t_0}\subset\Omega$$, 使得对于 $$\forall \omega\in N_{t_0}^c$$, $$B(t,\omega)$$ 在 $$t_0$$ 处不可微. 此处的例外集 $$N_{t_0}$$ 是依赖于 $$t_0$$ 的. 如果将所有的例外集并起来, 则有可能概率大于 $$0$$, 因为这样的例外集由不可数多个.  

为了说明这一点, 考虑下面这个例子: 由定理1.27的证明可知, 对于任意小的 $$s$$, 布朗运动 $$X$$ 在 $$[0,s]$$ 上会穿过0. 定义一个水平集 $$Z(t):=\{s>0: X(s)=X(t)\}$$.  对于任意的 $$t$$, 几乎必然地, $$t$$ 是 $$Z(t)$$ 的一个右侧的聚点. 但是不能说: 几乎必然, $$[0,1]$$ 中的每个点都是右侧的聚点. 比如, 令 $$t_0 := \sup\{0\leq t< 1:X(t)=0\}$$. 根据定义, $$t_0$$ 不可能是右侧的聚点. (注意: $$t_0$$ 是依赖于概率空间的 $$\omega$$ 的.) 这个例子告诉我们, 布朗运动是可能存在一些例外的时间, 使得布朗运动有特殊的表现, 然而, 这样的例外时间是随机的而且很稀少, 以至于, 固定任意一个时间来观察, 几乎必然不是这种特殊的时间.

**注记1.28** 形象(但不严格)地说, 布朗运动在一个固定的时间 $$t$$ 的行为, 可以反映布朗运动在大多数时间的行为. 假设 $$\mathscr X$$ 是轨道空间中的一个可测集, 满足 $$\{B(t):t\geq 0\}\in \mathscr X,\text{a.s.}$$ . 根据布朗运动的平稳增量性, 对于任意固定的时间 $$t\geq 0$$, 有 $$\mathbb P\{\{B(t+s)-B(t):s\geq 0\}\in \mathscr X\}=1$$. 此外, 几乎必然地, 时间的例外集 $$\{t:\{B(t+s)-B(t):s\geq 0\}\notin\mathscr X\}$$ 的Lebesgue测度为 $$0$$. 事实上, 利用注记1.5中的可测性及Fubini定理,

$$\mathbb E\int_0^\infty 1\{t:\{B(t+s)-B(s):s\geq 0\}\notin\mathscr X\}dt=\int_0^\infty\mathbb P\{\{B(s):s\geq 0\}\notin\mathscr X\}dt=0.$$

那么, 根据定理1.27的结论可知, 几乎必然地, 对于Lebesgue测度下的几乎处处的时间 $$t$$, 布朗运动是不可微的.

**注记1.29** 练习1.11告诉我们, 几乎必然地, 存在时间 $$t_*,t^*\in [0,1]$$, 使得 $$D^*B(t^*)\leq 0,D_*B(t_*)\geq 0$$. 因此定理1.27中, 对于固定时间 $$t$$ 的几乎必然, 不是对于所有的时间一致成立的.  

**定理1.30** 几乎必然地, 布朗运动是处处不可微的. 更进一步, 几乎必然地, 对于任意的 $$t$$, 有

$$D^* B(t)=+\infty\ 或\ D_*B(t)=-\infty.$$

**证明:** 根据Scaling不变性, 只需说明 $$t\in [0,1]$$ 上述定理成立. 事实上, 若 $$\exists t_0 > 1$$, 使得 $$-\infty<D_*B(t_0)\leq D^* B(t_0)<\infty$$. 取定 $$a>t_0$$, 令 $$\widetilde{B}(t):=\frac{1}{\sqrt{a}}B(at)$$. 则存在 $$\widetilde{t_0}:=\frac{t_0}{a}<1$$. 使得 $$-\infty<D_*\widetilde B(\widetilde{t_0})\leq D^* \widetilde B(\widetilde{t_0})<\infty$$.

假设存在 $$t_0\in [0,1]$$, 使得 $$-\infty<D_*B(t_0)\leq D^* B(t_0)<\infty$$. 那么

$$\limsup_{h\downarrow 0}\frac{|B(t_0+h)-B(t_0)|}{h}<\infty,$$

因为 $$B(t)$$ 在 $$[0,2]$$ 上是有界的 (因为连续), 所以存在 $$M<\infty$$, 使得

$$\sup_{h\in [0,1]}\frac{|B(t_0+h)-B(t_0)|}{h}\leq M.$$

> 因为上极限存在, 不妨设上极限为 $$M_0$$, 故 $$\forall \varepsilon>0$$, 存在 $$\delta>0$$, 当 $$0\leq h<\delta$$ 时, 有
>
> $$\sup_{h\in [0,\delta]}\frac{|B(t_0+h)-B(t_0)|}{h}\leq M_0+\varepsilon.$$
>
> 又因 $$B(t)$$ 连续, 故在 $$[0,2]$$ 上可达到上确界, 不妨记为 $$M_1$$. 那么
>
> $$\sup_{h\in [\delta,1]}\frac{|B(t_0+h)-B(t_0)|}{h} <\frac{2 M_1}{\delta}=:M_2.$$
>
> 于是, 令 $$M:=\max\{M_0+\varepsilon,M_2\}$$.  上式成立.

下证, 对于任何给定的 $$M$$, 上述 $$t_0$$ 几乎必然不存在.  如果存在 $$t_0$$ 包含在二进制的区间  $$[(k-1)/2^n,k/2^n]$$ 中, 其中 $$n>2$$, 那么对于所有 $$1\leq j\leq 2^n-k$$, 根据三角不等式,

$$\begin{aligned}
&|B((k+j)/2^n)-B((k+j-1)/2^n)|\\
\leq &  |B((k+j)/2^n)-B(t_0)| + |B(t_0)-B((k+j-1)/2^n)|\\
\leq &  M(2j+1)/2^n.
\end{aligned}$$

定义事件

$$\Omega_{n,k}:=\left\{
|B((k+j)/2^n)-B((k+j-1)/2^n)|\leq M(2j+1)/2^n,  j=1,2,3
\right\}.$$

那么, 根据独立增量性和Scaling不变性, 对于 $$1\leq k\leq 2^n-3$$,

$$\begin{aligned}
\mathbb P(\Omega_{n,k})  
& = \prod_{j=1}^3 \mathbb P
\left\{
|B((k+j)/2^n)-B((k+j-1)/2^n)|\leq M(2j+1)/2^n
\right\}\\
& \leq \prod_{j=1}^3 \mathbb P \{B(1/2^n)\leq 7M/2^n\}\\
& = \mathbb P\{|B(1)|\leq 7M/\sqrt{2^n}\}^3 \\
& \leq (7M2^{-n/2})^3.
\end{aligned}$$

上面最后一个不等号是因为正态分布的密度函数最大值不超过 $$1/2$$. 因此,

$$\mathbb P\left(\bigcup_{k=1}^{2^n-3}\Omega_{n,k}\right)\leq 2^n (7M2^{-n/2})^3 = (7M)^32^{-n/2},$$

上式最后一项对所有的 $$n$$ 求和收敛. 因此, 根据Borel-Cantelli引理,

$$\mathbb P \left\{
\exists t_0\in [0,1], \text{使得}  -\infty<D_*(t_0)\leq D^*(t_0)<\infty
\right\}\\
\leq \mathbb P\left(\bigcup_{k=1}^{2^n-3}\Omega_{n,k} 对于n, \text{i.o.}
\right)=0.$$

证毕. $$\square$$

**定义1.33** 一个右连续的函数 $$f:[0,t]\rightarrow\mathbb R$$ 是**有界变差**的, 如果

$$V_f^{(1)}:=\sup_{\substack{
k\in\mathbb N ,\\
0=t_0\leq t_1\leq \cdots \leq t_{k-1}\leq t_k=t}
} \sum_{j=1}^k|f(t_j)-f(t_{j-1})|<\infty.$$

否则, 称 $$f$$ 为**无界变差**函数.

**注记1.34** 易证, $$f$$ 是有界变差函数当且仅当 $$f$$ 可以写成两个增函数的差.

**定理1.35** 设一列分隔点

$$0=t_0^{(n)}\leq t_1^{(n)}\leq\cdots \leq t_{k(n)-1}^{(n)}\leq t_{k(n)}^{(n)}=t.$$

是嵌套的, 即随着 $$n$$ 增大, 上面的点列会保留原有的点, 增加若干个点.  间隙会趋于$$0$$, 即

$$\triangle(n):=\sup_{1\leq j\leq k(n)}\{t_j^{(n)}-t_{j-1}^{(n)}\}\rightarrow 0, n\rightarrow \infty.$$

于是, 几乎必然地,

$$\lim_{n\rightarrow\infty}\sum_{j=1}^{k(n)}(B(t_j^{(n)})-B(t_{j-1}^{(n)}))^2=t.$$

从而, 布朗运动是无界变差的.

**注记1.36** 对于像上面这样的一列分隔点, 称

$$\lim_{n\rightarrow\infty}\sum_{j=1}^{k(n)}(B(t_j^{(n)})-B(t_{j-1}^{(n)}))^2$$

为布朗运动的**二次变差**. 我们将在第七章中看到: "布朗运动具有有限的二次变差"是非常重要的一个结论.

**注意:** 定理1.35中要求"分隔点是嵌套的"这个条件是必不可少的. 我们可以找到一个反例, 见练习1.15. 可以找到一列间隙趋于零的分隔点

$$0=t_0^{(n)}\leq t_1^{(n)}\leq\cdots \leq t_{k(n)-1}^{(n)}\leq t_{k(n)}^{(n)}=t.$$

使得几乎必然地

$$\limsup_{n\rightarrow\infty}\sum_{j=1}^{k(n)}(B(t_j^{(n)})-B(t_{j-1}^{(n)}))^2=\infty.$$

**引理1.37** 设 $$X,Z\in \text{L}^2$$ 是独立的, 对称的随机变量, 那么

$$\mathbb E[(X+Z)^2|X^2+Z^2]=X^2+Z^2.$$

**证明:** 根据 $$Z$$ 的对称性,

$$\mathbb E[(X+Z)^2|X^2+Z^2]=\mathbb E[(X-Z)^2|X^2+Z^2]$$

上式两边都是有限的, 做差得到

$$\mathbb E[XZ|X^2+Z^2]=0.$$

从而得到结论.

**定理1.35的证明:** 根据布朗运动的局部 $$\alpha$$-Holder 连续性, 存在 $$C>0$$, 对于任意的 $$\alpha\in(0,1/2)$$, 存在 $$n$$ 使得: 只要 $$a,b\in [0,t], \mid a-b\mid \leq \triangle(n)$$, 就有 $$\mid B(a)-B(b)\mid\leq C\mid a-b\mid^{\alpha}$$.

> 由推论1.20的证明知: 存在 $$C>0$$, 几乎必然地, 对于每个正整数 $$k$$, 存在 $$h(k)>0$$, 使得对于任意的 $$t\in [k,k+1)$$ 和 $$0<h<(k+1-t)\wedge h(k)$$,
>
>$$|B(t+h)-B(t)|\leq C h^\alpha.$$
>
>注意到 $$[0,t]$$ 上只有有限个以整数为端点, 长度为1的区间. 故上述结论成立.

因此

$$\sum_{j=1}^{k(n)}|B(t_j^{(n)})-B(t_{j-1}^{(n)})|\geq C^{-1} \triangle(n)^{-\alpha}\sum_{j=1}^{k(n)}(B(t_j^{(n)})-B(t_{j-1}^{(n)}))^2.$$

接下来, 只需证明

$$X_n:=\sum_{j=1}^{k(n)}(B(t_j^{(n)})-B(t_{j-1}^{(n)}))^2$$

几乎必然收敛到一个大于 $$0$$ 的随机变量, 即得布朗运动是几乎必然无界变差的. 考虑分隔点列的定义, 我们可以假设每一次只插入 $$1$$ 个新的点.

下面说明 $$\{X_n:n\in\mathbb N\}$$ 是收敛的. 令 $$\mathscr G_n$$ 表示由随即变量 $$X_n,X_{n+1},\cdots$$ 生成的 $$\sigma$$-代数. 那么

$$\mathscr G_\infty:=\bigcap_{k=1}^\infty \mathscr G_k\subset\cdots\subset \mathscr G_{n+1}\subset\mathscr G_n\subset \cdots\subset \mathscr G_1.$$

下面证明 $$\{X_n:n\in\mathbb N\}$$ 是**逆鞅**. 即: 几乎必然,

$$X_n=\mathbb E[X_{n-1}|\mathscr G_n],\ \ \forall n\geq 2.$$

事实上, 设 $$s\in (t_1,t_2)$$ 是新插入的分隔点. 记 $$\mathscr F$$ 是由 $$(B(s)-B(t_1))^2+(B(t_2)-B(s))^2$$ 生成的 $$\sigma$$-代数, 利用 $$B(s)-B(t_1)$$ 与 $$B(t_2)-B(s)$$ 的对称性与独立性, 有

$$\mathbb E[(B(t_2)-B(t_1))^2|\mathscr F]=(B(s)-B(t_1))^2+(B(t_2)-B(s))^2,$$

因此,

$$\mathbb E[(B(t_2)-B(t_1))^2-(B(s)-B(t_1))^2-(B(t_2)-B(s))^2|\mathscr F]=0.$$

于是,  $$\{X_n:n\in\mathbb N\}$$ 是逆鞅.

根据定理12.26(Levy downward theorem), 可知

$$\lim_{n\uparrow\infty} X_n=\mathbb E[X_1|\mathscr G_\infty],\ \ \text{a.s.}.$$

这个极限的期望为 $$\mathbb E[X_1]=t$$, 计算这个极限随机变量的方差, 利用Fatou引理,

$$\mathbb E[(\lim_{n\uparrow\infty}X_n-t)^2]\leq\liminf_{n\uparrow\infty}\mathbb E[(X_n-t)^2].$$

对于任何的 $$t>s\geq 0$$, 有

 $$\begin{aligned}\mathbb E[(B(t)-B(s))^2-(t-s)]^2&=\mathbb E[(B(t)-B(s))^4-2(t-s)(B(t)-B(s))^2+(t-s)^2]\\& = 3(t-s)^2-2(t-s)^2+(t-s)^2=2(t-s)^2.\end{aligned}$$

 另外, 设 $$t_2>s_2\geq t_1>s_1\geq 0$$, 由独立增量性,

 $$\mathbb E\left\{[(B(t_1)-B(s_1))^2-(t_1-s_1)][(B(t_2)-B(s_2))^2-(t_2-s_2)]\right\}=0.$$

故,

$$\begin{aligned}
 \mathbb E[(X_n-t)^2]&=\mathbb E \left[\sum_{j=1}^{k(n)}\left[(B(t_j^{(n)})-B(t_{j-1}^{(n)}))^2-(t_j^{(n)}-t_{j-1}^{(n)})\right]\right]^2\\
 & =\sum_{j=1}^{k(n)}\mathbb E\left[(B(t_j^{(n)})-B(t_{j-1}^{(n)}))^2-(t_j^{(n)}-t_{j-1}^{(n)})\right]^2\\
 &=2\sum_{j=1}^{k(n)}(t_j^{(n)}-t_{j-1}^{(n)})^2\\
 &\leq 2t\triangle(n)\rightarrow 0.
 \end{aligned}$$

因此, $$\lim_{n\uparrow\infty}X_n=t \ \ \text{a.s.}$$. $$\square$$

> **另一种证法请参考[李增沪. 随机过程引论[M]. 2014] 第92页.** 但得到的结论比这个定理弱.


<!--more-->
