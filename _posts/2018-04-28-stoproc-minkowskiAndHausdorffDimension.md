---
title: "§4.1 Minkowski 与 Hausdorff维数"
tags:
 - 随机过程
 - 布朗运动
 - 读书笔记
key : minkowski-and-hausdorff-dimention
mathjax: true
---
## 4.1.1 Minkowski 维数
我们应该如何描述一个几何对象的维数呢? 良好的维数的定义应是**本质的**, 也就是说不能依赖于这个几何对象所在的具体的空间中, 如 $$R^n$$. 关于维数的良定义, 应在任何度量空间中都可以使用.

假设 $$(E,\rho)$$ 为**有界度量空间**. 其中, “有界”是指 $$E$$ 的直径 $$\mid E\mid=\sup\{\rho(x,y):x,y\in E\}$$ 是有限的. 一个典型的例子就是 $$R^d$$ 的一个有界子集. Minkowski 维数是基于覆盖定义的.

**定义** (覆盖) 一列有限或可数个集合 $$E_1,E_2,E_3,\cdots$$ 称为 $$E$$ 的覆盖, 如果

$$E\subset\cup_{i=1}^{\infty}E_i.$$

**定义** 对于任意的 $$\varepsilon>0$$, 定义

$$M(E,\varepsilon)=\min\{k\geq 1: 存在 E 的有限覆盖 E_1,E_2,\cdots,E_k 且满足 \mid E_i\mid\leq \varepsilon, \forall i=1,2,\cdots,k\}.$$

> $$M(E,\varepsilon)$$ 表示用直径不超过 $$\varepsilon$$ 的集合覆盖 $$E$$, 所需最少的数量.

直观地, 如果 $$E$$ 是 $$s$$ 维的, 那么 $$M(E,\varepsilon)$$ 与 $$\varepsilon^{-s}$$ 同阶. 我们可以通过一些简单的例子来验证: 线段, 平面上的正方形等等. 由此就可以得到Minkowski维数的定义.

**定义4.1** 对于有界的度量空间 $$E$$, 定义**下 Minkowski 维数**为

$$\underline{\dim}_{M}E:=\liminf_{\varepsilon\downarrow 0}\frac{\log M(E,\varepsilon)}{\log(1/\varepsilon)},$$

**上 Minkowski 维数**为

$$\overline{\dim}_{M}E:=\limsup_{\varepsilon\downarrow 0}\frac{\log M(E,\varepsilon)}{\log(1/\varepsilon)}.$$

总有 $$\underline{\dim}_M E\leq \overline{\dim}_M E$$ 成立. 如果上式等号成立, 则定义

$$\dim_M E:=\underline{\dim}_ME=\overline{\dim}_M E.$$

> Minkowski维数的定义中, 用来覆盖的小集合的形状是任意的. 然而实际上, 我们可以只用规则的图形(如: 立方体)来覆盖. 通过这种特殊的覆盖得到的Minkowski维数的定义与上面相同.

**注记4.2**  如果 $$E$$ 是单位立方体的一个子集, 即 $$E\subset [0,1]^d\subset \mathbb R^d$$, 令

$$\tilde{M}_n(E)=\#\{Q\in \mathfrak D_n:Q\cap E\neq\varnothing\},$$

其中, $$\mathfrak D_n$$ 表示所有边长为 $$2^{-n}$$ 的半开子立方体构成的集合, 即

$$\mathfrak D_n=\left\{D:D=\prod_{i=1}^d[\frac{k_i}{2^k},\frac{k_i+1}{2^k})\subset\mathbb R^d,k_i\in\{0,1,\cdots,2^k-1\}\right\}.$$

$$\tilde{M}_n(E)$$ 表示 $E$ 与上述 $$\mathfrak D_n$$ 中边长为 $2^{-n}$ 的小立方体相交的数量. 那么存在一个不依赖于 $E$ 常数 $C(d)>0$, 满足

$$\tilde M_n(E)\geq M(E,\sqrt{d}2^{-n})\geq C(d)\tilde M_n(E).$$

