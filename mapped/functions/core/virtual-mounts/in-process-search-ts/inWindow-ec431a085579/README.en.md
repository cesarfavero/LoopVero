# `inWindow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/virtual-mounts/in-process-search.ts` · [Module README](../../../../../modules/core/virtual-mounts/in-process-search-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765974-765982](../../../../../../reference/runtime/host-main.cjs#L765974-L765982) | `FunctionDeclaration` | no | `doc, request5` |
| [evaluation:559338-559346](../../../../../../reference/runtime/sand-eval-runner.cjs#L559338-L559346) | `FunctionDeclaration` | no | `doc, request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765974-765982](../../../../../../reference/runtime/host-main.cjs#L765974-L765982) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:559338-559346](../../../../../../reference/runtime/sand-eval-runner.cjs#L559338-L559346) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:765974

Calls written directly in this body: `isUnder`.

SHA-256 of the source span: `6efb8bd7a7deaa509d71d0ec1f612137aa808eaa2f2f8a9beecdb8d305c73259`.

### evaluation:559338

Calls written directly in this body: `isUnder`.

SHA-256 of the source span: `21169050130d2257e5b2efbfc0c87504a44b04ce59548b93aee35944264e2ccb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
