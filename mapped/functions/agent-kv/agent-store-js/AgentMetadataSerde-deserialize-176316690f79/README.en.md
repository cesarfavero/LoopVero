# `AgentMetadataSerde.deserialize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/isolation/README.en.md).

**Module:** `agent-kv/agent-store.js` · [Module README](../../../../modules/agent-kv/agent-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616100-616125](../../../../../reference/runtime/host-main.cjs#L616100-L616125) | `method` | no | `blob` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616100-616125](../../../../../reference/runtime/host-main.cjs#L616100-L616125) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:616100

Calls written directly in this body: `.parse`, `JSON.parse`, `fromHex`, `getAgentMetadataSchema`, `getDefaultAgentMetadata`, `isAgentMode`, `isApprovalModeSetting`, `isValidBlobEncryptionKeyHex`, `parseAgentSubagentInfo`, `utf8Serde.deserialize`.

Assignment or increment targets: `isRunEverything`, `rawMode`.

SHA-256 of the source span: `1690f8b2b34ec48182736745061940b2549780e2b018345c39ad9f34ee8a3dbb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
