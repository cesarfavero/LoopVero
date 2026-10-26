# `validateAuthorizationUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-catalog-cache.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-catalog-cache-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685474-685500](../../../../../../../reference/runtime/host-main.cjs#L685474-L685500) | `FunctionDeclaration` | no | `authUrl, serverUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685474-685500](../../../../../../../reference/runtime/host-main.cjs#L685474-L685500) | 5 | 0 | 0 | 5 | 0 | 2 |

### host:685474

Calls written directly in this body: `allowsCleartextTailnetOAuthEndpoint`, `authUrl.trim`, `isLoopbackHostname`, `new URL`, `parsed2.toString`.

Assignment or increment targets: `parsed2`.

SHA-256 of the source span: `999f528dca1e2837d082422c93d734fc2cea79453c4e394e9e1a94fe418c9ff3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
