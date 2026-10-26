# `boxLocalWallClock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682369-682378](../../../../../../reference/runtime/host-main.cjs#L682369-L682378) | `FunctionDeclaration` | no | `date6` |
| [evaluation:526583-526592](../../../../../../reference/runtime/sand-eval-runner.cjs#L526583-L526592) | `FunctionDeclaration` | no | `date6` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682369-682378](../../../../../../reference/runtime/host-main.cjs#L682369-L682378) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526583-526592](../../../../../../reference/runtime/sand-eval-runner.cjs#L526583-L526592) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682369

Calls written directly in this body: `date6.getDate`, `date6.getDay`, `date6.getFullYear`, `date6.getHours`, `date6.getMinutes`, `date6.getMonth`.

SHA-256 of the source span: `a2df5215825ea3ff6403145b80623864903f0a92a48b0154fa0e839769c02849`.

### evaluation:526583

Calls written directly in this body: `date6.getDate`, `date6.getDay`, `date6.getFullYear`, `date6.getHours`, `date6.getMinutes`, `date6.getMonth`.

SHA-256 of the source span: `a2df5215825ea3ff6403145b80623864903f0a92a48b0154fa0e839769c02849`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
