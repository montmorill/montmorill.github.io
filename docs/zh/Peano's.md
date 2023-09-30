<style scoped>
ol li {
  list-style: upper-roman;
}
</style>

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

### $m + 0 = m$ {#m+0=m}

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

### $1 + 1 = 2$ {#1+1=2}

$$
\begin{split}
  1 + 1 &= 0' + 1   \\
        &= (0 + 1)' \\
        &= 1'       \\
        &= 2
\end{split}
$$

即证。

### $m' = 1 + m$ {#m'=1+m}

$$
\begin{split}
  m' &= (0 + m)'  \\
     &= 0' + m    \\
     &= 1 + m     \\
\end{split}
$$

即证。

### $m' = m + 1$ {#m'=m+1}

当 $m = 0$ 时，有

$$
\begin{split}
  m' &= 0'    \\
     &= 1     \\
     &= 0 + 1 \\
     &= m + 1
\end{split}
$$

即 $P(0)$ 成立。

当 $P(m)$ 成立时，有

$$
\begin{split}
  m'' &= (m + 1)' \\
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
  a' + b &= (a + b)'    \\
         &= (b + a)'    \\
         &= b' + a      \\
         &= (b + 1) + a \\
         &= b + (1 + a) \\
         &= b + a'
\end{split}
$$

即 $P(a')$ 成立。

由归纳公理得 $P$ 对任意自然数都成立。

## 乘法的定义与应用

对于乘法，我们同样可以给出以下两条公理：

1. 对于任意自然数 $m$，有 $m \cdot 0 = 0$
2. 对于任意自然数 $m$、$n$，有 $m \cdot n' = m \cdot n + m$

于是我们便可以证明以下定理：

### $0 \cdot m = 0$ {#0\*m=0}

当 $m = 0$ 时，有

$$
\begin{split}
  0 \cdot m &= 0 \cdot 0  \\
            &= 0
\end{split}
$$

即 $P(0)$ 成立。

当 $P(m)$ 成立时，有

$$
\begin{split}
  0 \cdot m' &= 0 \cdot m + 0 \\
             &= 0 \cdot m     \\
             &= 0
\end{split}
$$

即 $P(b')$ 成立。

由归纳公理得 $P$ 对任意自然数都成立。

### $m' \cdot n = m \cdot n + n$ {#m'n=mn+n}

当 $n = 0$ 时，有

$$
\begin{split}
  m' \cdot n &= m' \cdot 0    \\
             &= 0             \\
             &= 0 + 0         \\
             &= m \cdot 0 + 0 \\
             &= m \cdot n + n \\
\end{split}
$$

即 $P(0)$ 成立。

当 $P(n)$ 成立时，有

$$
\begin{split}
  m' \cdot n' &= m' \cdot n + m'          \\
              &= m \cdot n + n + m'       \\
              &= m \cdot n + n + (m + 1)  \\
              &= m \cdot n + m + (n + 1)  \\
              &= m \cdot n' + n'
\end{split}
$$

即 $P(n')$ 成立。

由归纳公理得 $P$ 对任意自然数都成立。

### 乘法分配律

即对于任意自然数 $m$，命题 $P$：$k \cdot (m + n) = k \cdot m + k \cdot n$ 对于任意自然数 $n$，$k$ 均成立。

证明过程如下：

当 $m = 0$ 时，有

$$
\begin{split}
  k \cdot (m + n) &= k \cdot (0 + n)        \\
                  &= k \cdot n              \\
                  &= 0 + k \cdot n          \\
                  &= k \cdot 0 + k \cdot n  \\
                  &= k \cdot m + k \cdot n
\end{split}
$$

即 $P(0)$ 成立。

当 $P(m)$ 成立时，有

$$
\begin{split}
  k \cdot (m' + n) &= k \cdot (m + n)'          \\
                   &= k \cdot (m + n) + k       \\
                   &= k \cdot m + k \cdot n + k \\
                   &= k \cdot m + k + k \cdot n \\
                   &= k \cdot m' + k \cdot n
\end{split}
$$

即 $P(m')$ 成立。

由归纳公理得 $P$ 对任意自然数都成立。

### 乘法结合律

即对于任意自然数 $c$，命题 $P$：$(a \cdot b) \cdot c = a \cdot (b \cdot c)$ 对于任意自然数 $a$，$b$ 均成立。

证明过程如下：

当 $c = 0$ 时，有

$$
\begin{split}
  (a \cdot b) \cdot c &= (a \cdot b) \cdot 0  \\
                      &= 0                    \\
                      &= a \cdot 0            \\
                      &= a \cdot (b \cdot 0)  \\
                      &= a \cdot (b \cdot c)
\end{split}
$$

即 $P(0)$ 成立。

当 $P(c)$ 成立时，有

$$
\begin{split}
  (a \cdot b) \cdot c' &= (a \cdot b) \cdot c + (a \cdot b) \\
                       &= a \cdot (b \cdot c) + a \cdot b   \\
                       &= a \cdot (b \cdot c + b)           \\
                       &= a \cdot (b \cdot c')
\end{split}
$$

即 $P(c')$ 成立。

由归纳公理得 $P$ 对任意自然数都成立。

### 乘法交换律

即对于任意自然数 $b$，命题 $P$：$a \cdot b = b \cdot a$ 对于任意自然数 $a$ 均成立。

证明过程如下：

当 $b = 0$ 时，有

$$
\begin{split}
  a \cdot b &= a \cdot 0  \\
            &= 0          \\
            &= 0 \cdot a  \\
            &= b \cdot a
\end{split}
$$

即 $P(0)$ 成立。

当 $P(b)$ 成立时，有

$$
\begin{split}
  a \cdot b' &= a \cdot b + a \\
             &= b \cdot a + a \\
             &= b' \cdot a
\end{split}
$$

即 $P(b')$ 成立。

由归纳公理得 $P$ 对任意自然数都成立。
