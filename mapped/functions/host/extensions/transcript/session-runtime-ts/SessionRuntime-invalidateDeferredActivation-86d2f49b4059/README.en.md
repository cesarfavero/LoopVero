# `SessionRuntime.invalidateDeferredActivation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737872-737876](../../../../../../../reference/runtime/host-main.cjs#L737872-L737876) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737872-737876](../../../../../../../reference/runtime/host-main.cjs#L737872-L737876) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:737872

Calls written directly in this body: `this.windowedActivationAbort.abort`.

Assignment or increment targets: `this.pendingActivationAgentId`, `this.windowedActivationAbort`.

SHA-256 of the source span: `1a7028c470bf74e94c83a4dc5c1078b5e66c42e032219c3db9dd687851fedbe0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
