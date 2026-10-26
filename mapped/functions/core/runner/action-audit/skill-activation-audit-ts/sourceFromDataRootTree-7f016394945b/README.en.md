# `sourceFromDataRootTree`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/action-audit/skill-activation-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/skill-activation-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534900-534905](../../../../../../../reference/runtime/sand-eval-runner.cjs#L534900-L534905) | `FunctionDeclaration` | no | `collapsedPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534900-534905](../../../../../../../reference/runtime/sand-eval-runner.cjs#L534900-L534905) | 3 | 0 | 0 | 4 | 0 | 0 |

### evaluation:534900

Calls written directly in this body: `collapsedPath.startsWith`.

SHA-256 of the source span: `4320215b1d770a033e62ec6a422bc928a9673b2dfce75961a52d0b12d2782536`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
