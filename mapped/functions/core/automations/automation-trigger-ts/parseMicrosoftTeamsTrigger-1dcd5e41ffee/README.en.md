# `parseMicrosoftTeamsTrigger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716164-716191](../../../../../../reference/runtime/host-main.cjs#L716164-L716191) | `FunctionDeclaration` | no | `value` |
| [evaluation:527847-527874](../../../../../../reference/runtime/sand-eval-runner.cjs#L527847-L527874) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716164-716191](../../../../../../reference/runtime/host-main.cjs#L716164-L716191) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:527847-527874](../../../../../../reference/runtime/sand-eval-runner.cjs#L527847-L527874) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:716164

Calls written directly in this body: `clampLine`, `normalizeScopeToken`, `parseStringList`, `triggerParseFailure`.

Assignment or increment targets: `teamIds`.

SHA-256 of the source span: `6d0d6efcc70d8ec885e2068b8c6c7159d22adb8ca2796141a2bc001e329f4aa8`.

### evaluation:527847

Calls written directly in this body: `clampLine`, `normalizeScopeToken`, `parseStringList`, `triggerParseFailure`.

Assignment or increment targets: `teamIds`.

SHA-256 of the source span: `6d0d6efcc70d8ec885e2068b8c6c7159d22adb8ca2796141a2bc001e329f4aa8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
