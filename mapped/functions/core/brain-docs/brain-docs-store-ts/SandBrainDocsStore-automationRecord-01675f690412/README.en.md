# `SandBrainDocsStore.automationRecord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629554-629563](../../../../../../reference/runtime/sand-eval-runner.cjs#L629554-L629563) | `method` | no | `id, config2, deriveNextRunAt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629554-629563](../../../../../../reference/runtime/sand-eval-runner.cjs#L629554-L629563) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:629554

Calls written directly in this body: `automationRecordFromConfig`, `earliestAutomationNextRunAt`, `parseStoredAutomationRuns`, `this.automationsDir`, `this.read`, `this.resolveUserTimeZone`.

SHA-256 of the source span: `1dd1ce6cb98724d61a6dfa49e6735fcefc2ab27255de4a2de706987c2eb31fcd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
