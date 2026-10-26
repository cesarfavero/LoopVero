# `build/onListenerAutomationSaved`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/bot-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/bot-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772124-772136](../../../../../../../../reference/runtime/host-main.cjs#L772124-L772136) | `ArrowFunctionExpression` | no | `trigger2` |
| [evaluation:571357-571369](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571357-L571369) | `ArrowFunctionExpression` | no | `trigger` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772124-772136](../../../../../../../../reference/runtime/host-main.cjs#L772124-L772136) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:772124 uses an implicit arrow-function return.
| [evaluation:571357-571369](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571357-L571369) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:571357 uses an implicit arrow-function return.

### host:772124

Calls written directly in this body: `surfaceListenerConnectCards`.

SHA-256 of the source span: `b3f68039541fdca45f09ee1e7bcae8bb7a82c2814b4d69358b685ccbc51040b2`.

### evaluation:571357

Calls written directly in this body: `surfaceListenerConnectCards`.

SHA-256 of the source span: `0bb815d3226427501f3810e4503864f05d60a7cc3e3290e24d7214b9ba4b7220`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
