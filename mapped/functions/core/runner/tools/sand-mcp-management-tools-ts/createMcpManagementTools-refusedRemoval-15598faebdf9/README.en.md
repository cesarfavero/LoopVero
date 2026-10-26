# `createMcpManagementTools/refusedRemoval`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780230-780242](../../../../../../../reference/runtime/host-main.cjs#L780230-L780242) | `ArrowFunctionExpression` | no | `ctx, target` |
| [evaluation:580475-580487](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580475-L580487) | `ArrowFunctionExpression` | no | `ctx, target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780230-780242](../../../../../../../reference/runtime/host-main.cjs#L780230-L780242) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:580475-580487](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580475-L580487) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:780230

Calls written directly in this body: `describeRemovalRefusal`, `intent.enforced`, `removalGuardDecisions.increment`, `removalRefusal`.

SHA-256 of the source span: `8edc7d6522b0828d9cfd416be8244d3608cf95e3e770b7d774427a61910ed249`.

### evaluation:580475

Calls written directly in this body: `describeRemovalRefusal`, `intent.enforced`, `removalGuardDecisions.increment`, `removalRefusal`.

SHA-256 of the source span: `8edc7d6522b0828d9cfd416be8244d3608cf95e3e770b7d774427a61910ed249`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
