# `isGithubEventKind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716003-716005](../../../../../../reference/runtime/host-main.cjs#L716003-L716005) | `FunctionDeclaration` | no | `value` |
| [evaluation:527686-527688](../../../../../../reference/runtime/sand-eval-runner.cjs#L527686-L527688) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716003-716005](../../../../../../reference/runtime/host-main.cjs#L716003-L716005) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527686-527688](../../../../../../reference/runtime/sand-eval-runner.cjs#L527686-L527688) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:716003

Calls written directly in this body: `GITHUB_EVENT_KINDS.some`.

SHA-256 of the source span: `d35ff9540b3bf401abaf885add3f88ec3ffb42ccd7ebca0d8f6c048d100e14ac`.

### evaluation:527686

Calls written directly in this body: `GITHUB_EVENT_KINDS.some`.

SHA-256 of the source span: `d35ff9540b3bf401abaf885add3f88ec3ffb42ccd7ebca0d8f6c048d100e14ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
