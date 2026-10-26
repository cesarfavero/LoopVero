# `createAttachmentsService/upload`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499106-499117](../../../../../../../reference/runtime/host-main.cjs#L499106-L499117) | `FunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499106-499117](../../../../../../../reference/runtime/host-main.cjs#L499106-L499117) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:499106

Calls written directly in this body: `Buffer.from`, `ingestAttachmentBytes`, `new Uint8Array`, `resolveRequestedAgentDir`.

SHA-256 of the source span: `f3aa62116a1200912169271dc43fdcacc2eb6e511625a136ae65bf339d012a39`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
