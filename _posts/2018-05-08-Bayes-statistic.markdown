---
title: "Bayes 估计,Bayes 公式的密度函数形式"
tags:
 - 统计学
key : bayes-and-bayes-formulation
---
Bayes 统计的基本观点是: **将参数 $$\theta$$ 看做随机变量.** 既然 $$\theta$$ 是随机变量, 就可以使用一个概率分布来描述, 我们称这个分布为**先验分布**.

## Bayes 公式的概率密度函数形式

首先说明记号. 记 $$p(x;\theta)$$ 为总体的密度函数, 依赖于参数 $$\theta$$. 用 $$p(x\mid\theta)$$ 表示随机变量 $$\theta$$ 给定某个值时, 总体的**条件概率密度函数**. 记 $$\pi(\theta)$$ 为参数 $$\theta$$ 的密度函数.

设 $$\mathbf X=(x_1,x_2,\cdots,x_n)$$ 为一组样本. 在给定参数 $$\theta=\theta_0$$ 时, 样本的**联合条件概率密度函数**为

$$p(\mathbf X\mid\theta_0)=p(x_1,x_2,\cdots,x_n\mid\theta_0)=\prod_{i=1}^np(x_i\mid\theta_0).$$

由于 $$\theta_0$$ 的值不能随意给定, 要根据先验分布来产生, 所以应考虑样本 $$\mathbf X$$ 和参数 $$\theta$$ 的**联合分布**

$$h(\mathbf X,\theta)=p(\mathbf X\mid\theta)\pi(\theta).$$

下面将 $$h(\mathbf X,\theta)$$ 作如下分解:

$$h(\mathbf X,\theta)=\pi(\theta\mid \mathbf X)m(\mathbf X),$$

其中, $$m(\mathbf X)$$ 是 $$\mathbf X$$ 的边际密度函数,

$$m(\mathbf X)=\int h(\mathbf X,\theta)\text{d}\theta=\int p(\mathbf X\mid\theta)\pi(\theta)\text{d}\theta.$$

注意, 上式与 $$\theta$$ 无关, 直观地说, $$m(\mathbf X)$$ 不含有任何关于 $$\theta$$ 的信息. 于是我们可以计算给定样本 $$\mathbf X$$ 时, $$\theta$$ 的条件概率密度函数 $$\pi(\theta\mid\mathbf X)$$.

$$\pi(\theta\mid\mathbf X)=\frac{h(\mathbf X,\theta)}{m(\mathbf X)}=\frac{p(\mathbf X\mid\theta)\pi(\theta)}{\int p(\mathbf X\mid\theta)\pi(\theta)\text{d}\theta}.$$

我们称上面这个分布为 $$\theta$$ 的**后验分布**. (**注意**, 此处虽然叫“分布”, 但实际其为概率密度函数. 除明确表述"分布函数"外, 其他情形需要根据上下文来判断.)

## 补充说明
① 若随机变量 $$X$$ 的密度函数 $$f(x)$$, $$f(x_0)$$ 代表的含义为 $$X$$ 取值落在 $$x_0$$ 的一个小邻域内的概率.

② $$h(\mathbf X,\theta)$$ 与 $$p(\mathbf X\mid\theta)$$ 虽然都是关于 $$\mathbf X$$ 和 $$\theta$$ 的二元函数, 但是它们截然不同的. 前者为联合概率密度函数, 而后者为条件概率密度函数. 根据条件概率密度函数的定义, 有

$$p(\mathbf X\mid\theta)=\frac{h(\mathbf X,\theta)}{\pi(\theta)}.$$

其含义, 类似于事件的条件概率公式:

$$\mathbb P(A\mid B)=\frac{\mathbb P(A\cap B)}{\mathbb P(B)}.$$
