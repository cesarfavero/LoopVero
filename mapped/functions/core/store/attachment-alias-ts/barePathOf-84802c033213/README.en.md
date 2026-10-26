# `barePathOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/store/attachment-alias.ts` · [Module README](../../../../../modules/core/store/attachment-alias-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759596-759609](../../../../../../reference/runtime/host-main.cjs#L759596-L759609) | `FunctionDeclaration` | no | `path33` |
| [evaluation:549764-549777](../../../../../../reference/runtime/sand-eval-runner.cjs#L549764-L549777) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759596-759609](../../../../../../reference/runtime/host-main.cjs#L759596-L759609) | 3 | 0 | 0 | 5 | 0 | 1 |
| [evaluation:549764-549777](../../../../../../reference/runtime/sand-eval-runner.cjs#L549764-L549777) | 3 | 0 | 0 | 5 | 0 | 1 |

### host:759596

Calls written directly in this body: `ENCODED_SEPARATOR.test`, `new URL`, `path33.includes`, `path33.startsWith`, `platformIndependentPosixPathOf`.

Assignment or increment targets: `url2`.

SHA-256 of the source span: `02915bed41b1a530c0f1dc141457cd99787346d3a415a9195166ec57e2962e0b`.

### evaluation:549764

Calls written directly in this body: `ENCODED_SEPARATOR.test`, `new URL`, `path33.includes`, `path33.startsWith`, `platformIndependentPosixPathOf`.

Assignment or increment targets: `url2`.

SHA-256 of the source span: `02915bed41b1a530c0f1dc141457cd99787346d3a415a9195166ec57e2962e0b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
