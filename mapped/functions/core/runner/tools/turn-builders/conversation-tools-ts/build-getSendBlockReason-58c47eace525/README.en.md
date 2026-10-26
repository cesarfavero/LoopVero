# `build/getSendBlockReason`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/conversation-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769077-769077](../../../../../../../../reference/runtime/host-main.cjs#L769077-L769077) | `ArrowFunctionExpression` | no | `message, deliverTo` |
| [evaluation:564724-564724](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564724-L564724) | `ArrowFunctionExpression` | no | `message, deliverTo` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769077-769077](../../../../../../../../reference/runtime/host-main.cjs#L769077-L769077) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:769077 uses an implicit arrow-function return.
| [evaluation:564724-564724](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564724-L564724) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:564724 uses an implicit arrow-function return.

### host:769077

Calls written directly in this body: `host.transport.sendMessageBlockReason`.

SHA-256 of the source span: `c640435305ec5f918a68216ede84eae0d2b6f4c8759694e5e5aa6ae650c30e04`.

### evaluation:564724

Calls written directly in this body: `host.transport.sendMessageBlockReason`.

SHA-256 of the source span: `c640435305ec5f918a68216ede84eae0d2b6f4c8759694e5e5aa6ae650c30e04`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
