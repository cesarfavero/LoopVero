# `guideForHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/plugin-guide-reminder.ts` · [Module README](../../../../../../modules/core/runner/reminders/plugin-guide-reminder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585639-585643](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585639-L585643) | `FunctionDeclaration` | no | `guides, host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585639-585643](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585639-L585643) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585639

Calls written directly in this body: `guides.find`, `host.toLowerCase`.

SHA-256 of the source span: `1f2c17605accd2d921debd24f85d95378552ee1360715cda70b8dde742fb7df1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
