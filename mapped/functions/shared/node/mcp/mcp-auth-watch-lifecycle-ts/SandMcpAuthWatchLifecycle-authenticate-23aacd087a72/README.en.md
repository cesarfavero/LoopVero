# `SandMcpAuthWatchLifecycle.authenticate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685781-685803](../../../../../../../reference/runtime/host-main.cjs#L685781-L685803) | `method` | yes | `request5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685781-685803](../../../../../../../reference/runtime/host-main.cjs#L685781-L685803) | 5 | 0 | 6 | 4 | 0 | 0 |

### host:685781

Calls written directly in this body: `authAccountKeyFor`, `authAttemptFor`, `cardOriginOf`, `hasAuthLink`, `probeReachedServerWithoutAuth`, `request5.rawServerId.trim`, `this.deps.reload`, `this.deps.resolveDisplayServer`, `this.probeAuthStatus`, `this.refuseBeforeProbe`, `this.refuseWithoutAuthLink`, `this.rememberEntryPoint`, `this.reportCardClicked`, `this.reportFlowStartRefused`, `this.startAuthFlow`.

SHA-256 of the source span: `c570ff8037d4b28a465d42514bc092b4ad69b51c8060ca8ba2cb0deb3dfa6de3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
