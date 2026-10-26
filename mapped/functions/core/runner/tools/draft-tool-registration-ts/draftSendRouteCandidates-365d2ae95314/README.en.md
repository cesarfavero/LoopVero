# `draftSendRouteCandidates`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756027-756062](../../../../../../../reference/runtime/host-main.cjs#L756027-L756062) | `FunctionDeclaration` | yes | `ctx, mcp, mcpConfigJson, route` |
| [evaluation:541915-541950](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541915-L541950) | `FunctionDeclaration` | yes | `ctx, mcp, mcpConfigJson, route` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756027-756062](../../../../../../../reference/runtime/host-main.cjs#L756027-L756062) | 6 | 0 | 1 | 7 | 0 | 0 |
| [evaluation:541915-541950](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541915-L541950) | 6 | 0 | 1 | 7 | 0 | 0 |

### host:756027

Calls written directly in this body: `.map`, `emailConnectorOf`, `hostOf2`, `isGrokGmailRoute`, `mcp.getTools`, `new Set`, `tools.filter`, `tools.some`.

SHA-256 of the source span: `e9b87ad67b37ec2775e5ad3c34aab7625969d55c92e70b73e967f8182bdf4ebc`.

### evaluation:541915

Calls written directly in this body: `.map`, `emailConnectorOf`, `hostOf2`, `isGrokGmailRoute`, `mcp.getTools`, `new Set`, `tools.filter`, `tools.some`.

SHA-256 of the source span: `e9b87ad67b37ec2775e5ad3c34aab7625969d55c92e70b73e967f8182bdf4ebc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
