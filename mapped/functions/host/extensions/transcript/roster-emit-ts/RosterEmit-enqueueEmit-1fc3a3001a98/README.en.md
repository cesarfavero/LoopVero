# `RosterEmit.enqueueEmit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/roster-emit.ts` · [Module README](../../../../../../modules/host/extensions/transcript/roster-emit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738937-738944](../../../../../../../reference/runtime/host-main.cjs#L738937-L738944) | `method` | no | `work` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738937-738944](../../../../../../../reference/runtime/host-main.cjs#L738937-L738944) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:738937

Calls written directly in this body: `run.then`, `this.emitChain.then`.

Assignment or increment targets: `this.emitChain`.

SHA-256 of the source span: `1f0470fd8a6a7a577e9fb02797d4770da04d2a3b09a8416dbd80140cce7f28f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
