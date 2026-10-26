# `startAgentIdentity/adoptServerAgentById`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496942-496942](../../../../../../../reference/runtime/host-main.cjs#L496942-L496942) | `ArrowFunctionExpression` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496942-496942](../../../../../../../reference/runtime/host-main.cjs#L496942-L496942) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:496942 uses an implicit arrow-function return.

### host:496942

Calls written directly in this body: `service.adoptServerAgentById`.

SHA-256 of the source span: `0443cae412644e544fc2614d6516b30dbea4bd86cc2fc1215afe30e8374226a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
