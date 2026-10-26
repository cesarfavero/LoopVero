# `McpRepairsThisTurn.noteSignIn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780170-780174](../../../../../../../reference/runtime/host-main.cjs#L780170-L780174) | `method` | no | `serverId, accountKey` |
| [evaluation:580415-580419](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580415-L580419) | `method` | no | `serverId, accountKey` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780170-780174](../../../../../../../reference/runtime/host-main.cjs#L780170-L780174) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:580415-580419](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580415-L580419) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:780170

Calls written directly in this body: `accountKeys.add`, `new Set`, `this.signInsByServerId.get`, `this.signInsByServerId.set`.

SHA-256 of the source span: `29c2b6326248e9145b4308f60e5d7f4171370cbcbfd1ca0417f67d70f155af0a`.

### evaluation:580415

Calls written directly in this body: `accountKeys.add`, `new Set`, `this.signInsByServerId.get`, `this.signInsByServerId.set`.

SHA-256 of the source span: `29c2b6326248e9145b4308f60e5d7f4171370cbcbfd1ca0417f67d70f155af0a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
