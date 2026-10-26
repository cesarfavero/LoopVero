# `buildTriggerEventContextBlock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:528229-528375](../../../../../../reference/runtime/sand-eval-runner.cjs#L528229-L528375) | `FunctionDeclaration` | no | `event` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528229-528375](../../../../../../reference/runtime/sand-eval-runner.cjs#L528229-L528375) | 42 | 0 | 0 | 9 | 0 | 0 |

### evaluation:528229

Calls written directly in this body: `JSON.stringify`, `escapeEventText`.

SHA-256 of the source span: `886fd68a7f66accca4c34ccdb9a21bcc4a160f43e747c3f549dc309feebf130b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
