# `describeFailureClasses`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/budgets-recovery/README.en.md).

**Module:** `core/runner/turn-budget/tool-failure-breaker.ts` · [Module README](../../../../../../modules/core/runner/turn-budget/tool-failure-breaker-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590446-590453](../../../../../../../reference/runtime/sand-eval-runner.cjs#L590446-L590453) | `FunctionDeclaration` | no | `failures2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590446-590453](../../../../../../../reference/runtime/sand-eval-runner.cjs#L590446-L590453) | 0 | 1 | 0 | 1 | 0 | 0 |

### evaluation:590446

Calls written directly in this body: `.join`, `.map`, `counts.get`, `counts.set`, `failureClassOf`, `new Map`.

Assignment or increment targets: `index`.

SHA-256 of the source span: `45b1b9e672592489b268a4cf37ca36bbc78458fb83b401850987d92d52ca6a41`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
