# `WorkingStateWarmer.startBackfill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/working-state-warmer.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/working-state-warmer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785975-785996](../../../../../../../reference/runtime/host-main.cjs#L785975-L785996) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785975-785996](../../../../../../../reference/runtime/host-main.cjs#L785975-L785996) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:785975

Calls written directly in this body: `.catch`, `.finally`, `.then`, `this.deps.listAgentPopulation`.

Assignment or increment targets: `this.backfill`.

SHA-256 of the source span: `e08334d05583d1439e20331f199325be4c934894227c7d104c679763036d450e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
