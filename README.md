# movie

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



assets中的静态资源最终会编码成base64  一般放些小图标

cnpm install node-sass --save-dev //安装node-sass 
cnpm install sass-loader --save-dev //安装sass-loader 
cnpm install style-loader --save-dev //安装style-loader 有些人安装的是 vue-style-loader 其实是一样的！

这个时候你打开build文件夹下面的webpack.base.config.js
把里面的module改成这样的
{ 
    test: /\.scss$/,
    loaders: ["style", "css", "sass"]
} 

创建一个管理状态文件  store

二级路由一定要注意
  {path: '/movie',component: Movie,children:[
      {path: 'city',component:City},
      {path: 'hotplay',component:HotPlay},
      {path: 'willplay',component:WillPlay},
      {path: 'search',component:Search}
    ]}