> 事实上, 注意到边长为 $$2^{-n}$$ 的立方体的直径为 $$\sqrt{d}2^{-n}$$, 于是第一个不等号显然成立. 一个直径为 $$\sqrt{d}2^{-n}$$ 的球, 最多与 $$2^d$$ 个边长为 $$2^{-n}$$ 小立方体相交, 故 $$M(E,\sqrt{d}2^{-n})\geq 2^{-d}\tilde M_n(E)$$, 于是第二个不等号成立. $$\square$$

因此

$$\overline{\dim}_{M}E=\limsup\limits_{n\uparrow\infty}\frac{\log \tilde M_n(E)}{n\log 2}\ 且\    \underline{\dim}_{M}E=\liminf\limits_{n\uparrow\infty}\frac{\log \tilde M_n(E)}{n\log 2}.$$

> 事实上, 对于 $$\forall \varepsilon > 0$$, 存在 $$n$$ 使得 $$\frac{\sqrt d}{2^{n+1}}\leq \varepsilon \leq \frac{\sqrt d}{2^n}$$. 根据 $$M(E,\varepsilon)$$ 的定义, 易知 $$M(E,\frac{\sqrt d}{2^n})\leq M(E,\varepsilon)\leq M(E,\frac{\sqrt d}{2^{n+1}})$$. 于是
>
> $$\frac{\log M(E,\varepsilon)}{\log(1/\varepsilon)}
\leq \frac{\log M(E,\sqrt d 2^{-n-1})}{\log(2^{n}/\sqrt d)}
\leq \frac{\log \tilde M_{n+1}(E)}{(n+1)\log 2+c_1},$$
>
> 对上式两端取上极限, 得 $$\overline\dim_M(E)\leq\limsup\limits_{n\rightarrow\infty}\frac{\log \tilde M_n(E)}{n\log 2}$$. 另一方面,
>
> $$\frac{\log M(E,\varepsilon)}{\log(1/\varepsilon)}
\geq \frac{\log M(E,\sqrt d 2^{-n})}{\log(2^{n+1}/\sqrt d)}
\geq \frac{\log (C(d) \tilde M_n(E))}{n\log 2+c_2},$$
>
>对上式两端取上极限, 得 $$\overline\dim_M(E)\geq\limsup\limits_{n\rightarrow\infty}\frac{\log \tilde M_n(E)}{n\log 2}$$.
>
> 同理可证, 对于下Minkowski维数也成立. $$\square$$

**例4.3** 在练习4.1中, 我们计算一个分形的Minkowski维数----Cantor集,

$$C=\left\{\sum_{i=1}^{\infty}\frac{x_i}{3^i}:x_i\in\{0,2\}\right\}\subset [0,1].$$

> 令 $$\alpha = \frac{\log 2}{\log 3}$$. 对于 $$\forall \varepsilon > 0$$, 可以找到 $$C$$ 的一个区间长度不超过 $$\varepsilon$$ 的覆盖. 若 $$\varepsilon\in (0,1)$$ 已经给定, 存在 $$n$$ 满足 $$1/3^n<\varepsilon\leq 1/3^{n-1}$$. 集合
>
> $$\left[\sum\limits_{i=1}^n\frac{x_i}{3^i},\sum\limits_{i=1}^n\frac{x_i}{3^i}+\varepsilon\right], (x_1,x_2,\cdots,x_n)\in \{0,2\}^n.$$
>
> 显然能够覆盖 $$C$$, 因此 $$M(C,\varepsilon)\leq 2^n$$, 那么
>
>$$\overline\dim_M C=\limsup_{\varepsilon\downarrow 0}\frac{\log M(C,\varepsilon)}{\log(1/\varepsilon)}\leq\limsup_{n\uparrow\infty} \frac{n\log 2}{(n-1)\log 3}=\frac{\log 2}{\log 3}.$$
>
> 于是, $$\overline\dim_M C\leq \alpha$$.
>
> 另一方面, 假设有一个覆盖 $$(x_k-\varepsilon,x_k+\varepsilon),x_k\in C$$. 令 $$n$$ 满足 $$1/3^{n+1}\leq 2\varepsilon<1/3^n$$. 令 $$x_k=\sum_{i=1}^\infty \frac{x_{i,k}}{3^{i}}, x_{i,k}\in \{0,2\},\forall i\in\mathbb N$$. 那么
>
> $$(x_k-\varepsilon,x_k+\varepsilon)\cap C\subset\left\{\sum\limits_{i=1}^\infty\frac{y_i}{3^i}:y_1=x_{1,k},\cdots,y_n=x_{n,k}\right\},$$
>
> 我们至少需要 $$2^n$$个上面这种形式的集合来覆盖 $$C$$. 因此, $$M(C,\varepsilon)\geq 2^n$$, 那么
>
>$$\underline\dim_M C=\liminf_{\varepsilon\downarrow 0}\frac{\log M(C,\varepsilon)}{\log(1/\varepsilon)}\geq \liminf_{n\uparrow\infty}\frac{\log 2^n}{\log(\frac{1}{2\cdot 3^{n+1}})}=\frac{\log 2}{\log 3}.$$
>
>$$M(C,\varepsilon)\geq 2^n=3^{\alpha n}=(1/3)^\alpha(3^{n+1})^\alpha\geq(1/3)^\alpha(1/\varepsilon)^\alpha.$$
>
> 这表明, $$\underline\dim_M C\geq \alpha$$. $$\square$$

