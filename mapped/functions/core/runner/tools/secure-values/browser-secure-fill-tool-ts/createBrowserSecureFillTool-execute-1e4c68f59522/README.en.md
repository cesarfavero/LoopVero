# `createBrowserSecureFillTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/secure-values/browser-secure-fill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/browser-secure-fill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766827-767139](../../../../../../../../reference/runtime/host-main.cjs#L766827-L767139) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:562346-562658](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562346-L562658) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766827-767139](../../../../../../../../reference/runtime/host-main.cjs#L766827-L767139) | 3 | 2 | 1 | 1 | 0 | 0 |
| [evaluation:562346-562658](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562346-L562658) | 3 | 2 | 1 | 1 | 0 | 0 |

### host:766827

Calls written directly in this body: `.end`, `.join`, `.setAttribute`, `Math.max`, `String`, `cachedUntilPageWrite`, `callOutcome`, `ctx.withName`, `fillAttempts.increment`, `fillCalls.increment`, `fillLatency.histogram`, `getSpan2`, `outcomes.filter`, `outcomes.map`, `outcomes.push`, `outcomes.some`, `pairCountBucket`, `performance.now`, `withSpan`.

SHA-256 of the source span: `4ce6e932bdd5eecf2bfa729359c70f9611f0169ac311ef2da623aaf609ee285b`.

### evaluation:562346

Calls written directly in this body: `.end`, `.join`, `.setAttribute`, `Math.max`, `String`, `cachedUntilPageWrite`, `callOutcome`, `ctx.withName`, `fillAttempts.increment`, `fillCalls.increment`, `fillLatency.histogram`, `getSpan2`, `outcomes.filter`, `outcomes.map`, `outcomes.push`, `outcomes.some`, `pairCountBucket`, `performance.now`, `withSpan`.

SHA-256 of the source span: `4ce6e932bdd5eecf2bfa729359c70f9611f0169ac311ef2da623aaf609ee285b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
