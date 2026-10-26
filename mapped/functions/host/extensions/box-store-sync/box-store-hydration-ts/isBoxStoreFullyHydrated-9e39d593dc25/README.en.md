# `isBoxStoreFullyHydrated`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-hydration.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-hydration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476802-476811](../../../../../../../reference/runtime/host-main.cjs#L476802-L476811) | `FunctionDeclaration` | no | `evidence` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476802-476811](../../../../../../../reference/runtime/host-main.cjs#L476802-L476811) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:476802

Calls written directly in this body: `isCount`.

SHA-256 of the source span: `698e1d8f10a8e0550748e958c1d27f5688f58e7ded132506d8c60551c915903c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
