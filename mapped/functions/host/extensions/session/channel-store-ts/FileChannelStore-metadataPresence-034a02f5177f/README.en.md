# `FileChannelStore.metadataPresence`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/channel-store.ts` · [Module README](../../../../../../modules/host/extensions/session/channel-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721304-721313](../../../../../../../reference/runtime/host-main.cjs#L721304-L721313) | `method` | no | `platform2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721304-721313](../../../../../../../reference/runtime/host-main.cjs#L721304-L721313) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:721304

Calls written directly in this body: `isMissingPathError`, `reportFallbackUnlessAbsent`, `this.configPath`, `this.stat`.

SHA-256 of the source span: `70b419977681e586782caa6c152a23a1e7c7d2b5eebf2f43fd1f127423765c72`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
