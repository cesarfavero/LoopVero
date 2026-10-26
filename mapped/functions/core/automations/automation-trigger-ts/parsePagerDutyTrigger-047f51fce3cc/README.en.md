# `parsePagerDutyTrigger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716241-716258](../../../../../../reference/runtime/host-main.cjs#L716241-L716258) | `FunctionDeclaration` | no | `value` |
| [evaluation:527924-527941](../../../../../../reference/runtime/sand-eval-runner.cjs#L527924-L527941) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716241-716258](../../../../../../reference/runtime/host-main.cjs#L716241-L716258) | 7 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:527924-527941](../../../../../../reference/runtime/sand-eval-runner.cjs#L527924-L527941) | 7 | 0 | 0 | 3 | 0 | 0 |

### host:716241

Calls written directly in this body: `PAGERDUTY_EVENT_CASES.join`, `isUnknownRecord2`, `parseStringList`, `triggerParseFailure`.

SHA-256 of the source span: `2a1128a56516c8c7e02ffe8a83f22b0c88ff9bfd3585cd1626ea9a117d0e7d07`.

### evaluation:527924

Calls written directly in this body: `PAGERDUTY_EVENT_CASES.join`, `isUnknownRecord2`, `parseStringList`, `triggerParseFailure`.

SHA-256 of the source span: `2a1128a56516c8c7e02ffe8a83f22b0c88ff9bfd3585cd1626ea9a117d0e7d07`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
