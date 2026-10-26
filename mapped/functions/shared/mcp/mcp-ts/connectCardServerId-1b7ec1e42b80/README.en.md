# `connectCardServerId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp.ts` · [Module README](../../../../../modules/shared/mcp/mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225988-225991](../../../../../../reference/runtime/host-main.cjs#L225988-L225991) | `FunctionDeclaration` | no | `server` |
| [evaluation:495212-495215](../../../../../../reference/runtime/sand-eval-runner.cjs#L495212-L495215) | `FunctionDeclaration` | no | `server` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225988-225991](../../../../../../reference/runtime/host-main.cjs#L225988-L225991) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:495212-495215](../../../../../../reference/runtime/sand-eval-runner.cjs#L495212-L495215) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:225988

Calls written directly in this body: `isUnstoredMcpListingServerId`, `server.serverIdentifier.trim`.

SHA-256 of the source span: `c75cde1c7e210273280d66d2ec2630d95dca3823a3fba58310fc5db232c529e2`.

### evaluation:495212

Calls written directly in this body: `isUnstoredMcpListingServerId`, `server.serverIdentifier.trim`.

SHA-256 of the source span: `c75cde1c7e210273280d66d2ec2630d95dca3823a3fba58310fc5db232c529e2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
