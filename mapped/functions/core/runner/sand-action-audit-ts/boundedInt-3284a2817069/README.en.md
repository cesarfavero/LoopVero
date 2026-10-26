# `boundedInt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:512382-512386](../../../../../../reference/runtime/sand-eval-runner.cjs#L512382-L512386) | `FunctionDeclaration` | no | `raw, max` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512382-512386](../../../../../../reference/runtime/sand-eval-runner.cjs#L512382-L512386) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:512382

Calls written directly in this body: `Number`, `Number.isInteger`.

SHA-256 of the source span: `9c353c8a29413e7b3a2a1327f4b4c2ea35d016b3aa22d330b8d954637b9550bf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
