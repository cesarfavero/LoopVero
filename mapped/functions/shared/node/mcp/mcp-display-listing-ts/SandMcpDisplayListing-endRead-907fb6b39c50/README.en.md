# `SandMcpDisplayListing.endRead`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-display-listing.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-display-listing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686872-686877](../../../../../../../reference/runtime/host-main.cjs#L686872-L686877) | `method` | no | `served` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686872-686877](../../../../../../../reference/runtime/host-main.cjs#L686872-L686877) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:686872

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.readsInFlight`, `this.shown`, `this.shownFromDegradedAccountRead`.

SHA-256 of the source span: `740369722c2da3c87fc86f5501266837fa10a890aebecec161074fe61b956e70`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
