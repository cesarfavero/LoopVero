# `previewsSettledWithin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-projection.ts` · [Module README](../../../../../../modules/host/extensions/session/session-projection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722502-722511](../../../../../../../reference/runtime/host-main.cjs#L722502-L722511) | `FunctionDeclaration` | no | `tail, previews` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722502-722511](../../../../../../../reference/runtime/host-main.cjs#L722502-L722511) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:722502

Calls written directly in this body: `getMainTranscriptEntries`, `isAttachmentEntry`, `new Map`, `tail.map`, `tail.some`, `visible.filter`.

SHA-256 of the source span: `85d87fae4e221e841d692bc62d0ef38aca37e2c2b15f0cfdff5054b75d958c8f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
