# 网站部署说明

本项目是一个静态导出的 Next.js 网站，当前部署目标是 GitHub Pages。

## 1. 当前本地预览

当前本地静态预览地址：

```text
http://localhost:3002/
```

常用本地检查命令：

```powershell
npm run lint
npx tsc --noEmit
npm run build
```

构建成功后，静态文件会输出到：

```text
out/
```

## 2. GitHub Pages 部署方式

项目中已经准备好 GitHub Actions 自动部署配置：

```text
.github/workflows/deploy.yml
```

后续只要代码推送到 `main` 分支，GitHub Actions 就会自动构建并部署到 GitHub Pages。

## 3. 部署前需要客户提供的信息

客户需要提供：

- GitHub 账号名或组织名
- 想使用的仓库名称
- 是否需要我帮忙创建仓库
- 是否可以给我仓库访问权限
- 是否确认使用 GitHub Pages 作为托管方式
- 是否需要绑定自定义域名

如果客户目前还没有 GitHub 仓库，可以先继续使用本地预览确认网站内容，等客户提供 GitHub 账号后再部署上线。

## 4. 如果部署为项目页面

示例：

```text
GitHub 仓库：https://github.com/client-name/site-repo
访问地址：https://client-name.github.io/site-repo/
```

这种情况下，网站会部署在仓库路径下。

项目中的部署脚本会自动设置：

```text
NEXT_PUBLIC_BASE_PATH=/site-repo
```

这样可以保证图片、脚本和样式文件在 GitHub Pages 上正常加载。

## 5. 如果部署为用户主页

示例：

```text
GitHub 仓库：https://github.com/client-name/client-name.github.io
访问地址：https://client-name.github.io/
```

这种情况下，网站会部署在根路径下。

部署脚本会自动使用空的 base path，不需要额外修改资源路径。

## 6. GitHub Pages 设置步骤

代码推送到 GitHub 后：

1. 打开 GitHub 仓库。
2. 进入 `Settings`。
3. 进入 `Pages`。
4. 在 `Build and deployment` 中选择 `GitHub Actions`。
5. 推送代码到 `main` 分支，或者在 `Actions` 页面手动运行部署 workflow。

部署完成后，GitHub 会提供一个 Pages 访问地址。

## 7. 上线后检查清单

部署完成后需要检查：

- 首页主视觉是否正常显示
- 顶部按钮是否能正确跳转到对应区域
- Links 区域的账号链接是否正确
- Commission 作品分类是否能正常切换
- 点击作品卡片后，详情弹窗是否能打开
- PC 端布局是否正常
- 手机端布局是否正常
- 图片是否清晰且没有异常裁切
- 英文文案是否已经最终确认

## 8. 客户还没给 GitHub 时的处理方式

如果客户暂时没有提供 GitHub 账号或仓库，可以先使用本地静态预览：

```powershell
npm run build
python -m http.server 3002 --bind 127.0.0.1 -d out
```

然后打开：

```text
http://localhost:3002/
```

也可以先给客户发送截图或录屏，让客户确认页面方向和交互。

## 9. 自定义域名

如果客户需要绑定自己的域名，需要客户提供：

- 域名
- 域名服务商
- 是否可以修改 DNS 记录

建议先完成 GitHub Pages 部署，确认网站能正常访问后，再配置自定义域名。

## 10. 注意事项

- 不建议在客户没有提供最终图片和真实链接前做最终上线。
- 如果替换了作品图片，需要重新检查 PC 和手机端展示效果。
- 如果新增作品分类，只需要在 `data/site.ts` 里填写对应 category，页面会自动显示分类。
- 如果绑定自定义域名，需要额外检查 HTTPS 是否正常。
