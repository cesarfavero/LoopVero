# `SandMcpAuthWatchLifecycle.attributeOAuthCallback`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685689-685692](../../../../../../../reference/runtime/host-main.cjs#L685689-L685692) | `method` | no | `report, stateId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685689-685692](../../../../../../../reference/runtime/host-main.cjs#L685689-L685692) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:685689

Calls written directly in this body: `this.attributed`, `this.watchForOAuthState`.

SHA-256 of the source span: `f687e86f83785fc00c0a0fc3df1ed16f6ed0ca96b24d0cbff46a15da6286fd84`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
