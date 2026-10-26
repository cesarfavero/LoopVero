# `isUnstoredMcpListingServerId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp.ts` · [Module README](../../../../../modules/shared/mcp/mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225984-225987](../../../../../../reference/runtime/host-main.cjs#L225984-L225987) | `FunctionDeclaration` | no | `rawId` |
| [evaluation:495208-495211](../../../../../../reference/runtime/sand-eval-runner.cjs#L495208-L495211) | `FunctionDeclaration` | no | `rawId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225984-225987](../../../../../../reference/runtime/host-main.cjs#L225984-L225987) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:495208-495211](../../../../../../reference/runtime/sand-eval-runner.cjs#L495208-L495211) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225984

Calls written directly in this body: `id.startsWith`, `isMcpListingServerId`, `rawId.trim`.

SHA-256 of the source span: `c88cfaadf1722e86ceb85674222734c9076ef195ccdfe72b84ee74e09ff6c765`.

### evaluation:495208

Calls written directly in this body: `id.startsWith`, `isMcpListingServerId`, `rawId.trim`.

SHA-256 of the source span: `c88cfaadf1722e86ceb85674222734c9076ef195ccdfe72b84ee74e09ff6c765`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
