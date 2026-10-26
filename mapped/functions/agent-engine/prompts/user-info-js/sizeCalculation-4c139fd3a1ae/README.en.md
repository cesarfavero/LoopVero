# `sizeCalculation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640625-640625](../../../../../../reference/runtime/host-main.cjs#L640625-L640625) | `ArrowFunctionExpression` | no | `_value, content` |
| [evaluation:431239-431239](../../../../../../reference/runtime/sand-eval-runner.cjs#L431239-L431239) | `ArrowFunctionExpression` | no | `_value, content` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640625-640625](../../../../../../reference/runtime/host-main.cjs#L640625-L640625) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:640625 uses an implicit arrow-function return.
| [evaluation:431239-431239](../../../../../../reference/runtime/sand-eval-runner.cjs#L431239-L431239) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:431239 uses an implicit arrow-function return.

### host:640625

Calls written directly in this body: `Math.max`.

SHA-256 of the source span: `2b50de4c545828eb26ab58d40744ac0f9c825366d0e84d8c45211c6fa32535d1`.

### evaluation:431239

Calls written directly in this body: `Math.max`.

SHA-256 of the source span: `2b50de4c545828eb26ab58d40744ac0f9c825366d0e84d8c45211c6fa32535d1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
