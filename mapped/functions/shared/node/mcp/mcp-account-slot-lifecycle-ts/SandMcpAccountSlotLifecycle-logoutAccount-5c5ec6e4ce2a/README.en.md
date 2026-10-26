# `SandMcpAccountSlotLifecycle.logoutAccount`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-account-slot-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-account-slot-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685259-685268](../../../../../../../reference/runtime/host-main.cjs#L685259-L685268) | `method` | yes | `rawServerId, rawAccountKey` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685259-685268](../../../../../../../reference/runtime/host-main.cjs#L685259-L685268) | 0 | 0 | 3 | 1 | 0 | 0 |

### host:685259

Calls written directly in this body: `normalizeAccountKey`, `this.deps.backendMcpExec.logoutAccount`, `this.deps.clearPendingAuthWatch`, `this.deps.reloadServers`, `this.resolveHttpDisplayServer`.

SHA-256 of the source span: `b876e832106ed3628e4f6d5b6d5ec82ff92b7dff11ccd78040d2a947c4c3a9ba`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
