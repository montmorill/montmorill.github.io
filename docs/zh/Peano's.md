# 皮亚诺公理

首先我们给出五条公理来定义自然数：

1. $0$ 是**自然数**，
2. 对于任意自然数 $a$ 都有一个唯一对应的**后继** $a'$，
3. $0$ 不是任意自然数的后继，
4. 相同自然数的后继相同，不同自然数的后继不同，
5. 如果一个命题 $P$ 对自然数 $0$ 成立，并且当 $P(n)$ 成立时，$P(n')$ 也成立，那么 $P$ 对任意自然数都成立。（称为**归纳公理**）

> 在以下的章节里，我们认为 $1$ 与 $0'$ 是等价的，$2$ 与 $0''$ 是等价的，以此类推。

## 加法的定义与应用

对于加法，我们给出以下两条公理：

1. 对于任意自然数 $m$，有 $0 + m = m$
2. 对于任意自然数 $m$、$n$，有 $m' + n = (m + n)'$

于是我们便可以证明以下定理：

### m + 0 = m

当 $m = 0$ 时，有

$$
\begin{split}
  m + 0 &= 0 + 0  \\
        &= 0      \\
        &= m
\end{split}
$$

即 $P(0)$ 成立。

当 $P(m)$ 成立时，有

$$
\begin{split}
  m' + 0 &= (m + 0)'  \\
         &= m'
\end{split}
$$

即 $P(m')$ 成立。

由归纳公理得 $P$ 对任意自然数都成立。

### 1 + 1 = 2

$$
\begin{split}
  1 + 1 &= 0' + 1    \\
        &= (0 + 1)'  \\
        &= 1'        \\
        &= 2
\end{split}
$$

即证。

### m' = 1 + m

$$
\begin{split}
  m' &= (0 + m)'  \\
     &= 0' + m    \\
     &= 1 + m     \\
\end{split}
$$

即证。

### m' = m + 1

当 $m = 0$ 时，有

$$
\begin{split}
  m' &= 0'     \\
     &= 1      \\
     &= 0 + 1  \\
     &= m + 1
\end{split}
$$

即 $P(0)$ 成立。

当 $P(m)$ 成立时，有

$$
\begin{split}
  m'' &= (m + 1)'  \\
      &= m' + 1
\end{split}
$$

即 $P(m')$ 成立。

由归纳公理得 $P$ 对任意自然数都成立。

### 加法结合律

即对于任意自然数 $a$，命题 $P$：$(a + b) + c = a + (b + c)$ 对于任意自然数 $b$，$c$ 均成立。

证明过程如下：

当 $a = 0$ 时，有

$$
\begin{split}
  (a + b) + c &= (0 + b) + c  \\
              &= b + c        \\
              &= 0 + (b + c)  \\
              &= a + (b + c)
\end{split}
$$

即 $P(0)$ 成立。

当 $P(a)$ 成立时，有

$$
\begin{split}
  (a' + b) + c &= (a + b)' + c    \\
               &= ((a + b) + c)'  \\
               &= (a + (b + c))'  \\
               &= a' + (b + c)
\end{split}
$$

即 $P(a')$ 成立。

由归纳公理得 $P$ 对任意自然数都成立。

### 加法交换律

即对于任意自然数 $a$，命题 $P$：$a + b = b + a$ 对于任意自然数 $b$ 均成立。

证明过程如下：

当 $a = 0$ 时，有

$$
\begin{split}
  a + b &= 0 + b  \\
        &= b + 0  \\
        &= b + a
\end{split}
$$

即 $P(0)$ 成立。

当 $P(a)$ 成立时，有

$$
\begin{split}
  a' + b &= (a + b)'     \\
         &= (b + a)'     \\
         &= b' + a       \\
         &= (b + 1) + a  \\
         &= b + (1 + a)  \\
         &= b + a'
\end{split}
$$

即 $P(a')$ 成立。

由归纳公理得 $P$ 对任意自然数都成立。

## 乘法的定义与应用

对于乘法，我们同样可以给出以下两条公理：

1. 对于任意自然数 $m$，有 $m \times 0 = 0$
2. 对于任意自然数 $m$、$n$，有 $m \times n' = m \times n + m$

于是我们便可以证明以下定理：

### 0 × m = 0

当 $m = 0$ 时，有

$$
\begin{split}
  0 \times m &= 0 \times 0  \\
            &= 0
\end{split}
$$

即 $P(0)$ 成立。

当 $P(m)$ 成立时，有

$$
\begin{split}
  0 \times m' &= 0 \times m + 0  \\
             &= 0 \times m       \\
             &= 0
\end{split}
$$

即 $P(b')$ 成立。

由归纳公理得 $P$ 对任意自然数都成立。

### m' × n = m × n + n

当 $n = 0$ 时，有

$$
\begin{split}
  m' \times n &= m' \times 0    \\
             &= 0               \\
             &= 0 + 0           \\
             &= m \times 0 + 0  \\
             &= m \times n + n  \\
\end{split}
$$

即 $P(0)$ 成立。

当 $P(n)$ 成立时，有

$$
\begin{split}
  m' \times n' &= m' \times n + m'         \\
              &= m \times n + n + m'       \\
              &= m \times n + n + (m + 1)  \\
              &= m \times n + m + (n + 1)  \\
              &= m \times n' + n'
\end{split}
$$

即 $P(n')$ 成立。

由归纳公理得 $P$ 对任意自然数都成立。

### 乘法分配律

即对于任意自然数 $m$，命题 $P$：$k \times (m + n) = k \times m + k \times n$ 对于任意自然数 $n$，$k$ 均成立。

证明过程如下：

当 $m = 0$ 时，有

$$
\begin{split}
  k \times (m + n) &= k \times (0 + n)        \\
                  &= k \times n               \\
                  &= 0 + k \times n           \\
                  &= k \times 0 + k \times n  \\
                  &= k \times m + k \times n
\end{split}
$$

即 $P(0)$ 成立。

当 $P(m)$ 成立时，有

$$
\begin{split}
  k \times (m' + n) &= k \times (m + n)'           \\
                   &= k \times (m + n) + k         \\
                   &= k \times m + k \times n + k  \\
                   &= k \times m + k + k \times n  \\
                   &= k \times m' + k \times n
\end{split}
$$

即 $P(m')$ 成立。

由归纳公理得 $P$ 对任意自然数都成立。

### 乘法结合律

即对于任意自然数 $c$，命题 $P$：$(a \times b) \times c = a \times (b \times c)$ 对于任意自然数 $a$，$b$ 均成立。

证明过程如下：

当 $c = 0$ 时，有

$$
\begin{split}
  (a \times b) \times c &= (a \times b) \times 0  \\
                      &= 0                        \\
                      &= a \times 0               \\
                      &= a \times (b \times 0)    \\
                      &= a \times (b \times c)
\end{split}
$$

即 $P(0)$ 成立。

当 $P(c)$ 成立时，有

$$
\begin{split}
  (a \times b) \times c' &= (a \times b) \times c + (a \times b)  \\
                       &= a \times (b \times c) + a \times b      \\
                       &= a \times (b \times c + b)               \\
                       &= a \times (b \times c')
\end{split}
$$

即 $P(c')$ 成立。

由归纳公理得 $P$ 对任意自然数都成立。

### 乘法交换律

即对于任意自然数 $b$，命题 $P$：$a \times b = b \times a$ 对于任意自然数 $a$ 均成立。

证明过程如下：

当 $b = 0$ 时，有

$$
\begin{split}
  a \times b &= a \times 0  \\
            &= 0            \\
            &= 0 \times a   \\
            &= b \times a
\end{split}
$$

即 $P(0)$ 成立。

当 $P(b)$ 成立时，有

$$
\begin{split}
  a \times b' &= a \times b + a  \\
             &= b \times a + a   \\
             &= b' \times a
\end{split}
$$

即 $P(b')$ 成立。

由归纳公理得 $P$ 对任意自然数都成立。
