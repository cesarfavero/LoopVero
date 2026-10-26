# `isDueDate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/ios-write-reminders.ts` · [Module README](../../../../../modules/core/device-local-tools/ios-write-reminders-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758905-758911](../../../../../../reference/runtime/host-main.cjs#L758905-L758911) | `FunctionDeclaration` | no | `value` |
| [evaluation:549065-549071](../../../../../../reference/runtime/sand-eval-runner.cjs#L549065-L549071) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758905-758911](../../../../../../reference/runtime/host-main.cjs#L758905-L758911) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:549065-549071](../../../../../../reference/runtime/sand-eval-runner.cjs#L549065-L549071) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:758905

Calls written directly in this body: `Date.UTC`, `Date.parse`, `ISO_DATE_OR_DATE_TIME.exec`, `Number`, `Number.isNaN`, `date6.getUTCDate`, `date6.getUTCMonth`, `new Date`.

SHA-256 of the source span: `2bfd2e94ba413000fba9b5ba005c1c8392ba95db8fca25e9ff4662a457bb5878`.

### evaluation:549065

Calls written directly in this body: `Date.UTC`, `Date.parse`, `ISO_DATE_OR_DATE_TIME.exec`, `Number`, `Number.isNaN`, `date6.getUTCDate`, `date6.getUTCMonth`, `new Date`.

SHA-256 of the source span: `2bfd2e94ba413000fba9b5ba005c1c8392ba95db8fca25e9ff4662a457bb5878`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
