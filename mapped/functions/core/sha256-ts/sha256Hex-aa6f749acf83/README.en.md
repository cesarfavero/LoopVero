# `sha256Hex`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/sha256.ts` · [Module README](../../../../modules/core/sha256-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474080-474082](../../../../../reference/runtime/host-main.cjs#L474080-L474082) | `FunctionDeclaration` | no | `data2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474080-474082](../../../../../reference/runtime/host-main.cjs#L474080-L474082) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:474080

Calls written directly in this body: `.digest`, `.update`.

SHA-256 of the source span: `02e62161a6ab955c39ccd002e87638897623a4a2dc97c5f2e0f3883ea45792cd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
