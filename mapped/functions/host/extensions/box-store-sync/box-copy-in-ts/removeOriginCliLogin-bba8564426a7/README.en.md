# `removeOriginCliLogin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:482957-482964](../../../../../../../reference/runtime/host-main.cjs#L482957-L482964) | `FunctionDeclaration` | yes | `targetDir, segments` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482957-482964](../../../../../../../reference/runtime/host-main.cjs#L482957-L482964) | 0 | 0 | 3 | 0 | 0 | 0 |

### host:482957

Calls written directly in this body: `openBelowTarget`, `parent.handle.close`, `removeTreeNoFollow`.

SHA-256 of the source span: `1158aa76936729b787c37f9f039cf4130730b8f008643025ea600254c2b1ae7e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
