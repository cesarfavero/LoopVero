# `sha256HexOfText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/sha256.ts` · [Module README](../../../../modules/core/sha256-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474083-474085](../../../../../reference/runtime/host-main.cjs#L474083-L474085) | `FunctionDeclaration` | no | `text3` |
| [evaluation:536065-536067](../../../../../reference/runtime/sand-eval-runner.cjs#L536065-L536067) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474083-474085](../../../../../reference/runtime/host-main.cjs#L474083-L474085) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:536065-536067](../../../../../reference/runtime/sand-eval-runner.cjs#L536065-L536067) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:474083

Calls written directly in this body: `.digest`, `.update`.

SHA-256 of the source span: `78ac61dd4fccbe5f87136d234eb617a4aad8b20081651d235075bf20984dfe63`.

### evaluation:536065

Calls written directly in this body: `.digest`, `.update`.

SHA-256 of the source span: `5240e2c011636dba8c5ceef664a9757e40d97133646e784041636c4d5b58ccbe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
