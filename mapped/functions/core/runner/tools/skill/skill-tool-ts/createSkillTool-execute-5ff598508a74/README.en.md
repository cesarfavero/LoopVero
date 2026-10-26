# `createSkillTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/tools/skill/skill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566095-566095](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L566095-L566095) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:566102-566102](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L566102-L566102) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566095-566095](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L566095-L566095) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:566095 uses an implicit arrow-function return.
| [evaluation:566102-566102](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L566102-L566102) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:566102 uses an implicit arrow-function return.

### evaluation:566095

Calls written directly in this body: `loadSkill`.

SHA-256 of the source span: `b921fe321f8d361cbc9c4b4337cc086c3384a39650e5e653701792bd839b05d3`.

### evaluation:566102

Calls written directly in this body: `loadOrSearchSkill`.

SHA-256 of the source span: `7f816cf681d2a966a0efb607bcc77e9d340ab8c5d9274d0b5527e3b1f100b29e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
