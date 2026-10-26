# `formatPlanLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-subscription-usage-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subscription-usage-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766603-766610](../../../../../../../reference/runtime/host-main.cjs#L766603-L766610) | `FunctionDeclaration` | no | `usage` |
| [evaluation:562116-562123](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562116-L562123) | `FunctionDeclaration` | no | `usage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766603-766610](../../../../../../../reference/runtime/host-main.cjs#L766603-L766610) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:562116-562123](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562116-L562123) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:766603

Calls written directly in this body: `formatPlanName`.

SHA-256 of the source span: `fbd5a82a1473364dc34cf521b48d201079b669bcf372f993a6dff294d9e8e449`.

### evaluation:562116

Calls written directly in this body: `formatPlanName`.

SHA-256 of the source span: `fbd5a82a1473364dc34cf521b48d201079b669bcf372f993a6dff294d9e8e449`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
