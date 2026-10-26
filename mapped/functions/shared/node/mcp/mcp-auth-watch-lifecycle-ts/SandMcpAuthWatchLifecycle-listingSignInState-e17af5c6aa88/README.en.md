# `SandMcpAuthWatchLifecycle.listingSignInState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686168-686183](../../../../../../../reference/runtime/host-main.cjs#L686168-L686183) | `method` | yes | `watch4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686168-686183](../../../../../../../reference/runtime/host-main.cjs#L686168-L686183) | 2 | 0 | 1 | 4 | 0 | 1 |

### host:686168

Calls written directly in this body: `this.authWatchPollDeadline.run`.

Assignment or increment targets: `signedIn`, `watch4.sawSignedOutListing`, `watch4.sawUnknownListing`.

SHA-256 of the source span: `e49fa5488a5ab6a26754a0f4349bee9beca1b086fbc15e24ad9ef2a110ffe8e6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
