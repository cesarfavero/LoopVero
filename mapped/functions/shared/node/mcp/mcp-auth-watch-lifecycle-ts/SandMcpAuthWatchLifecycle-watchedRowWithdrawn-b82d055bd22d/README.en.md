# `SandMcpAuthWatchLifecycle.watchedRowWithdrawn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686215-686232](../../../../../../../reference/runtime/host-main.cjs#L686215-L686232) | `method` | yes | `watch4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686215-686232](../../../../../../../reference/runtime/host-main.cjs#L686215-L686232) | 1 | 0 | 1 | 3 | 0 | 1 |

### host:686215

Calls written directly in this body: `reportMcpHostEdgeFailure`, `this.authWatchPollDeadline.run`.

Assignment or increment targets: `current2`.

SHA-256 of the source span: `afdb2c66509a2a2a04515117c908eecc038d1fbc45355e5b3324f9d03f94d1d7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
