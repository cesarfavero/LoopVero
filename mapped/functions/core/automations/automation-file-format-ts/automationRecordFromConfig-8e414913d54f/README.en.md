# `automationRecordFromConfig`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-file-format.ts` · [Module README](../../../../../modules/core/automations/automation-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716712-716734](../../../../../../reference/runtime/host-main.cjs#L716712-L716734) | `FunctionDeclaration` | no | `args` |
| [evaluation:627426-627448](../../../../../../reference/runtime/sand-eval-runner.cjs#L627426-L627448) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716712-716734](../../../../../../reference/runtime/host-main.cjs#L716712-L716734) | 5 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627426-627448](../../../../../../reference/runtime/sand-eval-runner.cjs#L627426-L627448) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:716712

Calls written directly in this body: `describeTrigger`, `triggerSchedule`.

SHA-256 of the source span: `839205ec12e4dccb274932169b8e8cc27d4622dec7978219b784960d85ee26fc`.

### evaluation:627426

Calls written directly in this body: `describeTrigger`, `triggerSchedule`.

SHA-256 of the source span: `839205ec12e4dccb274932169b8e8cc27d4622dec7978219b784960d85ee26fc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
