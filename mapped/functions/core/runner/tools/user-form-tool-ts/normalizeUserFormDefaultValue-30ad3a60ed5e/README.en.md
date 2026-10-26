# `normalizeUserFormDefaultValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726317-726353](../../../../../../../reference/runtime/host-main.cjs#L726317-L726353) | `FunctionDeclaration` | no | `field, defaultValue` |
| [evaluation:560932-560968](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560932-L560968) | `FunctionDeclaration` | no | `field, defaultValue` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726317-726353](../../../../../../../reference/runtime/host-main.cjs#L726317-L726353) | 9 | 0 | 0 | 3 | 6 | 0 |
| [evaluation:560932-560968](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560932-L560968) | 9 | 0 | 0 | 3 | 6 | 0 |

### host:726317

Calls written directly in this body: `.some`, `/[\r\n]/.test`, `Number`, `Number.isFinite`, `defaultValue.trim`, `isCalendarDate2`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `3561b62d5dff4e6d6894626b92a30fe947c025e34a5d7e7711ef0d525b0e957f`.

### evaluation:560932

Calls written directly in this body: `.some`, `/[\r\n]/.test`, `Number`, `Number.isFinite`, `defaultValue.trim`, `isCalendarDate2`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `3561b62d5dff4e6d6894626b92a30fe947c025e34a5d7e7711ef0d525b0e957f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
