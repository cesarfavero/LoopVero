# `visitedSiteBucket`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/site-visit-tracking.ts` · [Module README](../../../../../modules/core/runner/site-visit-tracking-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454888-454892](../../../../../../reference/runtime/host-main.cjs#L454888-L454892) | `FunctionDeclaration` | no | `rawUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454888-454892](../../../../../../reference/runtime/host-main.cjs#L454888-L454892) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:454888

Calls written directly in this body: `URL.canParse`, `boundedSiteBucket`, `new URL`.

SHA-256 of the source span: `9faaa15c1430365d34fb900c5c7bb833b8e97078d659789d224359470a117265`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
