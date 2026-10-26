# `restMcpProviderOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/connector-draft-card-reminder.ts` · [Module README](../../../../../../modules/core/runner/reminders/connector-draft-card-reminder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585535-585538](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585535-L585538) | `FunctionDeclaration` | no | `serverHost` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585535-585538](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585535-L585538) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:585535

Calls written directly in this body: `provider.split`, `serverHost.split`.

SHA-256 of the source span: `6e08b382229e982119feded6e5ab14a236aef583cc6d5d63cc7293894d6e28b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
