# `logReminderShimOnSettle/fire`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/send-message-reminder-middleware.ts` · [Module README](../../../../../modules/core/runner/send-message-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:483168-483168](../../../../../../reference/runtime/sand-eval-runner.cjs#L483168-L483168) | `ArrowFunctionExpression` | no | `nextStep` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483168-483168](../../../../../../reference/runtime/sand-eval-runner.cjs#L483168-L483168) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:483168 uses an implicit arrow-function return.

### evaluation:483168

Calls written directly in this body: `logShimFiring`, `shim.applied`.

SHA-256 of the source span: `ce375f51685d4c37394f151a23c94812c3880b86cf89b93de60c38f384d797e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
