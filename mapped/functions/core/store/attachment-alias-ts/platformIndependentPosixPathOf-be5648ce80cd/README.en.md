# `platformIndependentPosixPathOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/store/attachment-alias.ts` · [Module README](../../../../../modules/core/store/attachment-alias-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759610-759616](../../../../../../reference/runtime/host-main.cjs#L759610-L759616) | `FunctionDeclaration` | no | `url2` |
| [evaluation:549778-549784](../../../../../../reference/runtime/sand-eval-runner.cjs#L549778-L549784) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759610-759616](../../../../../../reference/runtime/host-main.cjs#L759610-L759616) | 0 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:549778-549784](../../../../../../reference/runtime/sand-eval-runner.cjs#L549778-L549784) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:759610

Calls written directly in this body: `decodeURIComponent`.

SHA-256 of the source span: `433f8dd068721dbf8cab8aa483c2e4078739947690b2f45038a45cd86f41f145`.

### evaluation:549778

Calls written directly in this body: `decodeURIComponent`.

SHA-256 of the source span: `433f8dd068721dbf8cab8aa483c2e4078739947690b2f45038a45cd86f41f145`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
