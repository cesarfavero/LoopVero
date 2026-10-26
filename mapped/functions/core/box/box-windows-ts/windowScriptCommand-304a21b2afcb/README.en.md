# `windowScriptCommand`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-windows.ts` · [Module README](../../../../../modules/core/box/box-windows-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553951-553960](../../../../../../reference/runtime/host-main.cjs#L553951-L553960) | `FunctionDeclaration` | no | `label, windowIndex, opts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553951-553960](../../../../../../reference/runtime/host-main.cjs#L553951-L553960) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:553951

Calls written directly in this body: `scriptDyingWithLockHolder`, `startWindowCommand`, `stopWindowCommand`, `underWindowLock`.

SHA-256 of the source span: `7041dc3bd598567e923bb91c20d5cc7653eea913eb357812f3f6fd5b78dd22ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
