##### 1、SSL

报错：

```js
OpenSSL SSL_read: Connection was reset, errno 10054
```

解决：

```js
// 解除SSL认证
git config --global http.sslVerify "false"
```

##### 2、Timed out

报错：

```
Failed to connect to github.com port 443: Timed out
```

解决：

```js
// 代理出了问题
git config --global --unset http.proxy
git config --global --unset https.proxy
```

