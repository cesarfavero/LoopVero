# `RunLifecycle.closeSessionWhenIdle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/run-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/run-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740077-740080](../../../../../../../reference/runtime/host-main.cjs#L740077-L740080) | `method` | no | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740077-740080](../../../../../../../reference/runtime/host-main.cjs#L740077-L740080) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:740077

Calls written directly in this body: `session.db.close`, `this.inFlightRunCounts.has`.

SHA-256 of the source span: `41bdedf65cef227b2d2dff17a45d3a8a6636e3a00df9b755321f527b610b26f7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
