# `rewriteClonedAgentIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-clone.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-clone-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716894-716914](../../../../../../../reference/runtime/host-main.cjs#L716894-L716914) | `FunctionDeclaration` | no | `targetDir, newAgentId, includesChatHistory, createAgentDb` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716894-716914](../../../../../../../reference/runtime/host-main.cjs#L716894-L716914) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:716894

Calls written directly in this body: `createAgentDb`, `db.clearAgentPurpose`, `db.clearConversation`, `db.clearTransientState`, `db.close`, `db.getSandProfile`, `db.set`, `db.setAgentOrigin`, `db.setSandProfile`.

SHA-256 of the source span: `c8e6a90b1c04d56df1ee4a7076a28dbe2a8f6c67d0d105e28ce354c531370d43`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
