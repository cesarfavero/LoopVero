# `formatCycleUsage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-subscription-usage-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subscription-usage-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766641-766650](../../../../../../../reference/runtime/host-main.cjs#L766641-L766650) | `FunctionDeclaration` | no | `usage, nowMs2` |
| [evaluation:562154-562163](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562154-L562163) | `FunctionDeclaration` | no | `usage, nowMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766641-766650](../../../../../../../reference/runtime/host-main.cjs#L766641-L766650) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:562154-562163](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562154-L562163) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:766641

Calls written directly in this body: `.filter`, `formatOnDemandLine`, `formatPlanLine`, `formatResetLine`, `formatTrialLine`, `formatUsageLine`, `lines2.join`.

SHA-256 of the source span: `d7818019605d15573be76016b614216473fdcae783fe41b3cc0cbdf9f9d6a2ac`.

### evaluation:562154

Calls written directly in this body: `.filter`, `formatOnDemandLine`, `formatPlanLine`, `formatResetLine`, `formatTrialLine`, `formatUsageLine`, `lines2.join`.

SHA-256 of the source span: `fa1653e0a0ce413ae91cedc7592fd124d5125aa080e3c4ddfdfd673918491f48`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
