# `SandMcpManager.kickAccountRecovery`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689615-689621](../../../../../../../reference/runtime/host-main.cjs#L689615-L689621) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689615-689621](../../../../../../../reference/runtime/host-main.cjs#L689615-L689621) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:689615

Calls written directly in this body: `.catch`, `this.readAccountServers`.

Assignment or increment targets: `this.accountRecoveryAttempted`.

SHA-256 of the source span: `0ba2a93280c9455c83c79a5042a449ea6ba1653d71d1b7eda018f0b9b219a244`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
