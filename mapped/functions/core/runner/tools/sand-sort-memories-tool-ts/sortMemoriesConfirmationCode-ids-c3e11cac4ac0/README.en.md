# `sortMemoriesConfirmationCode/ids`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-sort-memories-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-sort-memories-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754204-754204](../../../../../../../reference/runtime/host-main.cjs#L754204-L754204) | `ArrowFunctionExpression` | no | `records2` |
| [evaluation:536672-536672](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536672-L536672) | `ArrowFunctionExpression` | no | `records2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754204-754204](../../../../../../../reference/runtime/host-main.cjs#L754204-L754204) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:754204 uses an implicit arrow-function return.
| [evaluation:536672-536672](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536672-L536672) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:536672 uses an implicit arrow-function return.

### host:754204

Calls written directly in this body: `.sort`, `records2.map`.

SHA-256 of the source span: `f44fff92465f811bb1d581e10589269dd8720d63428fb8ac8eaf2bebdc29205c`.

### evaluation:536672

Calls written directly in this body: `.sort`, `records2.map`.

SHA-256 of the source span: `f44fff92465f811bb1d581e10589269dd8720d63428fb8ac8eaf2bebdc29205c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
