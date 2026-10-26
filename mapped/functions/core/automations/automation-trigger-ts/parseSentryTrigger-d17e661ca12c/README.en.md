# `parseSentryTrigger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716222-716240](../../../../../../reference/runtime/host-main.cjs#L716222-L716240) | `FunctionDeclaration` | no | `value` |
| [evaluation:527905-527923](../../../../../../reference/runtime/sand-eval-runner.cjs#L527905-L527923) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716222-716240](../../../../../../reference/runtime/host-main.cjs#L716222-L716240) | 8 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:527905-527923](../../../../../../reference/runtime/sand-eval-runner.cjs#L527905-L527923) | 8 | 0 | 0 | 3 | 0 | 0 |

### host:716222

Calls written directly in this body: `SENTRY_EVENT_CASES.join`, `isUnknownRecord2`, `parseStringList`, `triggerParseFailure`.

SHA-256 of the source span: `5beef7e6e29e41bfe63b1413ada2f7a561fea521e4b6e333539dc8d085f4874d`.

### evaluation:527905

Calls written directly in this body: `SENTRY_EVENT_CASES.join`, `isUnknownRecord2`, `parseStringList`, `triggerParseFailure`.

SHA-256 of the source span: `5beef7e6e29e41bfe63b1413ada2f7a561fea521e4b6e333539dc8d085f4874d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
