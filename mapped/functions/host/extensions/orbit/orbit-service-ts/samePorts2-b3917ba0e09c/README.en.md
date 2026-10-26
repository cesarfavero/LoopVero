# `samePorts2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/orbit-service.ts` · [Module README](../../../../../../modules/host/extensions/orbit/orbit-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706403-706405](../../../../../../../reference/runtime/host-main.cjs#L706403-L706405) | `FunctionDeclaration` | no | `left, right` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706403-706405](../../../../../../../reference/runtime/host-main.cjs#L706403-L706405) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:706403

Calls written directly in this body: `left.every`.

SHA-256 of the source span: `46b75c96ce66d5c886cbdc639a6af20c65c3efa917cc6213a96f9b65be23f7b8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
