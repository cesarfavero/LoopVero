# `SandMcpAuthWatchLifecycle.noteAuthCallbackReceived`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686068-686075](../../../../../../../reference/runtime/host-main.cjs#L686068-L686075) | `method` | yes | `hint` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686068-686075](../../../../../../../reference/runtime/host-main.cjs#L686068-L686075) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:686068

Calls written directly in this body: `Promise.all`, `matches.map`, `this.matchWatchesForCallback`.

SHA-256 of the source span: `845f8069fc45e398dba00ce381563815af525f8301d205a7cbed18b2519031ec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
