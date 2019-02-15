# 学习Chrome扩展及应用开发 #
**每个文件对应一个相应的插件**
### 已完成插件
+ clock-plugin
  > 显示本机当前时间插件
+ joke-plugin
  > 恶搞百度按钮，使用户无法点击
+ myIp-plugin
  > 显示本机ip地址
+ webState-plugin
  > 每隔3s发送网络请求，通过改变扩展图标颜色显示当前网络状态
  
  > 应用知识：
  
  >在Manifest中指定background域可以使扩展常驻后台。
  background可以包含三种属性，分别是scripts、page和persistent。
  如果指定了scripts属性，则Chrome会在扩展启动时自动创建一个包含所有指定脚本的页面；
  如果指定了page属性，则Chrome会将指定的HTML文件作为后台页面运行。
  通常我们只需要使用scripts属性即可，
  除非在后台页面中需要构建特殊的HTML——但一般情况下后台页面的HTML我们是看不到的。
  persistent属性定义了常驻后台的方式——当其值为true时，
  表示扩展将一直在后台运行，无论其是否正在工作；
  当其值为false时，表示扩展在后台按需运行，
  这就是Chrome后来提出的Event Page。Event Page可以有效减小扩展对内存的消耗，
  如非必要，请将persistent设置为false。persistent的默认值为true。
---
### 持续更新中。。。
