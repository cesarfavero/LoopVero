# `sanitizeCrossClockDurationMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/clock-skew-guard.ts` · [Module README](../../../../../modules/core/runner/clock-skew-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588537-588548](../../../../../../reference/runtime/sand-eval-runner.cjs#L588537-L588548) | `FunctionDeclaration` | no | `rawDeltaMs, ceilingMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588537-588548](../../../../../../reference/runtime/sand-eval-runner.cjs#L588537-L588548) | 3 | 0 | 0 | 4 | 0 | 0 |

### evaluation:588537

Calls written directly in this body: `Math.round`, `Number.isFinite`.

SHA-256 of the source span: `34ad462d89538bb12fbb1a3924bde2f5062dfa71b5ea06bda86d75beb06b33ee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
