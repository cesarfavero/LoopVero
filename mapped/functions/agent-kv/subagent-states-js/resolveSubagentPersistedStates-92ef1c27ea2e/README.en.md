# `resolveSubagentPersistedStates`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/subagents/README.en.md).

**Module:** `agent-kv/subagent-states.js` · [Module README](../../../../modules/agent-kv/subagent-states-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615972-616013](../../../../../reference/runtime/host-main.cjs#L615972-L616013) | `FunctionDeclaration` | yes | `ctx, state, blobStore` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615972-616013](../../../../../reference/runtime/host-main.cjs#L615972-L616013) | 5 | 1 | 1 | 2 | 1 | 0 |

### host:615972

Calls written directly in this body: `Object.entries`, `asyncMapValues`, `loads.find`, `recordMissingSubagentStateBlob`.

Assignment or increment targets: `resolved[computed]`.

Explicit throw targets: `firstFailedLoad.error`.

SHA-256 of the source span: `373ec08c87d39295d49224402913483422896f787b742f6e1a976c0047e7e6d4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
