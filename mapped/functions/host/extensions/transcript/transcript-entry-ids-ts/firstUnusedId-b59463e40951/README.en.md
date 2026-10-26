# `firstUnusedId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/transcript-entry-ids.ts` · [Module README](../../../../../../modules/host/extensions/transcript/transcript-entry-ids-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734352-734359](../../../../../../../reference/runtime/host-main.cjs#L734352-L734359) | `FunctionDeclaration` | no | `existingIds, mint2, startIndex` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734352-734359](../../../../../../../reference/runtime/host-main.cjs#L734352-L734359) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:734352

Calls written directly in this body: `existingIds.has`, `mint2`.

Assignment or increment targets: `id`, `index`.

SHA-256 of the source span: `dde55e98c7ccf29ba1ac5f21f2ef1c10647c8918fe76b9ff821ee3e6c26d55e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