**注记4.4** 对于Minkowski维数来说, 存在一个缺点: 注意到单点集 $$S=\{x\}$$ 的Minkowski维数为 0, 但是我们在练习4.2中看到

$$E:=\left\{\frac{1}{n}:n\in\mathbb N\right\}\cup \{0\}$$

有正的Minkowski维数.

> 对于任意的 $$\varepsilon\in (0,1)$$, 存在 $$n$$ 使得 $$\frac{1}{(n+1)^2}\leq\varepsilon <\frac{1}{n^2}$$. 那么 $$\{1/k:k>n\}\cup \{0\}$$ 可以被 $$n+1$$ 个长度不超过 $$\varepsilon$$ 的小区间覆盖住, 剩余的 $$n$$ 个点显然可以被 $$n$$ 个这样的小区间覆盖住. 因此
>
> $$M(E,\varepsilon)\leq 2n+1\leq \frac{2n+1}{n}(1/\varepsilon)^{1/2}.$$
>
> 于是 $$\overline\dim_M(E)\leq 1/2$$. 另一方面,  对于任意的 $$k<n$$, 相邻两个点的距离
>
> $$\frac{1}{k}-\frac{1}{k+1}=\frac{1}{k(k+1)}\geq\frac{1}{(k+1)^2}\geq\frac{1}{n^2}>\varepsilon,$$
>
> 我们至少需要 $$n-1$$ 个长度为 $$\varepsilon$$ 的集合去覆盖 $$E$$, 于是
>
> $$M(E,\varepsilon)\geq n-1\geq\frac{n-1}{n+1}(1/\varepsilon)^{1/2},$$
>
> 因此 $$\underline\dim_M(E)\geq 1/2$$. $$\square$$

因此Minkowski维数不具有**可数稳定性**, 即:

$$\dim \cup_{k=1}^{\infty}E_k=\sup\{\dim E_k:k\geq 1\}.$$

我们期望维数的定义能够满足可数稳定性. 为解决这个问题, 有下面两种方式:

1. 在维数的定义中, 将一个覆盖中, 不同集合的大小考虑进来.
2. 第二个办法是强制满足可数稳定性. 定义一个集合的维数时, 将其拆分成可数个有界的小集合, 将这些小集合的维数最大值定义为原集合的维数. 然后对于所有的这样的划分得到的维数取下确界, 通过这样的方式得到的维数称为**Packing 维数**.

下面我们将按照第一种思路进行讨论.

## 4.1.2 Hausdorff 维数

Hausdorff 维数和 Hausdorff 测度是由 Felix Hausdorff 在1919年提出的. 像 Minkowski 维数一样, Hausdorff 维数的定义也是基于覆盖的. 对于Minkowski维数的定义, 我们只是粗略地计算用来覆盖的小集合的个数. 现在我们首先允许有无穷多个覆盖, 其次将用来覆盖的集合的大小(直径)也计算进来.

