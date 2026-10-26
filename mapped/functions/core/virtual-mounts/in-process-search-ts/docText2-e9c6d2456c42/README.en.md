# `docText2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/virtual-mounts/in-process-search.ts` · [Module README](../../../../../modules/core/virtual-mounts/in-process-search-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765971-765973](../../../../../../reference/runtime/host-main.cjs#L765971-L765973) | `FunctionDeclaration` | no | `doc` |
| [evaluation:559335-559337](../../../../../../reference/runtime/sand-eval-runner.cjs#L559335-L559337) | `FunctionDeclaration` | no | `doc` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765971-765973](../../../../../../reference/runtime/host-main.cjs#L765971-L765973) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559335-559337](../../../../../../reference/runtime/sand-eval-runner.cjs#L559335-L559337) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:765971

Calls written directly in this body: `.join`, `Object.values`.

SHA-256 of the source span: `fed00c0d3fa4bf4c7c37331c9aea9566946729d1982c3866863e488ea6ab7a96`.

### evaluation:559335

Calls written directly in this body: `.join`, `Object.values`.

SHA-256 of the source span: `fed00c0d3fa4bf4c7c37331c9aea9566946729d1982c3866863e488ea6ab7a96`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
