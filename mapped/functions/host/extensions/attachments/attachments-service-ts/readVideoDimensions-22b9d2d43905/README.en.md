# `readVideoDimensions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498967-498993](../../../../../../../reference/runtime/host-main.cjs#L498967-L498993) | `FunctionDeclaration` | yes | `filePath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498967-498993](../../../../../../../reference/runtime/host-main.cjs#L498967-L498993) | 3 | 0 | 2 | 5 | 0 | 1 |

### host:498967

Calls written directly in this body: `getSandRootDir`, `holdAttachmentFile`, `isPathWithin`, `realSandDataFile`, `reanchorHostPath`, `reportFallbackUnlessAbsent`, `videoMimeFromPath`.

SHA-256 of the source span: `66ddbdf9eca0b5780d5b88b473e757bb1ad11973886027a90b259001c0d82dff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
