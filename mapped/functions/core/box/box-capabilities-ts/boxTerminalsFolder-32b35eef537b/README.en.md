# `boxTerminalsFolder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-capabilities.ts` · [Module README](../../../../../modules/core/box/box-capabilities-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546683-546685](../../../../../../reference/runtime/host-main.cjs#L546683-L546685) | `FunctionDeclaration` | no | `box` |
| [evaluation:475790-475792](../../../../../../reference/runtime/sand-eval-runner.cjs#L475790-L475792) | `FunctionDeclaration` | no | `box` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546683-546685](../../../../../../reference/runtime/host-main.cjs#L546683-L546685) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475790-475792](../../../../../../reference/runtime/sand-eval-runner.cjs#L475790-L475792) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:546683

Calls written directly in this body: `box.getTerminalsFolder`.

SHA-256 of the source span: `aeabfd7b8ca91bc3c0193d325911ca38de886c5ed9564b8a659276291cefc08f`.

### evaluation:475790

Calls written directly in this body: `box.getTerminalsFolder`.

SHA-256 of the source span: `aeabfd7b8ca91bc3c0193d325911ca38de886c5ed9564b8a659276291cefc08f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
