# `hostSessionPreview`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/session-preview-fallbacks.ts` · [Module README](../../../../../modules/shared/agents/session-preview-fallbacks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721853-721916](../../../../../../reference/runtime/host-main.cjs#L721853-L721916) | `FunctionDeclaration` | no | `preview` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721853-721916](../../../../../../reference/runtime/host-main.cjs#L721853-L721916) | 34 | 0 | 0 | 26 | 0 | 0 |

### host:721853

Calls written directly in this body: `connectCardManifest`, `formatAttachmentSentSummary`, `preview.connectors.join`, `preview.names.join`, `preview.options.join`, `preview.text.trim`.

SHA-256 of the source span: `3831ff44bd1c2e3c5f4fc37b03d9d0618e8d86a5aabfe4c1ecea0b355ae4d00b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
