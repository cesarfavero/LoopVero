# `ChromeSessionWatcher.sessionDbChangedSinceLastCheck`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/chrome-session-watcher.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/chrome-session-watcher-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:481859-481871](../../../../../../../reference/runtime/host-main.cjs#L481859-L481871) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:481859-481871](../../../../../../../reference/runtime/host-main.cjs#L481859-L481871) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:481859

Calls written directly in this body: `this.lastMtimes.get`, `this.lastMtimes.set`, `this.statMtimeMs`.

Assignment or increment targets: `changed`.

SHA-256 of the source span: `f5c38fec562b1ac1d8961641a3aea6d4912161313db0befd2e6b417e6acbdacb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
