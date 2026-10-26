# `SessionRuntime.replaceSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738303-738308](../../../../../../../reference/runtime/host-main.cjs#L738303-L738308) | `method` | yes | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738303-738308](../../../../../../../reference/runtime/host-main.cjs#L738303-L738308) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:738303

Calls written directly in this body: `this.setActiveSession`, `this.tm.runLifecycle.retireSession`, `this.tm.runLifecycle.watchActiveSession`.

SHA-256 of the source span: `533b96cada486d962aa40d9873c0dec49cb7ab07a7fd279a116cfdb083bf5308`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
