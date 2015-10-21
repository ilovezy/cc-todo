## This is a cute cc todo

### 这是截图
![cc-todo-screenshot](http://www.icehota.com/wp-content/uploads/2015/10/cc-todo.png "cc-todo")

- based on angular js and materialize css
- using localStorage to save something
- thanks to this guy, great tuts 
- [https://www.youtube.com/watch?v=F4djYHbyin8&index=4&list=PLBTXLYhPD8MHGMW-ZEvdAtkxyAz-N8Toj](https://www.youtube.com/watch?v=F4djYHbyin8&index=4&list=PLBTXLYhPD8MHGMW-ZEvdAtkxyAz-N8Toj) 

## materialize css really bind to tight to forms

it has to be like this

    <input type="checkbox" ng-checked="{{item.done}}" id="{{item.todoNote}}" />
    <label for="{{item.todoNote}}" style="display: block;">{{item.todoNote}}</label>

this bind has to have a label[for="id"] and input[id="id"]
really not good

Perhaps look for another way to finish this??

## 两个文件

- test-todo.html是 bootstrap样式的简单版本
- index.html是materialize样式的很漂亮的版本
- 使用方法

打开控制台 `npm install` 之后 `bower install`
然后再浏览器打开就能看到效果了

## Todo
- 给 clean 和 confess按钮也添加 ng-disabled
- 把 ngAnimate 也引用进来做些个小动画
- 加入 localStorage 保存数据


## 测试一下 git

