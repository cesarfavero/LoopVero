# `buildUserFormUnfillableResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-user-form.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-user-form-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725846-725856](../../../../../../../reference/runtime/host-main.cjs#L725846-L725856) | `FunctionDeclaration` | no | `form, fieldKinds` |
| [evaluation:550215-550225](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550215-L550225) | `FunctionDeclaration` | no | `form, fieldKinds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725846-725856](../../../../../../../reference/runtime/host-main.cjs#L725846-L725856) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:550215-550225](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550215-L550225) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725846

Calls written directly in this body: `.join`, `form.fields.flatMap`.

SHA-256 of the source span: `57a5ce4ce209295a121ca64c551b9abbc56099bd6ccdb88e1c12b6cdeed721c1`.

### evaluation:550215

Calls written directly in this body: `.join`, `form.fields.flatMap`.

SHA-256 of the source span: `57a5ce4ce209295a121ca64c551b9abbc56099bd6ccdb88e1c12b6cdeed721c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