我们再来看练习4.2中的例子, 集合 $$E=\{1/n:n\geq 1\}$$ 可以被更高效地覆盖. 事实上, 我们只需从右向左移动时, 减小用来覆盖的小球的直径. 在这个例子中, 下面两种计算方式

1. 将用来覆盖的小球的大小考虑进来,
2. 仅仅计算用来覆盖的小球的个数.

是有非常大的区别的.

在Minkowski维数中, 我们用一个覆盖中, 集合的个数来评价这个覆盖. 现在, 我们可以给出一个覆盖, 更精确的评价. $$\alpha\textbf{-value}$$ 是一个非常重要的概念. 对于任意的 $$\alpha>0$$, $$E_1,E_2,\cdots$$ 是一个覆盖, 定义这个覆盖的 $$\alpha\textbf{-value}$$ 如下

$$\sum_{i=1}^\infty \mid E_i\mid^\alpha.$$

> 当 $$\alpha=0$$ 时, 即退化到了Minkowski维数的情形. 不严格地说, $$\alpha\textbf{-value}$$ 可以看做, 在 $$\alpha$$ 维数下来看, 覆盖的总体积.

利用 $$\alpha\textbf{-value}$$ 可以定义Hausdorff维数.

**定义4.5** 对于任意的 $$\alpha>0$$, 定义度量空间 $$E$$ 的 $$\alpha$$**-Hausdorff content**($$\alpha$$ 维Hausdorff体积) 为

$$\mathcal H_\infty^\alpha=\inf\{\sum_{i=1}^\infty \mid E_i\mid^\alpha: E_1,E_2,\cdots 是 E 的一个覆盖\}$$

不严格地说, 这是最有效的覆盖的 $$\alpha\textbf{-value}$$. 如果 $$0\leq\alpha\leq\beta$$, 而且 $$\mathcal H_\infty^\alpha(E)=0$$, 那么 $$\mathcal H_\infty^\beta(E)=0$$. 因此我们定义

$$\dim E = \inf\{\alpha\geq0:\mathcal H_\infty^\alpha(E)=0\}=\sup\{\alpha\geq 0:\mathcal H_\infty^\alpha(E)>0\}$$

为集合 $$E$$ 的**Hausdorff维数**.

> 直观解释, 用高维去度量低维, 体积为零.


**注记4.6**

1. Hausdorff维数可以为无穷.
2. $$R^d$$ 的子集的Hausdorff维数不超过 $$d$$.
3. 对于任何的有界度量空间 $$E$$, Hausdorff维数不超过其下Minkowski维数, 即 $$\dim E\leq\underline\dim_M E$$.
4. Hausdorff维数具有可数稳定性, 请参考习题4.4.

> ① 例子: $$(E,\rho)$$, 对于任意的 $$x,y\in E, x\neq y, \rho(x,y)=\infty$$. 则 $$\dim(E)=\infty$$.

> ② 只需证明 $$R^d$$ 中的单位正方体 $$C$$ 的Hausdorff维数为 $$d$$. 事实上, 对任意的 $$\alpha>d$$, $$\mathfrak D_n$$ 为 $$C$$ 中二分子立方体构成的集合, 其中每个小立方体的边长为 $$1/2^n$$. $$\mathfrak D_n$$ 可以覆盖 $$C$$, 于是
>
> $$\mathcal H_\infty^\alpha(E)\leq (2^n)^d(\sqrt d 2^{-n})^\alpha=d^{\alpha/2}(2^n)^{(d-\alpha)}\rightarrow 0, n\rightarrow \infty.$$
>
> 于是 $$\mathcal H_\infty^\alpha(E)=0$$, $$\dim C\leq d$$.
>
> 另一方面, 对于任意的覆盖 $$E_1,E_2,\cdots$$, 这些覆盖的体积和至少为1. 于是
>
> $$\sum_{i=1}^\infty \mid E_1\mid^d>0.$$
>
> 于是, $$\dim C\geq d$$. 故 $$\dim C = d$$. 再由可数稳定性, 知 $$\dim \mathbb R^d=d$$.

