# `runStopWindow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-windows.ts` · [Module README](../../../../../modules/core/box/box-windows-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554013-554019](../../../../../../reference/runtime/host-main.cjs#L554013-L554019) | `FunctionDeclaration` | yes | `ctx, accessor, windowIndex, ownerToken, opts = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554013-554019](../../../../../../reference/runtime/host-main.cjs#L554013-L554019) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:554013

Calls written directly in this body: `runWindowScript`.

SHA-256 of the source span: `2a500a65b345e8b758f26967bd4accdfb0152d4ac955937e8f502b67f79cdce9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
