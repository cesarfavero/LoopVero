# LoopVero · Inside the Harness

[English](README.md) · [Português (Brasil)](README.pt-BR.md) · [Español](README.es.md) · [简体中文](README.zh-CN.md)

**你知道那个被人称为“世界上最好的”机器人吗？试想一下，如果你能沿着代码，看清答案背后的运作机制。**

LoopVero 研究智能体 harness（运行框架），并将分析直接关联到源代码：工具、记忆、检查点、子智能体，以及现有材料中可见的主动工作机制。查阅参考文件，探索函数索引，了解证据能够支持什么，以及它的边界在哪里。

**1,070 个原始文件 · 19,741 次具名函数出现 · 14,935 份函数参考文档。**

参考文件是一切结论的依据：指南解释这些文件实现了什么，函数文档梳理其中的函数，每项结论都指向支撑它的代码。

这是对现有产物的静态分析，不是可安装的智能体，也不声称完整描述了生产系统。

重建的应用程序、前端及其测试已移除。目录结构使用独立的英文名称，不提供获取这些文件或复现提取过程的说明。

## 从这里开始

1. [完整指南](guide/README.md)：阅读路线、职责与接口约定。
2. [端到端架构](guide/architecture/README.md)：宿主、网关、远程执行、评估执行器与持久化。
3. [主动性机制](guide/components/proactivity/README.md)：触发、自动化、静默执行器、WakeParent 与证据边界。
4. [已验证的结论](guide/findings/README.md)：改变我们对 harness 理解的发现。
5. [完整模块与函数索引](mapped/README.md)：为每个已编目的具名函数提供一份 README 文档。

## 目录结构

| 目录 | 内容 | 用途 |
| --- | --- | --- |
| [reference](reference/README.md) | 保留原始字节、仅重新组织目录的原始文件 | 一手证据 |
| [guide](guide/README.md) | 人工编写的说明、决策、流程、算法与图表 | 理解行为 |
| [mapped](mapped/README.md) | 模块与函数 README、参数、调用及位置 | 查阅实现 |
| [tools/research](tools/research/README.md) | AST 索引、生成与静态验证 | 根据已存在的参考文件重新生成索引 |

## 三项核心结论

**宿主在此入口不提供可运行的本地 BOX 循环。** 当 prompt 为空且没有附件时，`SendPipeline.sendPrompt` 直接返回，不执行任何工作；有效输入则会进入 BOX 拒绝路径，其中的 `refuseBoxTurn` 会抛出 `SandBoxHarnessRetiredError`。对于标记为 `temporal` 的智能体，网关通过代理处理远程操作与交互记录。这些结论已经过代码验证，并非根据类名推测。[网关](guide/components/gateway/README.md)、[轮次](guide/components/turns/README.md)。

**评估执行器包含循环的具体实现。** 其执行路径串联会话创建、工具组合、流式传输、检查点、子智能体与结束流程。我们可以研究该产物中实际存在的行为，但这并不能证明生产环境使用完全相同的配置。[推理](guide/components/inference/README.md)。

**主动性机制由一系列相互衔接的职责构成。** 参考文件中存在自动化、静默执行以及与父智能体通信的具体代码。但在现有参考文件中，尚未找到自主行动机会的初始筛选机制及完整的远程调度实现。不能将 `WakeParent` 等同于决定是否调查某个机会的算法。[主动性机制](guide/components/proactivity/README.md)。

## 覆盖范围与严谨性

- 1,070 个原始文件保留了相同的 Git blob SHA-1。仅重新组织了目录，并移除了 Finder 元数据和一个空标记文件。
- 通过 AST 分析了 3 个核心 bundle，选取了 1,466 个模块。
- 共记录 19,741 次具名函数出现，归并为 14,935 份 README 文档。包括方法和具名闭包；匿名回调不单独生成文档。
- 功能指南是人工分析的结果。自动生成的文档记录语法层面的事实，不声称已完成全面的语义验证，也不声称已在生产环境执行。
- 该快照关联提交 `655acca99bff0d17466547611108f94ed6a8a5e7`。原始构建标记包含 `fcbae14`；没有据此推定产品版本号。

参见[方法与局限](guide/methodology/README.md)和[覆盖范围](guide/coverage/README.md)。内部符号名称保持原样，以便准确追溯原始代码。

## 验证本研究

```bash
npm ci --prefix tools/research --ignore-scripts
node --expose-gc --max-old-space-size=4096 tools/research/index-harness.cjs
python3 tools/research/render-catalog.py
python3 tools/research/verify-reference.py
```

这些命令读取并分析文件，不启动宿主、不打开推理会话，也不执行原始 bundle。
