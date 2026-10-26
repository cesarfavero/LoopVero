# `slugifyAutomationName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation.ts` · [Module README](../../../../../modules/core/automations/automation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715077-715079](../../../../../../reference/runtime/host-main.cjs#L715077-L715079) | `FunctionDeclaration` | no | `name18` |
| [evaluation:527200-527202](../../../../../../reference/runtime/sand-eval-runner.cjs#L527200-L527202) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715077-715079](../../../../../../reference/runtime/host-main.cjs#L715077-L715079) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527200-527202](../../../../../../reference/runtime/sand-eval-runner.cjs#L527200-L527202) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:715077

Calls written directly in this body: `slugifyName`.

SHA-256 of the source span: `5ae6a6591ebfdc7d16e1881a6fb4f71b6d116a13f76c38c899bcc0091d956e53`.

### evaluation:527200

Calls written directly in this body: `slugifyName`.

SHA-256 of the source span: `5ae6a6591ebfdc7d16e1881a6fb4f71b6d116a13f76c38c899bcc0091d956e53`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
