# `SandMcpAuthWatchLifecycle.readListingSignedIn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686188-686199](../../../../../../../reference/runtime/host-main.cjs#L686188-L686199) | `method` | yes | `watch4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686188-686199](../../../../../../../reference/runtime/host-main.cjs#L686188-L686199) | 4 | 0 | 1 | 4 | 0 | 0 |

### host:686188

Calls written directly in this body: `current2.accounts.find`, `this.deps.resolveDisplayServer`.

Assignment or increment targets: `watch4.sawListingRow`.

SHA-256 of the source span: `c15b77a811f96dd687408bef7800143baf894eb2f18b9bacf0839cb8a59d0f41`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
