# `renderTriggerParseFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger-failure.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-failure-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715563-715568](../../../../../../reference/runtime/host-main.cjs#L715563-L715568) | `FunctionDeclaration` | no | `failure3` |
| [evaluation:527670-527675](../../../../../../reference/runtime/sand-eval-runner.cjs#L527670-L527675) | `FunctionDeclaration` | no | `failure3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715563-715568](../../../../../../reference/runtime/host-main.cjs#L715563-L715568) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527670-527675](../../../../../../reference/runtime/sand-eval-runner.cjs#L527670-L527675) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:715563

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `subject`.

SHA-256 of the source span: `6a6b338316077dbf9067dd1e34de37d61877b4ff428865c3666a45715476c806`.

### evaluation:527670

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `subject`.

SHA-256 of the source span: `6a6b338316077dbf9067dd1e34de37d61877b4ff428865c3666a45715476c806`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
