# `createSandBrowserOpRunner/sensitiveRequest/downloadTerminal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726851-726859](../../../../../../../reference/runtime/host-main.cjs#L726851-L726859) | `ArrowFunctionExpression` | yes | `(none)` |
| [evaluation:561466-561474](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561466-L561474) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726851-726859](../../../../../../../reference/runtime/host-main.cjs#L726851-L726859) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:726851 uses an implicit arrow-function return.
| [evaluation:561466-561474](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561466-L561474) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:561466 uses an implicit arrow-function return.

### host:726851

Calls written directly in this body: `.then`, `downloadFile`.

SHA-256 of the source span: `dfa37782ad23079e57e014f1c4d07ca066cc98ee8d5b3b7cfeb8101a05464f75`.

### evaluation:561466

Calls written directly in this body: `.then`, `downloadFile`.

SHA-256 of the source span: `cc22ac38601fec17a38865b14a02eed645b7ffac60aef079e316eafae863b3a0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
