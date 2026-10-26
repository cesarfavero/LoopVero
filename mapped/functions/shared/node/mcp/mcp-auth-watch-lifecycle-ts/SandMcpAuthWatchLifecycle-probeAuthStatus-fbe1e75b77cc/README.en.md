# `SandMcpAuthWatchLifecycle.probeAuthStatus`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685872-685891](../../../../../../../reference/runtime/host-main.cjs#L685872-L685891) | `method` | yes | `attempt, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685872-685891](../../../../../../../reference/runtime/host-main.cjs#L685872-L685891) | 0 | 0 | 2 | 1 | 1 | 1 |

### host:685872

Calls written directly in this body: `authStatusRequest`, `connectorAuthStartFailure`, `this.deps.backendMcpExec.checkAuthStatus`, `this.emit`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `6cf4a0545a2dafc8e592bbf81a20feecf3545b8f5038a47664b2bd805a1668bb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
