# `isHydrationHandoffManifestPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-hydration.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-hydration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476796-476798](../../../../../../../reference/runtime/host-main.cjs#L476796-L476798) | `FunctionDeclaration` | no | `relPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476796-476798](../../../../../../../reference/runtime/host-main.cjs#L476796-L476798) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476796

Calls written directly in this body: `relPath.endsWith`, `relPath.startsWith`.

SHA-256 of the source span: `c24b83756b2bf7993f142e46d76b7e96c7d2520d56f38af3ee17641badc00485`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
