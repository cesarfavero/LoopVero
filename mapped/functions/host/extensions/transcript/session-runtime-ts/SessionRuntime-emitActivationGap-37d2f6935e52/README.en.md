# `SessionRuntime.emitActivationGap`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738169-738173](../../../../../../../reference/runtime/host-main.cjs#L738169-L738173) | `method` | no | `gap` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738169-738173](../../../../../../../reference/runtime/host-main.cjs#L738169-L738173) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:738169

Calls written directly in this body: `this.tm.roster.emit`.

SHA-256 of the source span: `e9ab1e58bd7d57a042b52c408f220d8db1bd812c9133557da93edd7d2889194d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
