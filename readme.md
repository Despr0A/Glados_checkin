# Checkin

GitHub Actions 实现 [GLaDOS][glados] 自动签到


## 使用说明

1. Fork 这个仓库

1. 登录 [GLaDOS][glados] 获取 Cookie

1. 添加 Cookie 到 Secret `GLADOS`

1. 启用 Actions, 每天北京时间 00:10 自动签到

### GitHub Actions 初始化

1. 在仓库的 `Settings -> Secrets and variables -> Actions` 中创建仓库 Secret `GLADOS`，值为登录 GLaDOS 后浏览器 Cookie 中的完整内容。
1. 如果有多个帐号，将每个 Cookie 放在 `GLADOS` 的独立一行。
1. 打开 `Actions` 页面，选择 `run` 工作流并点击 `Enable workflow`（如果 GitHub 显示该按钮）。
1. 在 `Actions -> run -> Run workflow` 手动执行一次，查看日志中的 `Checkin OK`、接口消息和剩余天数。
1. `NOTIFY` 可选。不配置时，工作流会自动使用控制台输出；如需推送通知，再按下方格式创建该 Secret。
1. `DOMAIN` 可选，默认值为 `glados.cloud`；使用其他站点时创建该 Secret 并填写域名，例如 `railgun.info`。

工作流中的定时任务使用 UTC。当前 `cron: 10 16 * * *` 对应北京时间每天 00:10。首次配置建议先手动运行，确认签到成功后再等待定时任务。

## 高级功能

1. 如有多个帐号, 可以写为多行 Secret `GLADOS`, 每行写一个 Cookie

1. 如需修改时间, 可以修改文件 [run.yml](.github/workflows/run.yml#L7) 中的 `cron` 参数, 格式可参考 [crontab]

1. 如需其他域名, 可配置 Secret `DOMAIN`, 可填写: `railgun.info`

1. 如需推送通知, 可配置 Secret `NOTIFY`, 已支持:
    1. [WxPusher][wxpusher]: 格式 `wxpusher:{token}:{uid}`
    1. [PushPlus][pushplus]: 格式 `pushplus:{token}`
    1. [Bark][finbbark]: 格式 `bark:{key}`
    1. [企业微信][qyweixin]: 格式 `qyweixin:{key}`
    1. Console: 格式 `console:log`, 作为日志输出, 一般用于调试
    1. 如需配置多个, 可以写为多行, 每行写一个

1. 注意: Cookie 以及接口输出数据, 包含帐号敏感信息, 因此不要随意公开

---

[glados]: https://github.com/glados-network/GLaDOS
[crontab]: https://crontab.guru/
[pushplus]: https://www.pushplus.plus/
[wxpusher]: https://wxpusher.zjiecode.com/
[finbbark]: https://github.com/Finb/Bark
[qyweixin]: https://developer.work.weixin.qq.com/document/path/91770
