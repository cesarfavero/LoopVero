# `withGmailToolGuards`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-tool-guards.ts` · [Module README](../../../../../modules/core/mcp/gmail-tool-guards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584680-584696](../../../../../../reference/runtime/sand-eval-runner.cjs#L584680-L584696) | `FunctionDeclaration` | no | `executor, resolveServerHost, options2 = { uploadFileOffered: () => false }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584680-584696](../../../../../../reference/runtime/sand-eval-runner.cjs#L584680-L584696) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:584680

Calls written directly in this body: `withGmailAttachmentGuard`, `withGmailDraftSendGuard`, `withGmailIdNotFoundNote`, `withGmailSearchCoverageNote`, `withGmailSpamSearchNote`.

SHA-256 of the source span: `fe51f24f219352ad1764a615684b146e8d7d0f78d54b61c59f0d864ffd0ed30e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
