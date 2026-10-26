# `createSandMcpTextSpiller/<callback>/write`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/large-output-spill.ts` · [Module README](../../../../../modules/core/runner/large-output-spill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:515790-515790](../../../../../../reference/runtime/sand-eval-runner.cjs#L515790-L515790) | `ArrowFunctionExpression` | no | `aggregateText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:515790-515790](../../../../../../reference/runtime/sand-eval-runner.cjs#L515790-L515790) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:515790 uses an implicit arrow-function return.

### evaluation:515790

Calls written directly in this body: `writeText2`.

SHA-256 of the source span: `cc228f1dafc9ebe152d370c0db8564cfa9109b7d754662dd6b0fa7e9aac0e5a3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
