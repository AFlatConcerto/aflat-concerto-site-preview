# Gallery 高清素材规范

## 目标
- 列表卡片优先加载 `thumbnail`
- 弹窗查看时加载 `fullImage`
- 不改组件结构，只维护 `data/site.ts` 和素材文件

## 当前素材尺寸
建议高清图按长边约 `2800px` 导出，色彩空间使用 `sRGB`。

| 文件 | 当前缩略图尺寸 | 建议高清图尺寸 |
|---|---:|---:|
| `work-1` | 1040x970 | 2800x2612 |
| `work-2` | 830x860 | 2702x2800 |
| `work-3` | 690x780 | 2477x2800 |
| `work-4` | 1310x1600 | 2292x2800 |

## 导出建议
- 格式：`WebP` 优先，备选 `PNG`
- 色彩空间：`sRGB`
- WebP 质量：`85-92`
- 不要从聊天软件或社交平台二次保存图片
- 不要把缩略图再次放大后当作高清图使用

## 目录约定
- 列表缩略图：`public/assets/gallery/work-*.png`
- 弹窗高清图：`public/assets/gallery/full/work-*.webp`

## 数据文件写法
编辑文件：`data/site.ts`

每条作品记录至少维护这些字段：
- `thumbnail`：列表缩略图
- `fullImage`：弹窗高清图
- `width` / `height`：`fullImage` 的真实像素尺寸

示例：

```ts
{
  id: "g-001",
  title: "Moon Tank",
  thumbnail: "/assets/gallery/work-1.png",
  fullImage: "/assets/gallery/full/work-1.webp",
  width: 2800,
  height: 2612,
  ...
}
```

## 后续新增作品流程
1. 把缩略图放到 `public/assets/gallery/`
2. 把高清图放到 `public/assets/gallery/full/`
3. 在 `data/site.ts` 的 `gallery` 数组中新增或修改一条记录
4. 补全 `thumbnail`、`fullImage`、`width`、`height`、标题、作者、时间、描述等字段
5. 提交后重新构建静态站点
