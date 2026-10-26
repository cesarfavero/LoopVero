# `createDocumentTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/documents/document-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/documents/document-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776453-776613](../../../../../../../../reference/runtime/host-main.cjs#L776453-L776613) | `FunctionDeclaration` | no | `{   port,   readBoxFile,   view = "owner" }` |
| [evaluation:576104-576264](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576104-L576264) | `FunctionDeclaration` | no | `{   port,   readBoxFile,   view = "owner" }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776453-776613](../../../../../../../../reference/runtime/host-main.cjs#L776453-L776613) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576104-576264](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576104-L576264) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:776453

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `742b12fd4f4e942030c7f0f097db286e8b8039f897f7c2eaccd69defcd136a38`.

### evaluation:576104

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `19c39d3e417e2de2ac531c401290def8c1b6554406d01ab592c93dd8082ab934`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
