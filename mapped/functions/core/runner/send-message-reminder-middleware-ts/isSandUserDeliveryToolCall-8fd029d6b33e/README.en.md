# `isSandUserDeliveryToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/send-message-reminder-middleware.ts` · [Module README](../../../../../modules/core/runner/send-message-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:483064-483066](../../../../../../reference/runtime/sand-eval-runner.cjs#L483064-L483066) | `FunctionDeclaration` | no | `part` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483064-483066](../../../../../../reference/runtime/sand-eval-runner.cjs#L483064-L483066) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:483064

Calls written directly in this body: `invokesFirstPartyTool`.

SHA-256 of the source span: `768f5e533b11fa57509d1fa19cb0385d2de65e4cb81f1efe3d42c99369cc4c7c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
