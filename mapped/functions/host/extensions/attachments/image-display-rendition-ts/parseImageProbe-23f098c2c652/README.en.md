# `parseImageProbe`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/image-display-rendition.ts` · [Module README](../../../../../../modules/host/extensions/attachments/image-display-rendition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498178-498189](../../../../../../../reference/runtime/host-main.cjs#L498178-L498189) | `FunctionDeclaration` | no | `json3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498178-498189](../../../../../../../reference/runtime/host-main.cjs#L498178-L498189) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:498178

Calls written directly in this body: `gridGroups.find`, `parseProbeJson`, `primaryStreamOf`, `probe.stream_groups.filter`, `tileGridOf`, `videoStreamsOf`.

SHA-256 of the source span: `47c5fcc5a12cd36804a3cb91f25b57ebd9ae00176ba6415e1058fe743c97951a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
