# `readHeldAttachmentChunk/readFrom`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498852-498872](../../../../../../../reference/runtime/host-main.cjs#L498852-L498872) | `ArrowFunctionExpression` | yes | `handle, named2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498852-498872](../../../../../../../reference/runtime/host-main.cjs#L498852-L498872) | 4 | 0 | 2 | 3 | 0 | 0 |

### host:498852

Calls written directly in this body: `.toString`, `Buffer.alloc`, `Math.floor`, `Math.max`, `Math.min`, `Number.isFinite`, `audioMimeFromPath`, `buffer.subarray`, `handle.read`, `handle.stat`, `imageMimeFromPath`, `stat26.isFile`, `videoMimeFromPath`.

SHA-256 of the source span: `147d3d6e0a23440a35d6f124eaec0a9ba0211e662138bcb501c9bf8297976239`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
