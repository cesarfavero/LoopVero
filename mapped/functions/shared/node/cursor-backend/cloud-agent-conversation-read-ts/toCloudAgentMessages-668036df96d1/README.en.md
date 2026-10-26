# `toCloudAgentMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/cloud-agent-conversation-read.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cloud-agent-conversation-read-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508734-508768](../../../../../../../reference/runtime/host-main.cjs#L508734-L508768) | `FunctionDeclaration` | no | `conversation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508734-508768](../../../../../../../reference/runtime/host-main.cjs#L508734-L508768) | 6 | 1 | 0 | 1 | 0 | 0 |

### host:508734

Calls written directly in this body: `Math.max`, `message.text.trim`, `messageKind`, `messages2.push`, `submitterOf`, `toCloudAgentWake`.

Assignment or increment targets: `turn`.

SHA-256 of the source span: `b6000e594e85df2d059539abc338d146c610fcdefde03349fb6cc3ad4dbb66bc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
