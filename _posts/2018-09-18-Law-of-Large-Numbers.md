---
title: 几种大数定律的区别与联系
tags:
 - 概率论基础
key : law-of-large-numbers
mathjax: true
---
 
   人们发现, 在重复的试验中, 随着试验次数的增加, 事件发生的频率会趋于一个稳定值. 这意味着在偶然事件中包含着必然的结论. 大数定律就是描述相当多次重复的实验的结果的定律. 根据这个定律知道, 样本越多, 其平均值就会越接近期望值.

   大数定律有两种常见的表现形式：弱大数定律和强大数定律. 在古典意义下, 两种大数定律都是表明样本的均值收敛于随机变量的期望值. 强与弱的差别在于收敛方式的不同, 强大数定律要求几乎处处收敛, 然而弱大数定律仅要求依概率收敛.

   在现代意义下, 设 $\{X_n:n\in\mathbb N\}$ 是随机变量序列, 令 $S_n:=\sum_{k=1}^{n}X_k,n\in \mathbb N$. 若存在 $\{a_n\}\subset\mathbb R,\{b_n\}\subset\mathbb R_+$, 且 $b_n\rightarrow\infty$ 使
  \[
    \frac{S_n-a_n}{b_n}\rightarrow 0, \text{依概率 $\mathbf P$ (或者 $a.e.$)},
  \] 

   则称 $\{X_n\}$ 服从弱大数定律 (或者强大数定律).

  # 弱大数定律
   根据条件的不同, 弱大数定律有几种不同的表现形式.
 
  ## Chebyshev 大数定理
   首先考虑古典意义下的弱大数定律. 假设 $\mathbf E S_n<\infty$, 根据定理 ??, 如果 $\frac{S_n}{n}\xrightarrow 2 \frac{\mathbf E S_n}{n}$, 便可以得到 $\frac{S_n}{n}\xrightarrow\mathbf P \frac{\mathbf E S_n}{n}$. 由于
   
   $$\frac{S_n}{n}\xrightarrow2 \frac{\mathbf E S_n}{n}\Leftrightarrow\frac{\text{Var} (S_n)}{n^2}\rightarrow 0,$$

   为了简化 $\text{Var}(S_n)$ 的计算, 给出不相关随机变量的定义.

  **定义：** 设$X,Y$ 为随机变量, $E|X|^2<\infty,E|Y|^2<\infty$ 且

  $$E(XY)=E(X)\cdot E(Y),$$

  则称 $X,Y$ 不相关. 若 $E(XY)=0$, 则称 $X,Y$ 正交.

   若 $\{X_n:n\in N\}$ 为两两不相关随机变量序列, 则
   \begin{align}\label{eq:12}
   \text{Var}(X_1+X_2+\cdots+X_n)=\text{Var}(X_1)+\text{Var}(X_2)+\cdots+\text{Var}(X_n).
   \end{align}
   事实上, 令 $\mu_i=EX_i, S_n=\sum_{i=1}^{n}X_i.$ 有
   \begin{align*}
   \text{Var}(S_n)&=E(S_n-ES_n)^2=E\left(\sum_{i=1}^{n}(X_i-\mu_i)\right)^2\\
   &=\sum_{i=1}^{n}E(X_i-\mu_i)^2+2\sum_{i=1}^{n}\sum_{j=1}^{i-1}E((X_i-\mu_i)(X_j-\mu_j)).
   \end{align*}
   上式结果中的第一项为 $\text{Var}(X_1)+\text{Var}(X_2)+\cdots+\text{Var}(X_n)$, 所以只需要说明第二项为 0. 由于 $X_i$ 与 $X_j$ 是不相关的, 故
   \begin{align*}
   E((X_i-\mu_i)(X_j-\mu_j))&=EX_iX_j-\mu_iEX_j-\mu_jEX_i+\mu_i\mu_j\\
   &=EX_iX_j-\mu_i\mu_j=0.
   \end{align*}
   也就是说, 对于不相关的随机序列, 随机变量和的方差等于每个随机变量方差的和.

   结合 (\ref{eq:11}) 式与 (\ref{eq:12}) 式立得 $L^2$ 收敛下的弱大数定律.
   \begin{dl}[ Chebyshev 大数定理]\label{chebshev}
     若 $\{X_n:n\in N\}$ 两两不相关, $\mathbf E S_n$ 存在且 $\mathop{\sup}\limits_n \text{Var} (X_n)<\infty$, 则
     \[
     \frac{S_n-ES_n}{n}\xrightarrow{2}0,
     \]
     因而
     \[
     \frac{S_n-ES_n}{n}\xrightarrow{\textbf P}0.
     \]
   \end{dl}
   \begin{proof}
     因为 $\mathbf E(S_n)<\infty$, 令 $\mu:=\frac{\mathbf E S_n}{n}$. 所以 $\mathbf Exists C\in\mathbf R$,
     \[
     E(S_n/n-\mu)^2=\text{Var}(S_n/n)=\frac{1}{n^2}(\text{Var}(X_1)+\cdots+\text{Var}(X_n))\leq\frac{Cn}{n^2}\xrightarrow 2 0,
     \]
     从而根据定理 \ref{dl:2}(3), 依概率收敛也正确.
   \end{proof}

   上述定理中极为重要的一种特殊情况是： $X_1,X_2,\cdots$ 为独立同分布序列. 简单地说, 上面定理告诉我们, 当 $EX_i^2<\infty$ 时, $S_n/n$ 依概率收敛到 $X_i$ 的均值.
  \subsection{ Khinchin 大数定理}
    Chebyshev 大数定理的核心结论仅仅与 $X_n$ 有关, 但是条件却涉及到了二阶矩, 于是我们希望这个假设可以去掉. 事实上, 二阶矩有限的条件不是必需的, 这样就有了 Khinchin 大数定理.
      \begin{dl}[ Khinchin 大数定理]\label{dl:xinqin}
     设 $\{X_n:n\in N\}$ 为独立同分布序列且 $\mathbf E|X_1|<\infty$, 令 $S_n:=\sum_{k=1}^{n}X_k$, 则
     \[
     \frac{S_n}{n}\xrightarrow\mathbf P \mathbf E X_1.
     \]
     \end{dl}

   在 Khinchin 大数定理中, 将二阶矩有限的条件减弱到了一阶矩有限. 令人惊奇的是, 我们甚至可以将一阶矩有限的条件去掉, 得到一个更强的结论. 我们将先证明下面这个定理, 然后则不难给出 Khinchin 大数定理的证明.

      \begin{dl}[弱大数定律]\label{dl:prexinqin}
     设 $X_n:n\in N$ 为独立同分布序列, $S_n:=\sum_{k=1}^{n}X_k$, 则 $\{X_n:n\in \mathbf N\}$ 满足弱大数定律（即存在 $\{a_n\}\subset\mathbf R$ 使 $\frac{S_n}{n}-a_n\rightarrow 0$）的充要条件是
     \[
     \lim_{x\rightarrow\infty}x\mathbf P(|X_1|>x)=0.
     \]
     在条件成立时, $a_n:=\mathbf E(X_1I_{\{X_1\leq n\}}). $
     \end{dl}

     需要注意的是, 上述定理并不要求期望 $\mathbf E(X_1)$ 存在. 在后面 \ref{sec:jgbtdsdvdqb} 小节的例 \ref{ex:rdsdlfl} 中给出了一个期望不存在却满足弱大数定律的例子.

     证明定理 \ref{dl:prexinqin} 需要用到尾等价序列的概念以及“截尾”、对称化的手法. 为此, 我们给出下面一系列的定义和引理.
   \subsection{截尾——构造尾等价序列}
   \begin{dy}
     设 $\{X_n:n\in N\},\{Y_n:n\in N\}$ 是两个随机变量序列,若
     \[
     \mathbf P(X_n\neq Y_n,\io)=0,
     \]
     则称它们尾等价.
   \end{dy}
   由引理 $\ref{dl:borel}$ (Borel-Cantelli 引理) 可知, 若
   \[
   \sum_{n=1}^{\infty}\mathbf P(X_n\neq Y_n)<\infty,
   \]
   则 $\{X_n:n\in N\}$ 与 $\{Y_n:n\in N\}$ 尾等价, 由此易知：对于一个随机变量序列 ${X_n:n\in N}$, 常常可以通过“截尾”的手法得到一个与之尾等价的随机变量序列.

   对于给定的随机变量 $X$ 以及 $c\in(0,\infty)$, 称
   \begin{align}\label{eq:jd}
   X^c:=XI_{\{|X|\leq c\}}=\left\{\begin{matrix}
     X,&|X|\leq c,\\
     0,&|X|>c
   \end{matrix}\right.
   \end{align}
   为 $X$ 在 $c$ 处的截尾. 于是对于任何一个有限值的随机变量序列 $\{X_n:n\in N\}$, 存在 $c_n\in (0,\infty)$ 使 $\mathbf{P}(|X_n|>c_n)<\frac{1}{2^n}$, 因而
   \[
   \sum_{n=1}^{\infty}\mathbf{P}(X_n\neq X_n^{c_n})=\sum_{n=1}^{\infty}\mathbf{P}(|X_n|>c_n)<1.
   \]
   于是 $\{X_n:n\in \mathbf N\}$ 与 $\{X_n^{c_n}:n\in \mathbf N\}$ 尾等价.
   \begin{yl}
     设 $\{X_n:n\in N\},\{Y_n:n\in N\}$ 为尾等价的两个随机变量列, 则
     \begin{enumerate}[(1)]
       \item $\mathop{\sum}\limits_{n=1}^{\infty}(X_n-Y_n)\ \as$ 收敛；
       \item $\forall \{a_n\}\subset \mathbf{R}_+, a_n\rightarrow \infty$,
       \[
       \frac{1}{a_n}\sum_{k=1}^{n}(X_k-Y_k)\rightarrow0,\ \as,
       \]
       因而也依概率收敛于0；
       \item 以概率1, $\sum X_n$ 与 $\sum Y_n$, $\frac{1}{a_n}\sum X_n$ 与 $\frac{1}{a_n}\sum Y_n$ 以同样的方式收敛或者发散；
       \item 若 $\frac{1}{a_n}\mathop{\sum}\limits_{k=1}^{n}X_k\xrightarrow{\mathbf P}X$, 则 $\frac{1}{a_n}\mathop{\sum}\limits_{k=1}^{n}Y_k\xrightarrow{\mathbf P}X$.
     \end{enumerate}
   \end{yl}
   \begin{proof}
     由尾等价的定义知, 存在 $N\in\h F$, $\mathbf P(N)=0$, 使 $\forall\omega\in N^c$, 不可能有无穷个 $n\in N$ 使 $X_n(\omega)\neq Y_n(\omega)$ 成立, 即存在 $n_0(\omega)$ 使
     \[
     \forall n\geq n_0(\omega),\ \ X_n(\omega)=Y_n(\omega).
     \]
     由此可知 (1)(2)(3)(4) 成立.
   \end{proof}

       利用“截尾”的手法, 可以证明定理 \ref{dl:prexinqin} 的充分性：对于给定的 $n$, 根据 (\ref{eq:jd}) 式定义的截尾, 令
       \begin{align*}
       X_{nk}&:=X_k^n=X_kI_{\{|X_k|\leq n\}},\ k=1,2,\cdots,n\\
       S_n'&:=X_{n1}+X_{n2}+\cdots+X_{nn},
       \end{align*}
     则 $X_{n1},X_{n2},\cdots,X_{nn}$ 独立, $\mathbf EX_{nk}=a_n$ 且 $\forall \text{Var}epsilon>0$,
     \begin{align}\label{eq:21}
     \mathbf P\left(\left|\frac{S_n}{n}-a_n\right|>\text{Var}epsilon
     \right)\leq\mathbf P\left(\left|\frac{S_n'}{n}-a_n\right|>\text{Var}epsilon\right)+\mathbf P(S_n\neq S_n').
     \end{align}
     (\ref{eq:21}) 式右边第二项
     \begin{align}\label{eq:23}
     \mathbf P(S_n\neq S_n')&\leq\mathbf P(\mathbf Exists k\  \text{s.t.\ } X_k\neq X_{nk})\\
     &\leq\sum_{k=1}^{n}\mathbf P(X_k\neq X_{nk})=n\mathbf P(|X_1|>n)\rightarrow 0, \ \ n\rightarrow\infty,
     \end{align}
     (\ref{eq:21}) 式右边第一项由 Chebyshev 不等式知
     \begin{align}\label{eq:24}
     \mathbf P\left(\left|\frac{S_n'}{n}-a_n\right|>\text{Var}epsilon\right)\leq\text{Var}epsilon^{-2}\text{Var}\left(\frac{S_n'}{n}\right)=\frac{\text{Var}(X_{n1})}{n\text{Var}epsilon^2}
     \leq\frac{\mathbf EX_{n1}^2}{n\text{Var}epsilon^2},
     \end{align}
     而由于一个已知的结论：
     \[
     \mathbf E X^s=s\int_0^\infty t^{s-1}[1-F(t)]dt,
     \]
     可知
     \begin{align*}
     \mathbf E|X_{n1}|^2&=\int_0^\infty x^2 d_{|X_{n1}|}F(x)=2\int_0^\infty y(1-F_{|X_{n1}|}(y))dy\\
     &=2\int_0^\infty y\mathbf P(|X_{n1}|>y)dy\leq 2\int_0^n y\mathbf P(|X_1|>y)dy.
     \end{align*}
     上式的最后一个不等式是因为：当 $y\geq n$ 时, $\mathbf P(|X_{n1}|>y)=\mathbf P(0>y)=0;$ 当 $y\leq n$ 时,
     \begin{align*}
     \mathbf P(|X_{n1}|>y)&=\mathbf P(|X_{n1}|>n)+\mathbf P(n\geq|X_{n1}|>y)\\
     &=\mathbf P(|X_1|\in (y,n])\leq\mathbf P(|X_1|>y).
     \end{align*}
     由假设知, $\forall\delta>0,\mathbf Exists y_0>0$, 使当 $y\geq y_0$ 时, $y\mathbf P(|X_1|>y)<\delta$, 于是 $\forall n>y_0$,
     \begin{align*}
     \frac{\mathbf E X_{n1}^2}{2n}&\leq\frac{1}{n}\int_0^{y_0}y\mathbf P(|X_1|>y)dy+\frac{1}{n}\int_{y_0}^ny\mathbf P(|X_1|>y)dy\\
     &\leq\frac{y_0}{n}\sup_{0\leq y\leq y_0}[y\mathbf P(|X_1|>y)]+\delta.
     \end{align*}
     由此可知 $\mathop{\lim}\limits_{n\rightarrow\infty}\mathbf E \frac{X_{n1}^2}{n}=0$, 因而由 (\ref{eq:23}) 式和 (\ref{eq:24}) 可知 $\frac{S_n}{n}-a_n\xrightarrow\mathbf P 0$.

     \subsection{对称化}
     为了证明定理 \ref{dl:prexinqin} 的必要性, 需要用到对称化的手法. 为此, 我们同样先给出一系列的定义和命题.
     \begin{dy}
       若随机变量 $X$ 与 $-X$ 同分布, 则称它为对称随机变量；若随机变量 $X_1,X_2$ 独立, 且都与 $X$ 同分布, 则称 $\dot{X}:=X_1-X_2$ 为 $X$ 的一个对称化随机变量(它是一个对称随机变量), 而
       $\dot F:=F_{X_1-X_2}(x)=\int_{-\infty}^{+\infty}F_X(x+y)F_X(dy)$ 称为 $F_X$ 的对称化分布.
     \end{dy}
     显然由乘积测度定理容易由 $X$ 出发构造出它的对称化随机变量. 下面要进行更一般的构造.

     设 $X=\{X_n:n\in\mathbf N\}$ 为一独立随机变量序列, 由乘积测度定理存在两个相互独立的随机变量序列 $X^k=\{X_n^k:n\in \mathbf N\},k=1,2$, 并且都与 $X$ 同分布, 于是
     \begin{align}\label{eq:dch}
       \dot X:=\{\dot X_n:=X_n^1-X_n^2:n\in \mathbf N\}
     \end{align}
     仍然是独立随机变量序列, 并且它的每一个分量都是 $X$ 的相应分量的对称化. 这种构造 $(X_1,X_2)$ 的手法, 实际上是一种独立耦合.

     现在证明两条关于对称化手法有用的引理：
     \begin{yl}[对称化不等式]\label{yl:dchbds}
       设 $X_1,X_2$ 是独立同分布的随机变量, 则
       \begin{align}\label{eq:25}
       \mathbf P(|X_1-X_2|>u)\leq 2\mathbf P\left(|X_1|>\frac{1}{2}u\right),\forall u>0.
       \end{align}
       若 $a\geq0$ 满足 $\mathbf P(X_1\leq a)\geq p$ 及 $\mathbf P(X_1\geq -a)\geq p$, 则
       \begin{align}\label{eq:26}
       \mathbf P(|X_1-X_2|>u)\geq \mathbf P(|X_1|>u+a),\forall u>0,
       \end{align}
       特别地, 若 $0$ 是 $X$ 的中数, 则有
       \begin{align}\label{eq:27}
       \mathbf P(|X_1-X_2|>u)\geq\frac{1}{2}\mathbf P(|X_1|>u),\forall u>0.
       \end{align}
     \end{yl}
     \begin{proof}
       因为 $\forall u>0$, 必有
       \begin{align*}
         &\left\{\omega:|X_1(\omega)|>\frac{1}{2}u\right\}\cup\left\{\omega:|X_2|>\frac{1}{2}u\right\}\\
         \supset&\{\omega:|X_1(\omega)-X_2(\omega)|>u\}\\
         \supset&\{\omega:X_1(\omega)>u+a,X_2(\omega)\leq a\}\cup\{\omega:X_1(\omega)<-u-a,X_(\omega)\geq-a\}.
       \end{align*}
       所以由 $X_1,X_2$ 独立同分布知 (\ref{eq:25}) 式与 (\ref{eq:26}) 式成立.
     \end{proof}
     \begin{yl}\label{yl:21}
       设 $X_k, k=1,2,\cdots,n$ 是对称随机变量且独立, 则 $S_n:=\mathop{\sum}\limits_{k=1}^{n}X_k$ 为对称随机变量, 且有
       \begin{align}\label{eq:28}
       \mathbf P(|S_n|>u)\geq\frac{1}{2}\mathbf P(\max_{1\leq k\leq n}|X_k|>u),\ \ \forall u>0.
       \end{align}
       若 $X_k$ 还同分布, 则有
       \begin{align}\label{eq:29}
       \mathbf P(S_n>u)\geq\frac{1}{2}(1-\mathbf Exp{-n\mathbf P (|X_1|>u)}).
       \end{align}
     \end{yl}
     \begin{proof}
       令 $M:=X_T$, 其中
       \[
       T(\omega):=\min\{k:|X_k(\omega)|=\max_{1\leq i\leq n}|X_i(\omega)|\}.
       \]
       再令 $L:=S_n-M$ 则易见 $(L,M),(-L,M),(L,-M),(-L,-M)$ 同分布. 于是 $\forall u>0$ 有
       \begin{align*}
       \mathbf P (S_n>u)&=\mathbf P(M+L>u)\geq \mathbf P(M>u,L\geq0)\\
       &=\frac{1}{2}[\mathbf P(M>u,L\geq0)+\mathbf P(M>u,-L\geq 0)]\geq\frac{1}{2}\mathbf P(M>u)
       \end{align*}
同理 $\mathbf P(S_n<-u)\geq\frac{1}{2}\mathbf P(M<-u)$. 故 (\ref{eq:28}) 式获证.

若 $X_k$ 还同分布, 则由
\[
\mathbf P(\max|x_kp|\leq u)=\mathbf Prod_{k=1}^n\mathbf P(|X_k|\leq u)=[\mathbf P(|X_1|\leq u)]^n
\]
及初等不等式 $1-u<\mathbf Exp{-u},\forall\in(0,1)$ 成立, 即得 (\ref{eq:29}) 式.
     \end{proof}

   定理 \ref{dl:prexinqin} 的必要性证明：像 (\ref{eq:dch}) 式那样构造对称化独立随机变量序列 $\dot X$, 它的部分和 $\dot S_n$ 是 $S_n-na_n$ 的对称化, 设 $m$ 是 $x_1$ 的中数. 依次应用引理 \ref{yl:dchbds} 的 (\ref{eq:25}) 式, 引理 \ref{yl:21} 的 (\ref{eq:29}) 式及引理 \ref{yl:dchbds} 的 (\ref{eq:26}) 式即得
   \begin{align*}
   &2\mathbf P(|S_n-na_n|>n\text{Var}epsilon)\geq(|\dot S_n|>2n\text{Var}epsilon)\\
   \geq&\frac{1}{2}\left[1-\mathbf Exp{-n\mathbf P(|\dot X_1|>2n\text{Var}epsilon)}\right]\\
   \geq&\frac{1}{2}\left[1-\mathbf Exp{-\frac{n}{2}\mathbf P(|X_1|>2n\text{Var}epsilon+|m|)}\right]
   \end{align*}
   由弱大数定律成立立知上式左端当 $n\rightarrow\infty$ 时趋于 0, 于是上式右端趋于 0, 因而条件的必要性成立.

   最后, 我们来证明定理 \ref{dl:prexinqin} 的特殊形式—— Khinchin 大数定理：


    若 $\mathbf E|X_1|<\infty$, 则
   \[
   x\mathbf P(|X_1|>x)\leq\mathbf E[X_1I_{\{|X_1|>x\}}], \ \ x\rightarrow\infty
   \]
   又
   \[
   a_n:=\mathbf E(X_1^n)=\mathbf E[|X_1|I_{\{X_1\leq n\}}]\rightarrow \mathbf E|X_1|,\ \ n\rightarrow\infty
   \]
   所以
   \[
   \frac{S_n}{n}-\mathbf E|X_1|=\frac{S_n}{n}-a_n-(\mathbf E|X_1|-a_n)\xrightarrow{\mathbf P}0.
   \]
   \section{强大数定律}
   \begin{dl}[强大数定律\cite{probability}]\label{dl:qdsdl}
     设 $X_1,X_2,\cdots$ 是独立同分布随机变量序列, 且 $E|X_i|<\infty$. 令 $EX_1=\mu, S_n=X_1+X_2+\cdots X_n$. 那么 \[\frac{S_n}{n}\xrightarrow{a.s.}\mu,\ \ n\rightarrow\infty.\]
   \end{dl}
   强大数定律的证明与弱大数定律类似, 同样要利用“截尾”的方法.
   \begin{yl}\label{yl:0}
     令 $Y_k=X_kI_{\{|X_k|\leq k\}}, T_n=Y_1+Y_2+\cdots+Y_n$. 则 $\frac{T_n}{n}\xrightarrow{a.s.}\mu.$
   \end{yl}
   \begin{proof}
     $\mathop{\sum}\limits_{k=1}^\infty\mathbf P(|X_k|>k)\leq\int_0^\infty\mathbf P(|X_1|>t)dt=E|X_1|<\infty$, 所以 $\mathbf P(X_k\neq Y_k\ \io)=0.$ 这表明对于任意的 $n\in\mathbf N$, $|S_n(\omega)-T_n(\omega)|\leq R(\omega)<\infty\ \as$
   \end{proof}
   \begin{yl}\label{yl:1}
     $\mathop{\sum}\limits_{k=1}^\infty\frac{\text{Var}(Y_k)}{k^2}\leq 4E|X_1|<\infty.$
   \end{yl}
   \begin{proof}
     为了估计和的上界, 我们观察
     \[
     \text{Var}(Y_k)\leq E(Y_k^2)=\int_0^\infty 2y\mathbf P(|Y_k|>y)dy\leq\int_0^k 2y\mathbf P(|X_1|>y)dy
     \]
     所以利用 Fubini 定理
     \begin{align*}
       \sum_{k=1}^\infty E(Y_k^2)/k^2&\leq\sum_{k=1}^{\infty}k^{-2}\int_0^\infty I_{\{y<k\}}2y\mathbf P(|X_1|>y)dy\\
       &=\int_0^\infty\left\{\sum_{k=1}^\infty k^{-2}I_{\{y<k\}}\right\}2y\mathbf P(|X_1|>y)dy.
     \end{align*}
     又因 $E|X_1|=\int_0^\infty\mathbf P(|X_1|>y)dy$, 我们能利用下面的引理 \ref{yl:22} 来完成这个证明.
   \end{proof}
   \begin{yl}\label{yl:22}
     如果 $y\geq 0$, 那么 $2y\mathop{\sum}\limits_{k>y}k^{-2}\leq4$.
   \end{yl}
   \begin{proof}
     如果 $m\geq2$, 那么
     \begin{align}\label{eq:41}
     \sum_{k\geq m}k^{-2}\leq\int_{m-1}^\infty x^{-2}dx=\frac{1}{m-1}.
     \end{align}
     当 $y\geq1$ 时, (\ref{eq:41}) 式的求和项从 $k=[y]+1\geq2$ 开始, 所以
     \[
     2y\mathop{\sum}\limits_{k>y}k^{-2}\leq 2y/[y]\leq 4.
     \]
     当 $0\leq y<1$ 时,
     \[
     2y\sum_{k>y}k^{-2}\leq2\left(1+\sum_{k=1}^{\infty}\right)\leq4.
     \]
     因此引理 \ref{yl:22} 得证, 从而完成了引理 \ref{yl:1} 的证明.
   \end{proof}

   引理 \ref{yl:0} 和引理 \ref{yl:1} 的证明是常规的. 下面的证明则是很有技巧性的, 想法在于：为了证明 $S_n/n$ 的收敛性, 先证明其子列 $S_{k(n)}/k(n)$ 是收敛的. 再利用单调性, 将 $S_n/n$ 控制在两个满足条件的子列中间, 也就证明的 $S_n/n$ 的收敛性.

    若 $X_n^+,X_n^-,n\geq1$ 满足强大数定律的假设, 可以令 $X_n=X_n^+-X_n^-$. 因此, 不失一般性, 我们可以假设 $X_n\geq0$.

   令 $\alpha>1, k(n)=[\alpha^n]$. 如果 $\text{Var}epsilon>0$, 根据 Chebyshev 不等式有
   \begin{align*}
   \sum_{n=1}^\infty\mathbf P(|T_{k(n)}-\mathbf E T_{k(n)}|>\text{Var}epsilon k(n))&\leq\text{Var}epsilon^{-2}\sum_{n=1}^\infty\frac{\text{Var}(T_{k(n)})}{k(n)^2}\\
   =\text{Var}epsilon^{-2}\sum_{n=1}^{\infty}k(n)^{-2}\sum_{m=1}^{k(n)}\text{Var}(Y_m)&=\text{Var}epsilon^{-2}\sum_{m=1}^{\infty}\text{Var}(Y_m)\sum_{n:k(n)\geq m}k(n)^{-2}.
   \end{align*}
      在上式中, 我们利用 Fubini 定理来交换了两个求和符号. 对于 $n\geq 1,k(n)=[\alpha^n],[\alpha^n]\geq\frac{\alpha^n}{2}$, 对这个几何级数求和, 并且注意到 $\alpha^{-2n}\leq m^{-2}$, 有
      \[
      \sum_{n:\alpha^n\geq m}[\alpha^n]^{-2}\leq 4\sum_{n:\alpha^n\geq m}\alpha^{-2n}=4\frac{\alpha^{-2n}}{1-\alpha^{-2}}\leq 4\frac{m^{-2}}{1-\alpha^{-2}}.
      \]
      结合上面的结论和引理 \ref{yl:1} 可以得到
      \[
      \sum_{n=1}^{\infty}\mathbf P(|T_{k(n)}-\mathbf E T_{k(n)}|>\text{Var}epsilon k(n))\leq 4(1-\alpha^{-2})^{-1}\text{Var}epsilon^{-2}\sum_{m=1}^{\infty}\mathbf E(Y_m^2)m^{-2}<\infty.
      \]
      因为 $\text{Var}epsilon$ 是任意的, $\frac{T_{k(n)}-\mathbf E T_{k(n)}}{k(n)}\xrightarrow{a.s.} 0$. 控制收敛定理表明 $\mathbf E Y_k\rightarrow\mathbf E X_1, k\rightarrow\infty$, 所以 $\frac{\mathbf E T_{k(n)}}{k(n)}\rightarrow\mathbf E X_1$. 我们已经证明了 $\frac{T_{k(n)}}{k(n)}\xrightarrow{a.s.}\mathbf E X_1$.

      接下来利用两个子列来控制中间值. 观察到, 若 $k(n)\leq m<k(n+1)$,
      \[
      \frac{T_{k(n)}}{k(n+1)}\leq\frac{T_m}{m}\leq\frac{T_{k(n+1)}}{k(n)}.
      \]
      (这里我们利用了 $Y_i\geq 0$), 又 $k(n)=[\alpha^n]$, 我们有 $k(n+1)/k(n)\rightarrow\alpha$ 且
      \[
      \frac{1}{\alpha}\mathbf E X_1\leq\liminf_{n\rightarrow\infty} T_m/m\leq\limsup_{m\rightarrow\infty}T_m/m\leq\alpha\mathbf E X_1.
      \]
      因为 $\alpha>1$ 是任意的, 所以强大数定律得证.
      \section{几个不同大数定律的区别与联系}\label{sec:jgbtdsdvdqb}
前文我们讨论了几种常见的大数定律. 其中定理 \ref{dl:prexinqin} 和定理 \ref{dl:qdsdl} 是最严格, 同样也是最精妙的结果. 它们成立的条件不仅仅是充分的, 也是必要条件. 这里我们不妨分别称它们为：“精确的弱大数定律”、“精确的强大数定律”.

表 \ref{jzbtdsdldb} 展示了几种不同的大数定律的区别与联系.

\begin{table}[h]
  \centering
  \noindent\makebox[\textwidth]{
  \begin{tabular}{ccccc}
    \hline
    & Chebyshev 大数定理 &  Khinchin 大数定理 & 精确的弱大数定理 & 精确的强大数定律 \\
    \hline
    本文中定理编号 & \ref{chebshev} & \ref{dl:xinqin} & \ref{dl:prexinqin} &\ref{dl:qdsdl}\\
    对于矩的要求& 二阶矩存在 & 一阶矩存在 & - & 一阶矩存在\\
    对序列的要求& 仅要求不相关 & i.i.d. & i.i.d.&i.i.d.\\
    其他条件 &- &- &$\mathop{\lim}\limits_{x\rightarrow\infty}x\mathbf P(|X_1|>x)=0$ &-\\
    收敛方式& $\xrightarrow\mathbf P$ & $\xrightarrow\mathbf P$ & $\xrightarrow\mathbf P$ & $\xrightarrow\as$\\
    \hline
  \end{tabular}}
  \caption{几种不同大数定律对比}\label{jzbtdsdldb}
\end{table}

   从 Chebyshev 大数定理到 Khinchin 大数定理, 将二阶矩有限的条件减弱为了一阶矩有限, 当然代价是要求序列为独立同分布.
   此时, 我们找到了一个和原序列“差不多”的截尾序列, 这个新序列的二阶矩虽然也未必是有限的, 但是通过原序列一阶矩有限的条件, 容易证明这个截尾后的序列和 $S_n’$ 满足 $S_n'/n$ 收敛(利用原序列一阶矩有限的条件). 最后, 正是独立同分布的性质, 保证了可以利用截尾后的序列来反映原序列的性质.

    Khinchin 大数定理与“精确的弱大数定理”的区别在于把一阶矩有限的条件换成了 $\xlim{x\rightarrow\infty}x\mathbf P(|X_1|>x)=0$. 这两个条件的共同点是：要求 “$|X_1|$ 很大”的概率要足够的小, 下面这个例子可以说明, 确实有随机变量序列, 满足“精确的弱大数定律”, 但其一阶矩不存在.

   \begin{example}\label{ex:rdsdlfl}
     令 $X_1,X_2,\cdots$ 是独立同分布序列, 且 $\mathbf P(X_i=(-1)^kk)=\frac{C}{k^2\log k}, k\geq 2$, 其中 $C$ 是一个常数令概率和为 1.

     根据引理 $\ref{yl:22}$ 的不等式, 分析可知
     \[
     \xlim{x\rightarrow\infty}x\mathbf P(|X_1|>x)=\xlim{n\rightarrow\infty}n\sum_{k=n}^\infty\frac{C}{k^2\log k}=0.
     \] 故 $\{X_k\}$ 满足“精确的弱大数定律”, 但是其一阶矩却不存在. 事实上, 广义积分
     \[
     \int_2^\infty\frac{dx}{x\log x}\xlongequal{t=\log x}\int_{\log 2}^{+\infty}\frac{dt}{t}
     \]
     发散, 故
     \[
     \mathbf E(|X_1|)=\sum_{k=2}^{\infty}\frac{C}{k\log k}=\infty.
     \]
   \end{example}