>③ 设 $$E$$ 为有界度量空间, 对于任意的 $$\alpha>\underline\dim_M E$$, 存在 $$\varepsilon>0$$, 使得 $$\underline\dim_M E<\alpha-\varepsilon$$. 那么对于任意的 $$k$$, 存在 $$0<\delta<\frac{1}{k}$$ 和 $$E_1,E_2,\cdots,E_n$$ 满足 $$\mid E_i \mid\leq\delta,\forall 1\leq i\leq n$$, 且 $$n\leq \delta^{-\alpha+\varepsilon}$$. 这个覆盖的 $$\alpha\textbf{-value}$$ 最多为 $$n\delta^\alpha\leq\delta^\varepsilon\rightarrow 0,\delta\rightarrow 0$$. 因此 $$\mathcal H_\infty^\alpha(E)=0$$, $$\dim E\leq \alpha$$.

> ④ 因 $$E\subset F\Rightarrow \dim E\leq \dim F$$, 故
>
> $$\dim\cup_{k=1}^\infty\geq\sup\{\dim E_k:k\geq 1\}.$$
>
> 另一方面,
>
> $$\begin{align}
\mathcal H_\infty^\alpha(\cup_{k=1}^\infty E_k)
&\leq \inf\left\{\sum_{k=1}^\infty\sum_{j=1}^\infty\mid E_{j,k}\mid^\alpha:E_{1,k},E_{2,k},\cdots 覆盖 E_k\right\}\\
&=\sum_{k=1}^\infty\inf\left\{\sum_{j=1}^\infty\mid E_{j,k}\mid^\alpha:E_{1,k},E_{2,k},\cdots 覆盖 E_k\right\}\\
&=\sum_{k=1}^\infty\mathcal H_\infty^\alpha(E_k).
\end{align}$$
>
> 因此,
>
> $$\begin{align}
\dim\cup_{k=1}^\infty E_k&=\sup\{\alpha\geq 0:\mathcal H_\infty^\alpha(\cup_{k=1}^\infty E_k)>0\}\\
&\leq\sup\{\alpha\geq 0:\sum_{k=1}^\infty\mathcal H_\infty^\alpha(E_k)>0\}\\
&=\sup_{k=1}^\infty\sup\{\alpha\geq 0:\mathcal H_\infty^\alpha(E_k)>0\}\\
&=\sup_{k=1}^\infty\dim E_k
\end{align}$$

在Hausdorff维数的定义中, $$\alpha\text{-Hausdorff content}$$ 是非常重要的. 然而, 对于相同维数的集合来说, 它却不能区分这些集合的大小. 比如说, 考虑下图中的三个集合:
![BM_fig4.2](/assets/img/blogimg/BM_fig4.2.png)

上图中三个图形的 $$1\text{-Hausdorff content}$$ 都是1. 事实上, 球或者球面都可以被直径为 $$1$$ 的球覆盖住, 所以它们的 $$1\text{-Hausdorff content}$$ 最多为 $$1$$, 但是线段不能被更有效地覆盖, 所以其 $$1\text{-Hausdorff content}$$ 也是 $$1$$. 因此为了改良这个定义, 我们引出 **Hausdorff 测度**的概念. 这个定义的想法是, 只允许使用小的集合来覆盖.

**定义4.7** $$X$$ 是度量空间, $$E\subset X$$. 对于每一个 $$\alpha$$ 和 $$\delta$$, 定义

$$\mathcal H_\delta^\alpha(E) = \inf\{\sum_{i=1}^\infty\mid E_i\mid^\alpha:E_1,E_2,\cdots 覆盖 E, 且\mid E_i\mid\leq \delta\},$$

也就是说, 我们考虑使用直径不超过 $$\delta$$ 的集合来覆盖 $$E$$. 定义

$$\mathcal H^\alpha(E)=\sup_{\delta>0}\mathcal H^\alpha_\delta(E)=\lim_{\delta\downarrow 0}\mathcal H_\delta^\alpha (E)$$

为 $$E$$ 的 $$\alpha\textbf{-Hausdorff 测度}$$.

