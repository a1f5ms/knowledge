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

