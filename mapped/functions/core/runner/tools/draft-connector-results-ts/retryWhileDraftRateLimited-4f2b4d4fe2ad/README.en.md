# `retryWhileDraftRateLimited`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733015-733038](../../../../../../../reference/runtime/host-main.cjs#L733015-L733038) | `FunctionDeclaration` | yes | `args` |
| [evaluation:540537-540560](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540537-L540560) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733015-733038](../../../../../../../reference/runtime/host-main.cjs#L733015-L733038) | 3 | 1 | 3 | 2 | 0 | 0 |
| [evaluation:540537-540560](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540537-L540560) | 3 | 1 | 3 | 2 | 0 | 0 |

### host:733015

Calls written directly in this body: `args.onRetry`, `args.rateLimitOf`, `args.run`, `delay5.dispose`, `retry2.now`, `retry2.wait`.

Assignment or increment targets: `attempt`.

SHA-256 of the source span: `4caef311847df1f340b32be2d5565ea170e38d20c466e3790449e9069612bda4`.

### evaluation:540537

Calls written directly in this body: `args.onRetry`, `args.rateLimitOf`, `args.run`, `delay3.dispose`, `retry2.now`, `retry2.wait`.

Assignment or increment targets: `attempt`.

SHA-256 of the source span: `0bf49d2242a8cac2718f205bf06a75eec34be67f798da3f27dc6c6ff59eef568`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