**注记4.8** $$\alpha\text{-Hausdorff 测度}$$ 满足如下几个性质:

1. $$\mathcal H^\alpha(\varnothing)=0$$.
2. (次可列可加性) $$\mathcal H^\alpha(\cup_{i=1}^\infty)\leq \sum_{i=1}^\infty \mathcal H^\alpha(E_i),\forall E_1,E_2,\cdots\subset X$$.
3. (单调性) 如果 $$E\subset D\subset X$$, 那么 $$\mathcal H^\alpha(E)\leq \mathcal H^\alpha(D)$$.

> 只需验证次可列可加性, 其余显然. 任取 $$E_1,E_2,\cdots\subset X$$. 对于任意的 $$\delta > 0,\varepsilon > 0,i\in \mathbb N_+$$, 存在 $$E_i$$ 的覆盖 $$E_{i,1},E_{i,2},\cdots$$ 满足 $$\mid E_{i,j}\mid\leq \delta,\forall j$$, 使得
>
> $$\sum_{i=1}^\infty\mid E_{i,j}\mid^\alpha < \mathcal H^\alpha_\delta(E_i)+\frac{\varepsilon}{i^2}.$$
>
> 于是
>
> $$\mathcal H_\delta^\alpha(\cup_{i=1}^\infty E_i)\leq \sum_{j=1}^\infty\sum_{j=1}^\infty\mid E_{i,j}\mid^\alpha\leq \sum_{i=1}^\infty\left(\mathcal H_{\delta}^\alpha(E_i)+\frac{\varepsilon}{i^2}\right)=\sum_{i=1}^\infty\mathcal H_\delta^\alpha(E_i)+c\varepsilon.$$
>
> 令 $$\varepsilon\rightarrow 0$$, 则有 $$\mathcal H_\delta^\alpha(\cup_{i=1}^\infty E_i)\leq\sum_{i=1}^\infty\mathcal H_\delta^\alpha(E_i)$$.
> 再令 $$\delta\rightarrow 0$$, 则 $$\mathcal H^\alpha(\cup_{i=1}^\infty E_i)\leq\sum_{i=1}^\infty\mathcal H^\alpha(E_i)$$.

> 用高维的Hausdorff测度, 测量低维几何体, 测度为0. 用低维的hausdorff测度, 测量高维的几何体, 测度为无穷. (画图)

**命题4.9** 对于任何的有界度量空间 $$E$$. 有

$$\mathcal H^\alpha(E)=0\Leftrightarrow\mathcal H_\infty^\alpha(E)=0.$$

于是,

$$\begin{align}
\dim E&=\inf\{\alpha:\mathcal H^\alpha(E)=0\}=\inf\{\alpha:\mathcal H^\alpha(E)<\infty\}\\
&=\sup\{\alpha:\mathcal H^\alpha(E)>0\}=\sup\{\alpha:\mathcal H^\alpha(E)=\infty\}
\end{align}$$

**证明** 设 $$\mathcal H_\infty^\alpha(E)=c>0\Rightarrow \mathcal H_\delta^\alpha(E)\geq c$$, 对 $$\forall \delta > 0$$. 因此 $$\mathcal H^\alpha(E)\geq c>0$$.

另一方面, 若 $$\mathcal H_\infty^\alpha(E)=0$$, 那么对 $$\forall \delta > 0$$, 存在覆盖 $$E_1,E_2,\cdots$$ 且 $$\sum_{k=1}^\infty\mid E_k\mid^\alpha<\delta$$. 这些集合的直径显然小于 $$\delta^{1/\alpha}$$, 于是 $$\mathcal H_{\delta^{1/\alpha}}^\alpha<\delta$$, 令 $$\delta\rightarrow 0$$, 于是 $$\mathcal H^\alpha(E)=0$$. 于是有

$$\dim E=\inf\{\alpha:\mathcal H^\alpha(E)=0\}=\sup\{\alpha:\mathcal H^\alpha(E)>0\}.$$

