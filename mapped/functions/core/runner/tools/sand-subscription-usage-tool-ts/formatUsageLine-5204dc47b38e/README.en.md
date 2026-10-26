# `formatUsageLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-subscription-usage-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subscription-usage-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766611-766617](../../../../../../../reference/runtime/host-main.cjs#L766611-L766617) | `FunctionDeclaration` | no | `usage` |
| [evaluation:562124-562130](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562124-L562130) | `FunctionDeclaration` | no | `usage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766611-766617](../../../../../../../reference/runtime/host-main.cjs#L766611-L766617) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:562124-562130](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562124-L562130) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:766611

Calls written directly in this body: `Math.min`, `Number`, `usage.usagePercent.toFixed`.

SHA-256 of the source span: `3a3a5a6dc91c18731e1e5b893851752c6e4f51d206844b5e1f39d131a14bd422`.

### evaluation:562124

Calls written directly in this body: `Math.min`, `Number`, `usage.usagePercent.toFixed`.

SHA-256 of the source span: `3a3a5a6dc91c18731e1e5b893851752c6e4f51d206844b5e1f39d131a14bd422`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
