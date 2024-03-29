# submarine-admin-frontend


## 快速开始

```bash
# 克隆项目
git clone https://github.com/GoldSubmarine/submarine-admin-frontend.git

# 进入项目目录
cd submarine-admin-frontend

# 建议使用 yarn 安装，不要使用 cnpm 或 npm ，会有各种诡异的 bug。可以通过如下操作解决下载速度慢的问题
yarn config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/ ;
yarn config set electron_mirror https://npm.taobao.org/mirrors/electron/ ;
yarn config set registry https://registry.npm.taobao.org ;
yarn config set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs/;

# 安装依赖
yarn install

# 启动服务
yarn dev
```

浏览器访问 [http://localhost:9528](http://localhost:9528)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

## 动态表单

封装了 Element UI ，将表单抽象成 json 快速开发页面，极大的提高了效率

## 代码生成

使用 [xcrud-generator](https://github.com/GoldSubmarine/xcrud-generator) 无侵入的生成增删改查

## 功能

- 权限管理
- 机构管理
- 角色管理
- 用户管理
- 字典管理
- 存储管理
- 定时任务
- SQL监控

## 前端预览

<table>
    <tr>
        <td><img src="https://raw.githubusercontent.com/GoldSubmarine/submarine-admin-frontend/master/doc/images/permission.png"/></td>
        <td><img src="https://raw.githubusercontent.com/GoldSubmarine/submarine-admin-frontend/master/doc/images/dept.png"/></td>
    </tr>
    <tr>
        <td><img src="https://raw.githubusercontent.com/GoldSubmarine/submarine-admin-frontend/master/doc/images/role.png"/></td>
        <td><img src="https://raw.githubusercontent.com/GoldSubmarine/submarine-admin-frontend/master/doc/images/user.png"/></td>
    </tr>
    <tr>
        <td><img src="https://raw.githubusercontent.com/GoldSubmarine/submarine-admin-frontend/master/doc/images/dictionary.png"/></td>
        <td><img src="https://raw.githubusercontent.com/GoldSubmarine/submarine-admin-frontend/master/doc/images/fileStore.png"/></td>
    </tr>
    <tr>   
        <td><img src="https://raw.githubusercontent.com/GoldSubmarine/submarine-admin-frontend/master/doc/images/schedule.png"/></td>
        <td><img src="https://raw.githubusercontent.com/GoldSubmarine/submarine-admin-frontend/master/doc/images/monitorSql.png"/></td>
    </tr>
    <tr>
        <td><img src="https://raw.githubusercontent.com/GoldSubmarine/submarine-admin-frontend/master/doc/images/personal.png"/></td>
    </tr>
</table>

## 浏览器支持

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions
