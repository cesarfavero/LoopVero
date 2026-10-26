# `earliestAutomationNextRunAt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-file-format.ts` · [Module README](../../../../../modules/core/automations/automation-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716701-716711](../../../../../../reference/runtime/host-main.cjs#L716701-L716711) | `FunctionDeclaration` | no | `config2, timeZone` |
| [evaluation:627415-627425](../../../../../../reference/runtime/sand-eval-runner.cjs#L627415-L627425) | `FunctionDeclaration` | no | `config2, timeZone` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716701-716711](../../../../../../reference/runtime/host-main.cjs#L716701-L716711) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:627415-627425](../../../../../../reference/runtime/sand-eval-runner.cjs#L627415-L627425) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:716701

Calls written directly in this body: `automationAnchor`, `computeNextRunAt`, `triggerFiringSchedules`.

Assignment or increment targets: `earliest`.

SHA-256 of the source span: `c5808af4674d2885c19bdd627da19d70d8354ad6c66583f7b1ead51549dc15eb`.

### evaluation:627415

Calls written directly in this body: `automationAnchor`, `computeNextRunAt`, `triggerFiringSchedules`.

Assignment or increment targets: `earliest`.

SHA-256 of the source span: `c5808af4674d2885c19bdd627da19d70d8354ad6c66583f7b1ead51549dc15eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
