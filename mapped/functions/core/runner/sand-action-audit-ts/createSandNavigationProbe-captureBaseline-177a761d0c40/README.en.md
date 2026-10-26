# `createSandNavigationProbe/captureBaseline`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:512827-512846](../../../../../../reference/runtime/sand-eval-runner.cjs#L512827-L512846) | `ArrowFunctionExpression` | no | `ctx, remoteAccessor, displayNumber` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512827-512846](../../../../../../reference/runtime/sand-eval-runner.cjs#L512827-L512846) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:512827

Calls written directly in this body: `.catch`, `.finally`, `runProbe`.

Assignment or increment targets: `baselineInFlight`, `baselinePromise`, `inFlight`.

SHA-256 of the source span: `83c75b558ac2ab7b8a8e4fb8219929e1aa8d91cdbe0e00b9b9ccc11f20c804bc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
