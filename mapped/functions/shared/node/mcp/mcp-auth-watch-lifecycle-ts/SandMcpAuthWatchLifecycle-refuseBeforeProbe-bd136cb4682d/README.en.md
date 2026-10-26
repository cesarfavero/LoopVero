# `SandMcpAuthWatchLifecycle.refuseBeforeProbe`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685817-685841](../../../../../../../reference/runtime/host-main.cjs#L685817-L685841) | `method` | yes | `attempt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685817-685841](../../../../../../../reference/runtime/host-main.cjs#L685817-L685841) | 3 | 0 | 1 | 3 | 0 | 0 |

### host:685817

Calls written directly in this body: `this.reportFlowStartRefused`, `this.withheldReason`.

SHA-256 of the source span: `b5aab770105994f9bf390ff361657aec3526cf1cd21adea1fb52950455666f59`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
