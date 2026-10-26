# `build/sendBlockReason`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/conversation-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769288-769288](../../../../../../../../reference/runtime/host-main.cjs#L769288-L769288) | `ArrowFunctionExpression` | no | `message` |
| [evaluation:564935-564935](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564935-L564935) | `ArrowFunctionExpression` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769288-769288](../../../../../../../../reference/runtime/host-main.cjs#L769288-L769288) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:769288 uses an implicit arrow-function return.
| [evaluation:564935-564935](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564935-L564935) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:564935 uses an implicit arrow-function return.

### host:769288

Calls written directly in this body: `host.transport.sendMessageBlockReason`.

SHA-256 of the source span: `4c2e725b2ae26afb69206bdcc1c094d6777c2e9c8d2ed577ab2e15e7f71e9531`.

### evaluation:564935

Calls written directly in this body: `host.transport.sendMessageBlockReason`.

SHA-256 of the source span: `4c2e725b2ae26afb69206bdcc1c094d6777c2e9c8d2ed577ab2e15e7f71e9531`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
