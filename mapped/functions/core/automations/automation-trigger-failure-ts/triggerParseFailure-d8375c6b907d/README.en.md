# `triggerParseFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger-failure.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-failure-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715557-715559](../../../../../../reference/runtime/host-main.cjs#L715557-L715559) | `FunctionDeclaration` | no | `family, reason` |
| [evaluation:527664-527666](../../../../../../reference/runtime/sand-eval-runner.cjs#L527664-L527666) | `FunctionDeclaration` | no | `family, reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715557-715559](../../../../../../reference/runtime/host-main.cjs#L715557-L715559) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527664-527666](../../../../../../reference/runtime/sand-eval-runner.cjs#L527664-L527666) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:715557

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `dfed20503bc760595651d780898d2efdabecc40d744bea6a14ed0aa56c401dc2`.

### evaluation:527664

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `dfed20503bc760595651d780898d2efdabecc40d744bea6a14ed0aa56c401dc2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
