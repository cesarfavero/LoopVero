# `startAgentIdentity/forgetLocalAgentDeletion`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496695-496695](../../../../../../../reference/runtime/host-main.cjs#L496695-L496695) | `ArrowFunctionExpression` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496695-496695](../../../../../../../reference/runtime/host-main.cjs#L496695-L496695) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:496695 uses an implicit arrow-function return.

### host:496695

Calls written directly in this body: `context2.deps.transcript.forgetAgentDeletion`.

SHA-256 of the source span: `068af7c73ff951bbe913b7a1f112894952e2d0142c9092bd7d343b9f4c2c9330`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
