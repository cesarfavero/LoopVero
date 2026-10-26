# `inAppVariantsOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742000-742007](../../../../../../../reference/runtime/host-main.cjs#L742000-L742007) | `FunctionDeclaration` | no | `withOpen, withAct, core2` |
| [evaluation:482947-482954](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482947-L482954) | `FunctionDeclaration` | no | `withOpen, withAct, core2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742000-742007](../../../../../../../reference/runtime/host-main.cjs#L742000-L742007) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:482947-482954](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482947-L482954) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742000

Calls written directly in this body: `external_exports2.object`, `omitInAppFields`.

SHA-256 of the source span: `0146c73de83cb8c91762b5c7346eb3768f63aa114c5cd0e2549b61f1312a7151`.

### evaluation:482947

Calls written directly in this body: `external_exports3.object`, `omitInAppFields`.

SHA-256 of the source span: `0646d627653767b75a04af1addafb3b6511c7823b18311d03508adb7afc721f1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
