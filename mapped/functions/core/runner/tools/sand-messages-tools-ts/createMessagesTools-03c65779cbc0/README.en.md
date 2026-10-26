# `createMessagesTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-messages-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778232-778307](../../../../../../../reference/runtime/host-main.cjs#L778232-L778307) | `FunctionDeclaration` | no | `deps` |
| [evaluation:577967-578042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577967-L578042) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778232-778307](../../../../../../../reference/runtime/host-main.cjs#L778232-L778307) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577967-578042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577967-L578042) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:778232

Calls written directly in this body: `createFetchAttachmentTool`, `defineCommunicateTool`, `gateMessagesOnGrants`, `instrumentMessages`.

SHA-256 of the source span: `aa2fbc2126c707d8272f0f36744f62ffe0e40cc2a4516f903010790b50e389f7`.

### evaluation:577967

Calls written directly in this body: `createFetchAttachmentTool`, `defineCommunicateTool`, `gateMessagesOnGrants`, `instrumentMessages`.

SHA-256 of the source span: `b597fc2935a1b9a2f4e52619e15c5c2a7a29be3b7611f11e05ea8b54664037e6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
