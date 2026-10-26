# `messageKind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/cloud-agent-conversation-read.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cloud-agent-conversation-read-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508774-508790](../../../../../../../reference/runtime/host-main.cjs#L508774-L508790) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508774-508790](../../../../../../../reference/runtime/host-main.cjs#L508774-L508790) | 8 | 0 | 0 | 6 | 0 | 0 |

### host:508774

Calls written directly in this body: `message.bubbleId.endsWith`.

SHA-256 of the source span: `5f0676a7f922cc55439823cb3f60b47842bac6ff1f997106c1cd8b2c909274f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
