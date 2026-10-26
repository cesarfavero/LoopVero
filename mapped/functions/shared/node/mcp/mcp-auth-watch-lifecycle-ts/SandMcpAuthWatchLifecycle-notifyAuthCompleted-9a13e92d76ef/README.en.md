# `SandMcpAuthWatchLifecycle.notifyAuthCompleted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686291-686310](../../../../../../../reference/runtime/host-main.cjs#L686291-L686310) | `method` | no | `completion, via, cardOrigin` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686291-686310](../../../../../../../reference/runtime/host-main.cjs#L686291-L686310) | 4 | 0 | 0 | 1 | 0 | 1 |

### host:686291

Calls written directly in this body: `this.authCompletionObserver`, `this.emit`.

SHA-256 of the source span: `6ceb46fa1a80a75ac8ad9439c7484f65864e3fb7ba1ef70e00a2b74e154be0d6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
