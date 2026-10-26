# `cleanupLegacyMcpAuthCredentials`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-cleanup.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-cleanup-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684218-684244](../../../../../../../reference/runtime/host-main.cjs#L684218-L684244) | `FunctionDeclaration` | yes | `rootDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684218-684244](../../../../../../../reference/runtime/host-main.cjs#L684218-L684244) | 3 | 1 | 2 | 4 | 0 | 2 |

### host:684218

Calls written directly in this body: `entries.filter`, `findSystemErrno`, `reportMcpHostEdgeFailure`.

Assignment or increment targets: `entries`, `removedCount`, `sawError`.

SHA-256 of the source span: `45262299ac556d3f790151d6f101707be3f378b72654529f8f06bd43a093c342`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
