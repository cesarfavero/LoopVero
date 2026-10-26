# `untrustedFileReason`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454048-454051](../../../../../reference/runtime/host-main.cjs#L454048-L454051) | `FunctionDeclaration` | no | `file2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454048-454051](../../../../../reference/runtime/host-main.cjs#L454048-L454051) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:454048

Calls written directly in this body: `isHostOwned`.

SHA-256 of the source span: `6b0630e4b52d3905c696febbc2f09b9e55e21bbb1c11243aa0899dd4f14c0ab7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
