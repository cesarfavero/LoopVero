# `afterAbort`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/run.ts` · [Module README](../../../../modules/evaluation/run-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:630217-630222](../../../../../reference/runtime/sand-eval-runner.cjs#L630217-L630222) | `FunctionDeclaration` | no | `signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630217-630222](../../../../../reference/runtime/sand-eval-runner.cjs#L630217-L630222) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:630217

Calls written directly in this body: `new Promise`.

SHA-256 of the source span: `5fa2a17ee08b7dd12607db2b79658fbf801d423871eff0262d2d057c2c753c76`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
