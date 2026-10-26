# `isMcpListingServerId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp.ts` · [Module README](../../../../../modules/shared/mcp/mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225981-225983](../../../../../../reference/runtime/host-main.cjs#L225981-L225983) | `FunctionDeclaration` | no | `rawId` |
| [evaluation:495205-495207](../../../../../../reference/runtime/sand-eval-runner.cjs#L495205-L495207) | `FunctionDeclaration` | no | `rawId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225981-225983](../../../../../../reference/runtime/host-main.cjs#L225981-L225983) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:495205-495207](../../../../../../reference/runtime/sand-eval-runner.cjs#L495205-L495207) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225981

Calls written directly in this body: `MCP_LISTING_SERVER_ID_PATTERN.test`, `rawId.trim`.

SHA-256 of the source span: `6b44ef1f457fd24d480b6704d3c141c2b69c56d358572c028461a4884acac7bb`.

### evaluation:495205

Calls written directly in this body: `MCP_LISTING_SERVER_ID_PATTERN.test`, `rawId.trim`.

SHA-256 of the source span: `6b44ef1f457fd24d480b6704d3c141c2b69c56d358572c028461a4884acac7bb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
