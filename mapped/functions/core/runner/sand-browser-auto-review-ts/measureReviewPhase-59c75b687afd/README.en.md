# `measureReviewPhase`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-browser-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699813-699831](../../../../../../reference/runtime/host-main.cjs#L699813-L699831) | `FunctionDeclaration` | yes | `options2, phase, execution, run, outcomeOf2 = () => "ok"` |
| [evaluation:513569-513587](../../../../../../reference/runtime/sand-eval-runner.cjs#L513569-L513587) | `FunctionDeclaration` | yes | `options2, phase, execution, run, outcomeOf2 = () => "ok"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699813-699831](../../../../../../reference/runtime/host-main.cjs#L699813-L699831) | 0 | 0 | 1 | 1 | 1 | 1 |
| [evaluation:513569-513587](../../../../../../reference/runtime/sand-eval-runner.cjs#L513569-L513587) | 0 | 0 | 1 | 1 | 1 | 1 |

### host:699813

Calls written directly in this body: `notifyReviewPhase`, `outcomeOf2`, `performance.now`, `reviewPhaseOutcome`, `run`.

Assignment or increment targets: `outcome`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `b835baee008ec453a8d925d3170ec0216deb4f8ff5be5c1c408424d45c5e66ea`.

### evaluation:513569

Calls written directly in this body: `notifyReviewPhase`, `outcomeOf2`, `performance.now`, `reviewPhaseOutcome`, `run`.

Assignment or increment targets: `outcome`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `0375a20475f16c512ef8cda15e56ff75671256738cd02aab13f125fca0d9c4d6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
