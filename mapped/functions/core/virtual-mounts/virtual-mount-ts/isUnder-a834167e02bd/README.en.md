# `isUnder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/virtual-mounts/virtual-mount.ts` · [Module README](../../../../../modules/core/virtual-mounts/virtual-mount-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765819-765823](../../../../../../reference/runtime/host-main.cjs#L765819-L765823) | `FunctionDeclaration` | no | `path33, prefix` |
| [evaluation:559184-559188](../../../../../../reference/runtime/sand-eval-runner.cjs#L559184-L559188) | `FunctionDeclaration` | no | `path33, prefix` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765819-765823](../../../../../../reference/runtime/host-main.cjs#L765819-L765823) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:559184-559188](../../../../../../reference/runtime/sand-eval-runner.cjs#L559184-L559188) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:765819

Calls written directly in this body: `path33.startsWith`, `prefix.replace`.

SHA-256 of the source span: `521bd446d97ba345ea7daa95d450d39d5139b4f703cd7ed68c549bce3b029cc4`.

### evaluation:559184

Calls written directly in this body: `path33.startsWith`, `prefix.replace`.

SHA-256 of the source span: `521bd446d97ba345ea7daa95d450d39d5139b4f703cd7ed68c549bce3b029cc4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