对于另外两个表达式, 只需证明若 $$\mathcal H^\alpha(E)<\infty$$, 则 $$\forall \beta > \alpha, \mathcal H^\beta(E)=0$$. 设 $$\mathcal H^\alpha(E)=C<\infty$$, 对于 $$\forall \delta > 0$$, 存在 $$E_1,E_2,\cdots$$ 且 $$\mid E_i\mid<\delta$$, 满足 $$\sum_{i=1}^\infty\mid E_i\mid^\alpha\leq C+1$$, 于是 $$\mathcal H_\delta^\alpha(E)\leq C+1$$. 注意到 $$\mathcal H_\delta^\beta(E)\leq \delta^{\beta-\alpha}\mathcal H_\delta^\alpha(E)\leq\delta^{\beta-\alpha}(C+1)$$. 令 $$\delta\downarrow 0$$, 即得 $$\mathcal H^{\beta}(E)=0$$. $$\square$$

**注记4.10** 因为Lipschitz映射至多把一个集合的直径增加为原来的常数倍, 所以对于任何 $$A\subset E$$ 在Lipschitz映射的像集的Hausdorff维数不会超过 $$A$$.

> **Lipschitz连续:** $$(X,d_1),(Y,d_2)$$ 为两个度量空间. 映射 $$f:X\rightarrow Y$$ 称为是Lipschitz连续的, 如果存在一个实值常数 $$K>0$$, 满足对于任意的 $$x_1,x_2\in X$$, 有 $$d_2(f(x_1),f(x_2))\leq Kd_1(x_1,x_2)$$. 我们称 $$K$$ 为Lipschitz常数.

**定义4.11** 令 $$0<\alpha\leq 1$$. 映射 $$f:(E_1,\rho_1)\rightarrow (E_2,\rho_2)$$ 称为是 $$\alpha$$-Holder连续的, 如果存在一个常数 $$C>0$$, 使得

$$\rho_2(f(x),f(y))\leq C\rho_1(x,y)^\alpha,\forall x,y\in E_1$$.

常数 $$C$$ 被称为**Holder常数**.

**注记4.12** (练习4.6) 如果 $$f:(E_1,\rho_1)\rightarrow (E_2,\rho_2)$$ 是满射且 $$\alpha$$-Holder连续的, 那么对于任意的 $$\beta\geq 0$$,

$$\mathcal H^\beta(E_2)\leq C^\beta\mathcal H^{\alpha\beta}(E_1),$$

因此 $$\dim(E_2)\leq\frac{1}{\alpha}\dim (E_1)$$.

**证明** 不妨假设 $$\mathcal H^{\alpha\beta}(E_1)<\infty$$. 任给 $$\varepsilon,\delta > 0$$, 可以用 $$B_1,B_2,\cdots,\mid B_i\mid\leq\delta$$ 覆盖 $$E_1$$, 且满足:

$$\sum_{i=1}^\infty\mid B_i\mid^{\alpha\beta}\leq\mathcal H^{\alpha\beta}(E_1)+\varepsilon.$$

注意到 $$f(B_1),f(B_2),\cdots$$ 可以覆盖 $$E_2$$ 且 $$\mid f(B_i)\mid\leq C\mid B_i\mid^\alpha\leq C\delta^\alpha$$. 因此

$$\sum_{i=1}^\infty\mid f(B_i)\mid^\beta\leq C^\beta\sum_{i=1}^\infty\mid B_i\mid^{\alpha\beta}\leq C^\beta\mathcal H^{\alpha\beta}(E_1)+C^\beta\varepsilon.$$

先令 $$\varepsilon\rightarrow 0$$, 再令 $$\delta\rightarrow 0$$ 知

$$\mathcal H^\beta(E_2)\leq C^\beta\mathcal H^{\alpha\beta}(E_1).$$

因为

$$\dim(E_1)=\inf\{\alpha\beta:\mathcal H^{\alpha\beta}(E_1)=0\},$$

$$\dim(E_2)=\inf\{\beta:\mathcal H^\beta(E_2)=0\}.$$

设 $$\dim(E_1)=\alpha\beta_0$$, 则 $$\mathcal H^{\alpha\beta_0+\varepsilon}(E_1)=0,\forall \varepsilon > 0$$, 于是 $$\mathcal H^{\beta_0+\varepsilon/\alpha}(E_2)=0$$, 从而 $$\dim(E_2)\leq\beta_0$$.

