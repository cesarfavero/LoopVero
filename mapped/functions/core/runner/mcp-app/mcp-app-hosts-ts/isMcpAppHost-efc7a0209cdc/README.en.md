# `isMcpAppHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/mcp-app/mcp-app-hosts.ts` · [Module README](../../../../../../modules/core/runner/mcp-app/mcp-app-hosts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585501-585505](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585501-L585505) | `FunctionDeclaration` | no | `serverHost, allowedHosts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585501-585505](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585501-L585505) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585501

Calls written directly in this body: `allowedHosts.some`, `serverHost.toLowerCase`.

SHA-256 of the source span: `53bb429feafe71053eda04ed785b1ef6553561bb28715436d64ff2d1ce87b338`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
