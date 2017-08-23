# react-starter


## 概览

* 如需查看如何使用，请关注项目[cyd-view](https://github.com/zidoshare/cyd-view)开源前端项目

* 使用最新的react和webpack构建的脚手架


        npm install
        npm run start
        打开locahost:3000即可查看效果

* 生产环境使用命令
        npm run build

* 打包模块大小分析
        npm run analyz

## 特性

作为例子，内置antd以及ant motion。antd 已实现按需加载，大幅减少体积


内置.esformatter推荐安装esformatter进行代码格式化
内置eslint 推荐安装eslint进行代码审查
为了简单起见，暂不加入redux

样式支持css、scss、less，全部使用postcss进行了前缀处理，不用考虑浏览器兼容性
