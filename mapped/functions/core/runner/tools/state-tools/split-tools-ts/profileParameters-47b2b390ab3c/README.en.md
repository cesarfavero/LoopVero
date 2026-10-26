# `profileParameters`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771823-771838](../../../../../../../../reference/runtime/host-main.cjs#L771823-L771838) | `ArrowFunctionExpression` | no | `teamBot` |
| [evaluation:571056-571071](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571056-L571071) | `ArrowFunctionExpression` | no | `teamBot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771823-771838](../../../../../../../../reference/runtime/host-main.cjs#L771823-L771838) | 2 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:771823 uses an implicit arrow-function return.
| [evaluation:571056-571071](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571056-L571071) | 2 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:571056 uses an implicit arrow-function return.

### host:771823

Calls written directly in this body: `.describe`, `.min`, `.optional`, `.trim`, `external_exports2.boolean`, `external_exports2.enum`, `external_exports2.object`, `external_exports2.string`, `nonEmptyTuple`.

SHA-256 of the source span: `d8d2565b71b2720196a30096be8540b0e3a027108d21eb296b2101fa4ace2681`.

### evaluation:571056

Calls written directly in this body: `.describe`, `.min`, `.optional`, `.trim`, `external_exports3.boolean`, `external_exports3.enum`, `external_exports3.object`, `external_exports3.string`, `nonEmptyTuple`.

SHA-256 of the source span: `833d8a97823b3cbda1c0ac6cfbd62a3187e298161134b2ae15b5a920191e29a8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
