# `automationNoticesToRaise`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-notices.ts` · [Module README](../../../../../modules/core/automations/automation-notices-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:527233-527238](../../../../../../reference/runtime/sand-eval-runner.cjs#L527233-L527238) | `FunctionDeclaration` | no | `automation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:527233-527238](../../../../../../reference/runtime/sand-eval-runner.cjs#L527233-L527238) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:527233

Calls written directly in this body: `SAND_AUTOMATION_NOTICES.filter`.

SHA-256 of the source span: `34305ea1994c1154455d0c9d47b40fb9d4cc9750ef213b1f99ca69e2733c2b03`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