## 4.1.3 Hausdorff维数的上界

依据Holder连续性, 我们接下来给出关于一个映射的 **Graph(图)** 和 **Range(值域/像)** 的维数的上界.

**定义4.13** 对于函数 $$f:A\rightarrow \mathbb R^d,A\subset [0,\infty)$$, 定义这个函数的 **graph** 为:

$$\text{Graph}_f(A):=\{(t,f(t)):t\in A\}\subset \mathbb R^{d+1},$$

定义 **range** 为:

$$\text{Range}_f(A)=f(A)=\{f(t):t\in A\}\subset\mathbb R^d.$$

**命题4.14** 假设 $$f:[0,1]\rightarrow\mathbb R^d$$ 是一个 $$\alpha$$-Holder连续的函数. 那么

(a) $$\dim(\text{Graph}_f[0,1])\leq 1+(1-\alpha)(d\wedge\frac{1}{\alpha})$$,

(b) 对于任意的 $$A\subset [0,1]$$, $$\dim(\text{Range}_f(A))\leq\frac{\dim A}{\alpha}$$.

**证明** 因为函数 $$f$$ 是 $$\alpha$$-Holder连续的, 所以存在常数 $$C$$, 使得对于任意的 $$s,t\in [0,1],\mid t-s\mid\leq\varepsilon$$, 有 $$\mid f(t)-f(s)\mid\leq C\varepsilon^\alpha$$. 用长度为 $$\varepsilon$$ 的小区间来覆盖 $$[0,1]$$, 最多需要 $$\lceil 1/\varepsilon \rceil$$ 个. 这样的小区间的像可以被一个直径为 $$2C\varepsilon^\alpha$$ 的小球盖住.

- 对于每一个小球, 都存在常数 $$c_0$$, 使其可以被 $$c_0(\frac{\varepsilon^\alpha}{\varepsilon})^d=\varepsilon^{d\alpha-d}$$ 的个直径为 $$\varepsilon$$ 的小球覆盖住.
- 或者, 长度为 $$(\varepsilon/C)^{1/\alpha}$$ 的子区间的像集, 被一个长度为 $$\varepsilon$$ 的小球覆盖住.

所有用来覆盖区间 $$[0,1]$$ 的子区间, 及其对应的直径为 $$\varepsilon$$ 的小球所组成的乘积集可以覆盖 $$\text{Graph}_f([0,1])$$.

第一种情形, 存在 $$c_1$$, 使得$$c_1\varepsilon^{d\alpha-d-1}$$ 个乘积集可以覆盖  $$\text{Graph}_f([0,1])$$.

第二种情形需要 $$c_2\varepsilon^{-1/\alpha}$$ 个乘积集来覆盖 $$\text{Graph}_f([0,1])$$.

无论哪种情形, 都能得到 (a) 的结论. (b) 可以由注记4.12得到.

**注记4.15** 根据Hausdorff维数的可数稳定性, 命题4.14的结论, 对于 $$f:[0,\infty)\rightarrow \mathbb R^d$$ 是局部 $$\alpha$$-Holder连续的情形, 也成立.

下面, 我们将看到一个关于布朗运动的维数的性质. 我们在推论1.20中已经证明了, 对于任意的 $$\alpha<1/2$$, 一维布朗运动是几乎必然地, 处处局部 $$\alpha$$-Holder连续. 这个结论显然可以推广到 $$d$$ 维的布朗运动, 于是我们可以给出其 range 和 graph 的Hausdorff维数的上界.

**推论4.16** 对于任意给定的集合 $$A\subset[0,\infty)$$, 几乎必然地, $$d$$ 维布朗运动的 graph 满足

$$\dim (\text{Graph(A)})\leq\left\{
  \begin{aligned}
  &3/2, &\text{如果} d=1\\
  &2, &\text{如果} d\geq 2.
\end{aligned}\right.$$

而且, range 几乎必然地, 满足

$$\dim \text{Range}(A)\leq (2\dim A)\wedge d.$$
