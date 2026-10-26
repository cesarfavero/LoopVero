# `SessionRuntime.setWindowFocused`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737945-737960](../../../../../../../reference/runtime/host-main.cjs#L737945-L737960) | `method` | yes | `isFocused, surface = SAND_CLIENT_SURFACE_DESKTOP` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737945-737960](../../../../../../../reference/runtime/host-main.cjs#L737945-L737960) | 4 | 0 | 1 | 3 | 0 | 0 |

### host:737945

Calls written directly in this body: `Date.now`, `active.db.getUnreadState`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.markSessionViewed`, `this.windowFocusedAtMsBySurface.delete`, `this.windowFocusedAtMsBySurface.set`.

SHA-256 of the source span: `1658da1b30a9d5d8537764c967607f150381aed2924fe8cda9a39e988bd54e75`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
