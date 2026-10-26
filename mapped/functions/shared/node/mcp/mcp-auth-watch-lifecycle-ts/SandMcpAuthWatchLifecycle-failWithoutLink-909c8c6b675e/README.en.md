# `SandMcpAuthWatchLifecycle.failWithoutLink`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685892-685898](../../../../../../../reference/runtime/host-main.cjs#L685892-L685898) | `method` | yes | `attempt, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685892-685898](../../../../../../../reference/runtime/host-main.cjs#L685892-L685898) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:685892

Calls written directly in this body: `this.clearPendingAuthWatchCancelled`, `this.deps.reload`.

SHA-256 of the source span: `726dafb8db02a165a4b142545aa78e4ff3c8cc2ddd2dec7a1af3a76ca3f42455`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
