# `build/sendToAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/conversation-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769159-769165](../../../../../../../../reference/runtime/host-main.cjs#L769159-L769165) | `ArrowFunctionExpression` | no | `toAgentId, text3, images, priority, options2` |
| [evaluation:564806-564812](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564806-L564812) | `ArrowFunctionExpression` | no | `toAgentId, text3, images, priority, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769159-769165](../../../../../../../../reference/runtime/host-main.cjs#L769159-L769165) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:769159 uses an implicit arrow-function return.
| [evaluation:564806-564812](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564806-L564812) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:564806 uses an implicit arrow-function return.

### host:769159

Calls written directly in this body: `sendToAgent`.

SHA-256 of the source span: `95a767145285ecfb3139980d657a50c17ff731310345e8f33cb7e6dfeca1f793`.

### evaluation:564806

Calls written directly in this body: `sendToAgent`.

SHA-256 of the source span: `95a767145285ecfb3139980d657a50c17ff731310345e8f33cb7e6dfeca1f793`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
