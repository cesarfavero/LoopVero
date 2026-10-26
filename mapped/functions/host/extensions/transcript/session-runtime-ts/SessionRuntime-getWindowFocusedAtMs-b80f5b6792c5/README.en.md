# `SessionRuntime.getWindowFocusedAtMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737994-737996](../../../../../../../reference/runtime/host-main.cjs#L737994-L737996) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737994-737996](../../../../../../../reference/runtime/host-main.cjs#L737994-L737996) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:737994

Calls written directly in this body: `Math.max`, `this.windowFocusedAtMsBySurface.values`.

SHA-256 of the source span: `050261336214f062bc277241522f199fd75f2c8a753cc1a2aad578d595645a9a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
