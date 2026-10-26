# `WorkingStateWarmer.drainPending`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/working-state-warmer.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/working-state-warmer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785947-785968](../../../../../../../reference/runtime/host-main.cjs#L785947-L785968) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785947-785968](../../../../../../../reference/runtime/host-main.cjs#L785947-L785968) | 6 | 1 | 1 | 2 | 0 | 1 |

### host:785947

Calls written directly in this body: `errorLogTag`, `this.deps.isEligible`, `this.deps.log`, `this.pending.delete`, `this.runWarm`, `this.warmed.add`.

Assignment or increment targets: `this.activeAgentId`.

SHA-256 of the source span: `661062a3651832098af6dc830e6f60b56f150833a43a682092baec649dc02783`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
