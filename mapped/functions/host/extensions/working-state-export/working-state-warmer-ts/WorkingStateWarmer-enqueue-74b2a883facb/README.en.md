# `WorkingStateWarmer.enqueue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/working-state-warmer.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/working-state-warmer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785969-785974](../../../../../../../reference/runtime/host-main.cjs#L785969-L785974) | `method` | no | `agentId, logExposure` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785969-785974](../../../../../../../reference/runtime/host-main.cjs#L785969-L785974) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:785969

Calls written directly in this body: `this.deps.isEligible`, `this.pending.add`, `this.scheduleDrain`.

SHA-256 of the source span: `bd2806f7457b8895af8525176159b359899a40290fa1209ccf38c8318b3486ec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
