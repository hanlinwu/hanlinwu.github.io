---
layout: course
title: Python Programming
description: An introductory course on Python programming covering fundamental concepts, data structures, and practical applications.
instructor: Hanlin Wu
year: 2024
term: Fall
location: Beijing Foreign Studies University
time: TBD
course_id: python-programming
---

## Course Overview

This course provides a comprehensive introduction to Python programming. Students will learn fundamental programming concepts, data structures, and practical applications including data analysis and visualization.

## Topics Covered

- Python basics: variables, data types, control flow
- Functions and modules
- Data structures: lists, dictionaries, sets
- File I/O and exception handling
- Introduction to data analysis with pandas
- Data visualization

## Video Resources

Embedded video tutorials are available for each topic:

<iframe width="560" height="315" src="https://www.youtube.com/embed/D2vj0WcvH5c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Math Examples

Python is widely used for scientific computing. For example, the gradient descent update rule:

$$\gamma_{n} = \frac{ \left | \left (\mathbf x_{n} - \mathbf x_{n-1} \right )^T \left [\nabla F (\mathbf x_{n}) - \nabla F (\mathbf x_{n-1}) \right ] \right |}{\left \|\nabla F(\mathbf{x}_{n}) - \nabla F(\mathbf{x}_{n-1}) \right \|^2}$$

## Code Examples

```python
import pandas as pd
data = pd.read_csv("data.csv")
data.head()
```
