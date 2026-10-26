# `withPlaywrightBoxTimingStripped/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/playwright-box-timing.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/playwright-box-timing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743125-743135](../../../../../../../../reference/runtime/host-main.cjs#L743125-L743135) | `FunctionExpression` | yes | `ctx, args, options2` |
| [evaluation:515976-515986](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515976-L515986) | `FunctionExpression` | yes | `ctx, args, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743125-743135](../../../../../../../../reference/runtime/host-main.cjs#L743125-L743135) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:515976-515986](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515976-L515986) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:743125

Calls written directly in this body: `ctx.get`, `executor.execute`, `inner`, `performance.now`, `takePlaywrightBoxTiming`.

SHA-256 of the source span: `cabe38da8279cb0b2ae5ddd813df8ad629a04313ab9098de7929cd491dc99156`.

### evaluation:515976

Calls written directly in this body: `ctx.get`, `executor.execute`, `inner`, `performance.now`, `takePlaywrightBoxTiming`.

SHA-256 of the source span: `cabe38da8279cb0b2ae5ddd813df8ad629a04313ab9098de7929cd491dc99156`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
