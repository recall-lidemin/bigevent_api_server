## 说明

它是大事件项目的接口服务器。目前数据持久化是直接读取本地JSON文件，后续会改用MySql数据库，目前正在根据json文件建库

具体接口说明：

调整完成后会上线云服务器

大事件项目的前端在线预览地址：后续部署后更新

## 安装依赖（本地启动服务按一下操作执行）

切换到根目录下:

运行命令：`npm i`

如果安装速度很慢，可以修改npm镜像

```bash
# 先运行
npm config set registry http://registry.npm.taobao.org/
# 再运行
npm i
```

安装成功之后，才能进行后续操作。

## 启动

方式一： 如果是window操作，直接双击`开始.bat` 即可。

方式二：命令行

- `node app.js` 正常启动后端
- `node app.js token` 接口带token 校验



>  会占用8000 端口
