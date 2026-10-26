# `build/getRunningSubagent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/turn-builders/subagent-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/subagent-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781158-781158](../../../../../../../../reference/runtime/host-main.cjs#L781158-L781158) | `ArrowFunctionExpression` | no | `subagentAgentId` |
| [host:781164-781164](../../../../../../../../reference/runtime/host-main.cjs#L781164-L781164) | `ArrowFunctionExpression` | no | `subagentAgentId` |
| [evaluation:581505-581505](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581505-L581505) | `ArrowFunctionExpression` | no | `subagentAgentId` |
| [evaluation:581511-581511](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581511-L581511) | `ArrowFunctionExpression` | no | `subagentAgentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781158-781158](../../../../../../../../reference/runtime/host-main.cjs#L781158-L781158) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:781158 uses an implicit arrow-function return.
| [host:781164-781164](../../../../../../../../reference/runtime/host-main.cjs#L781164-L781164) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:781164 uses an implicit arrow-function return.
| [evaluation:581505-581505](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581505-L581505) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:581505 uses an implicit arrow-function return.
| [evaluation:581511-581511](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581511-L581511) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:581511 uses an implicit arrow-function return.

### host:781158

Calls written directly in this body: `detached.getRunning`.

SHA-256 of the source span: `452bc4026551300b5b6b9a483747f3f0bf381c952dc8e048a8cf5531c2f0f0e9`.

### host:781164

Calls written directly in this body: `host.getRunningSubagent`.

SHA-256 of the source span: `e84beaf46460979084bf1c1a69749367a2d9611be35662c02e36f48bc10b1971`.

### evaluation:581505

Calls written directly in this body: `detached.getRunning`.

SHA-256 of the source span: `452bc4026551300b5b6b9a483747f3f0bf381c952dc8e048a8cf5531c2f0f0e9`.

### evaluation:581511

Calls written directly in this body: `host.getRunningSubagent`.

SHA-256 of the source span: `e84beaf46460979084bf1c1a69749367a2d9611be35662c02e36f48bc10b1971`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
