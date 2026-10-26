# `startWorkingStateExport/exportAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/extension.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786158-786166](../../../../../../../reference/runtime/host-main.cjs#L786158-L786166) | `ArrowFunctionExpression` | yes | `agentId, limits` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786158-786166](../../../../../../../reference/runtime/host-main.cjs#L786158-L786166) | 2 | 0 | 2 | 1 | 0 | 0 |

### host:786158

Calls written directly in this body: `agentHarness`, `agentIdentity.adoptServerAgentById`, `exporter.exportAgent`, `getSandProfilePath`, `readSandProfileFile`, `readSandProfileServerId`, `sessionStore.getAgentDir`.

SHA-256 of the source span: `4d1d1d279a3b99cd1231e65cb1ec6cca94705ee5d692e99c02ab818a5b4b4c8e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
