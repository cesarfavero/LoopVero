# `StatKeyedParseCache.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/stat-keyed-parse-cache.ts` · [Module README](../../../../../modules/host/skills/stat-keyed-parse-cache-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684524-684527](../../../../../../reference/runtime/host-main.cjs#L684524-L684527) | `method` | no | `capacity = DEFAULT_CAPACITY, nowMs2 = () => Date.now()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684524-684527](../../../../../../reference/runtime/host-main.cjs#L684524-L684527) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:684524

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.capacity`, `this.nowMs`.

SHA-256 of the source span: `5bfdcbb08d033b1e7b8bfbe1f1f658b52a6bdcfefdd8b99452fc9dc868d1e131`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
