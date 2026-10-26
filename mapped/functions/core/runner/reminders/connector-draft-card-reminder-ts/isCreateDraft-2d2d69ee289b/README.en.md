# `isCreateDraft`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/connector-draft-card-reminder.ts` · [Module README](../../../../../../modules/core/runner/reminders/connector-draft-card-reminder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585531-585534](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585531-L585534) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585531-585534](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585531-L585534) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585531

Calls written directly in this body: `args.name.endsWith`.

SHA-256 of the source span: `30c3f725d91ef31dbe4904274a62d148e55e244e4a669fbb01a43b4802cdbcfc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
