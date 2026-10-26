# `SandMcpDisplayListing.noteAccountRecovered`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-display-listing.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-display-listing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686886-686892](../../../../../../../reference/runtime/host-main.cjs#L686886-L686892) | `method` | no | `recovered` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686886-686892](../../../../../../../reference/runtime/host-main.cjs#L686886-L686892) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:686886

Calls written directly in this body: `haveSameRows`, `recovered`, `this.emit`.

Assignment or increment targets: `this.shownFromDegradedAccountRead`.

SHA-256 of the source span: `ad36b935c69aef18347cd2c08522bb69598a850a5782e7cee1411728165c1caf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
