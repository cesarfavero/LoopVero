# `createCheckSubscriptionUsageTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-subscription-usage-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subscription-usage-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766657-766666](../../../../../../../reference/runtime/host-main.cjs#L766657-L766666) | `ArrowFunctionExpression` | yes | `ctx, _args, d` |
| [evaluation:562170-562179](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562170-L562179) | `ArrowFunctionExpression` | yes | `ctx, _args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766657-766666](../../../../../../../reference/runtime/host-main.cjs#L766657-L766666) | 0 | 0 | 1 | 2 | 0 | 1 |
| [evaluation:562170-562179](../../../../../../../reference/runtime/sand-eval-runner.cjs#L562170-L562179) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:766657

Calls written directly in this body: `Date.now`, `d.getCycleUsage`, `errorLogTag`, `formatCycleUsage`, `logger121.warn`.

Assignment or increment targets: `usage`.

SHA-256 of the source span: `7ff4a6c746f38b44aad6a563afa4a37be4dac1f7050e439bdf723a83b93583fd`.

### evaluation:562170

Calls written directly in this body: `Date.now`, `d.getCycleUsage`, `errorLogTag`, `formatCycleUsage`, `logger94.warn`.

Assignment or increment targets: `usage`.

SHA-256 of the source span: `0b875d68e64682399eef40d7434a700a5ec6bf763eba4bc0980780bdef557eba`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
