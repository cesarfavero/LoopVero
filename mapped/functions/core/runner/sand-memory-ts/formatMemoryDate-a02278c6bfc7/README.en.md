# `formatMemoryDate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/sand-memory.ts` · [Module README](../../../../../modules/core/runner/sand-memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702662-702665](../../../../../../reference/runtime/host-main.cjs#L702662-L702665) | `FunctionDeclaration` | no | `createdAtMs2` |
| [evaluation:536164-536167](../../../../../../reference/runtime/sand-eval-runner.cjs#L536164-L536167) | `FunctionDeclaration` | no | `createdAtMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702662-702665](../../../../../../reference/runtime/host-main.cjs#L702662-L702665) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:536164-536167](../../../../../../reference/runtime/sand-eval-runner.cjs#L536164-L536167) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:702662

Calls written directly in this body: `.slice`, `.toISOString`, `Number.isFinite`, `new Date`.

SHA-256 of the source span: `4b745099865cf8dfb6f9ada25181df5094ce7a2154b5fe87f0d476bfae6194d2`.

### evaluation:536164

Calls written directly in this body: `.slice`, `.toISOString`, `Number.isFinite`, `new Date`.

SHA-256 of the source span: `08a0e148336ab2ddd2a844e11fc35a5b4838af19dfab45693485644b16f7d9f7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
