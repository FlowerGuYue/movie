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


    git lanuch hh
    git checkout hh
    git add .
    git commit -m 'sss'
    git checkout master
    git merge hh --no-ff 'wo'

    git push origin master
cnpm i -S better-scroll  安装滑动插件


解决搜索出发多次请求
 methods:{
        cancelRequest(){
            if(typeof this.source === 'function'){
                this.source('终止请求')
            }
        }
    },
    watch:{
        //watch里面的方法名与data内的值名一致
        message(newVal){
            //clearTimeOut  setTimeOut  abort  防止多次触发函数
                // var that=this;
            // console.log(newVal);
            this.cancelRequest();
            this.axios.get('/api/searchList?cityId=10&kw='+newVal,{
                 cancelToken: new this.axios.CancelToken((c)=> {
                    this.source = c;
                })
            
            }).then((res)=>{
                var msg=res.data.msg;
                var movies=res.data.data.movies;
                if(msg && movies){
                    this.moviesList=res.data.data.movies.list;
                }
            }).catch((err) => {
                if (this.axios.isCancel(err)) {
                    console.log('Rquest canceled', err.message); //请求如果被取消，这里是返回取消的message
                } else {
                    //handle error
                    console.log(err);
                }
            })
        }
    }