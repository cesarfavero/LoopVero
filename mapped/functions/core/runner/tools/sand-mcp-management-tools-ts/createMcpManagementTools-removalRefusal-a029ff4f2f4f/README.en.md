# `createMcpManagementTools/removalRefusal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780223-780229](../../../../../../../reference/runtime/host-main.cjs#L780223-L780229) | `ArrowFunctionExpression` | no | `intent, target` |
| [evaluation:580468-580474](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580468-L580474) | `ArrowFunctionExpression` | no | `intent, target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780223-780229](../../../../../../../reference/runtime/host-main.cjs#L780223-L780229) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:580468-580474](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580468-L580474) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:780223

Calls written directly in this body: `intent.turnRequestSource`, `isUserStartedTurn`, `repairs.repairFor`.

SHA-256 of the source span: `490aa25e2fb5cf1ca920481bb015f176d86fe93ede2e3e9eb42f8586a7fdca33`.

### evaluation:580468

Calls written directly in this body: `intent.turnRequestSource`, `isUserStartedTurn`, `repairs.repairFor`.

SHA-256 of the source span: `490aa25e2fb5cf1ca920481bb015f176d86fe93ede2e3e9eb42f8586a7fdca33`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
