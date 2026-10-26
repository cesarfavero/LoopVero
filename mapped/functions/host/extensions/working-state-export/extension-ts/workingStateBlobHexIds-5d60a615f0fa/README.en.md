# `workingStateBlobHexIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/extension.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786043-786045](../../../../../../../reference/runtime/host-main.cjs#L786043-L786045) | `FunctionDeclaration` | no | `keys` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786043-786045](../../../../../../../reference/runtime/host-main.cjs#L786043-L786045) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:786043

Calls written directly in this body: `.map`, `keys.filter`.

SHA-256 of the source span: `8085f29ed76739d9c9b04db27fc6f0beec73d5f55f5661b138f20c585fdcd24e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
