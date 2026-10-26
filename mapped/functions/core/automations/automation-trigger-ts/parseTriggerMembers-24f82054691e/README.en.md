# `parseTriggerMembers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716336-716362](../../../../../../reference/runtime/host-main.cjs#L716336-L716362) | `FunctionDeclaration` | no | `entries` |
| [evaluation:528019-528045](../../../../../../reference/runtime/sand-eval-runner.cjs#L528019-L528045) | `FunctionDeclaration` | no | `entries` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716336-716362](../../../../../../reference/runtime/host-main.cjs#L716336-L716362) | 5 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:528019-528045](../../../../../../reference/runtime/sand-eval-runner.cjs#L528019-L528045) | 5 | 1 | 0 | 3 | 0 | 0 |

### host:716336

Calls written directly in this body: `isTriggerParseFailure`, `members2.find`, `members2.push`, `members2.some`, `parseTriggerMember`, `triggerFromList`, `triggerParseFailure`.

Assignment or increment targets: `firstFailure`.

SHA-256 of the source span: `92cd951374ae5966a5753886a246ffefcefbfefe98bbdc932160edb7077c3846`.

### evaluation:528019

Calls written directly in this body: `isTriggerParseFailure`, `members2.find`, `members2.push`, `members2.some`, `parseTriggerMember`, `triggerFromList`, `triggerParseFailure`.

Assignment or increment targets: `firstFailure`.

SHA-256 of the source span: `3d9b6e53b1a6974170fed3dc90a23802e323bd71dcbd0342180e981b98ead14d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
