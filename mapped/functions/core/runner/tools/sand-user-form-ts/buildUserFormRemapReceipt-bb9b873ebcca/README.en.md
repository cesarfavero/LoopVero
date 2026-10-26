# `buildUserFormRemapReceipt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-user-form.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-user-form-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725798-725829](../../../../../../../reference/runtime/host-main.cjs#L725798-L725829) | `FunctionDeclaration` | no | `outcome` |
| [evaluation:550179-550210](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550179-L550210) | `FunctionDeclaration` | no | `outcome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725798-725829](../../../../../../../reference/runtime/host-main.cjs#L725798-L725829) | 6 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:550179-550210](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550179-L550210) | 6 | 0 | 0 | 3 | 0 | 0 |

### host:725798

Calls written directly in this body: `.join`, `outcome.heldFieldIds.map`, `outcome.notRemappedFieldIds.map`, `outcome.outcomes.map`, `outcome.outcomes.some`, `outcome.unknownFieldIds.map`.

SHA-256 of the source span: `71a2f5e991c56a58c4be111f22fca03e35e495f23f7984d419adc1ecef7cbf1c`.

### evaluation:550179

Calls written directly in this body: `.join`, `outcome.heldFieldIds.map`, `outcome.notRemappedFieldIds.map`, `outcome.outcomes.map`, `outcome.outcomes.some`, `outcome.unknownFieldIds.map`.

SHA-256 of the source span: `71a2f5e991c56a58c4be111f22fca03e35e495f23f7984d419adc1ecef7cbf1c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
