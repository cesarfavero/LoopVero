# `createStartOfTurnAckReminderMiddleware`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/start-of-turn-ack-reminder-middleware.ts` · [Module README](../../../../../modules/core/runner/start-of-turn-ack-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587090-587095](../../../../../../reference/runtime/sand-eval-runner.cjs#L587090-L587095) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587090-587095](../../../../../../reference/runtime/sand-eval-runner.cjs#L587090-L587095) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587090

Calls written directly in this body: `buildReminderMessage`.

SHA-256 of the source span: `5c743282244035075c711e77ecff83ad24c9a6d6bb6ea2b47e7f0d7557d97035`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
