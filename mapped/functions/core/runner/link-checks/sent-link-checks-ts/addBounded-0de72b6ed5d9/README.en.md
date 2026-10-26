# `addBounded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/link-checks/sent-link-checks.ts` · [Module README](../../../../../../modules/core/runner/link-checks/sent-link-checks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583462-583469](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583462-L583469) | `FunctionDeclaration` | no | `set3, value, max` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583462-583469](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583462-L583469) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583462

Calls written directly in this body: `.next`, `set3.add`, `set3.delete`, `set3.has`, `set3.values`.

SHA-256 of the source span: `d52bfd13f4e2f21fcd740810b9eb5699f7a9160c9e827c727a20ea9278d648ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
