# `bindOwnerToken`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-windows.ts` · [Module README](../../../../../modules/core/box/box-windows-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553875-553877](../../../../../../reference/runtime/host-main.cjs#L553875-L553877) | `FunctionDeclaration` | no | `windowIndex, ownerToken` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553875-553877](../../../../../../reference/runtime/host-main.cjs#L553875-L553877) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:553875

Calls written directly in this body: `boundUptimeFile`.

SHA-256 of the source span: `88998354c275f810350fa35b60867bd7dcc033ca0c4fb42074d7a7dc82d70bdc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
