# `createActionAuditSequencer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/action-audit.ts` · [Module README](../../../../../modules/core/runner/action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:484737-484756](../../../../../../reference/runtime/sand-eval-runner.cjs#L484737-L484756) | `FunctionDeclaration` | no | `options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484737-484756](../../../../../../reference/runtime/sand-eval-runner.cjs#L484737-L484756) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:484737

Calls written directly in this body: `Math.floor`, `Math.max`, `new Map`.

SHA-256 of the source span: `fa856811170da4bf322da52eddde729d32d080cf26a5bc439d97fc478aff40c0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
