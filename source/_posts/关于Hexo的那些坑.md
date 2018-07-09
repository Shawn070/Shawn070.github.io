---
title: 关于Hexo的那些坑
date: 2018-07-09 15:19:25
tags:
	 - 技术
---

资料网上也有许多，就整理一下关于搭建和遇到的一些问题。

关于hexo资料网上也有许多，就整理一下关于搭建和遇到的一些问题。

关于Hexo搭建问题：[传送门1](https://www.jianshu.com/p/189fd945f38f/ "搭建个人博客-hexo+github详细完整步骤")

于Hexo多端同步问题：[传送门2](https://www.jianshu.com/p/0b1fccce74e0/ "利用Hexo在多台电脑上提交和更新github pages博客")

关于域名绑定：[传送门3](https://www.jianshu.com/p/23b9e095c7c9/ "为你的hexo博客配置个性域名")

<!--more-->

------

###### 日常使用Hexo：

有图片上传时：

```bash
# 先将图片推到hexo分支
git add .
git commit -m "commit_content"
git push origin hexo
```

无图时：

```bash
hexo new "title"	# 然后进入\source\_posts找到相应的md文件编写
hexo clean			# 清除缓存，不能生成时一定要清除一下！
hexo g -d
```

