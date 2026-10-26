# `SessionRuntime.settledOpen`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737867-737871](../../../../../../../reference/runtime/host-main.cjs#L737867-L737871) | `method` | yes | `pending` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737867-737871](../../../../../../../reference/runtime/host-main.cjs#L737867-L737871) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:737867

Calls written directly in this body: `Promise.allSettled`.

SHA-256 of the source span: `76b11632039100501a099fec0718b5cbdf2d05754dfd185c7a908f75db2a1d36`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
