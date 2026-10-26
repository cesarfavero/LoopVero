# `SandHost.getHealth`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-host.ts` · [Module README](../../../../modules/host/sand-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786639-786650](../../../../../reference/runtime/host-main.cjs#L786639-L786650) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786639-786650](../../../../../reference/runtime/host-main.cjs#L786639-L786650) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:786639

Calls written directly in this body: `.saturatedSinceMs`, `Date.now`, `this.hostExtensions.api`, `this.transcript.isPausingForUpgrade`.

Assignment or increment targets: `this.lastBusyAtMs`.

SHA-256 of the source span: `e1ba1ff66e9e7a2302d700b81f1b265a66c68b6a8a71713af809d69173115509`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
