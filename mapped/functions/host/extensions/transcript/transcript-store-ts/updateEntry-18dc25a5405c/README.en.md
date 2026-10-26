# `updateEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/transcript-store.ts` · [Module README](../../../../../../modules/host/extensions/transcript/transcript-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733126-733140](../../../../../../../reference/runtime/host-main.cjs#L733126-L733140) | `FunctionDeclaration` | no | `id, update` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733126-733140](../../../../../../../reference/runtime/host-main.cjs#L733126-L733140) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:733126

Calls written directly in this body: `byId.set`, `entries.map`, `materialized`.

Assignment or increment targets: `mirror`.

SHA-256 of the source span: `93e0d524ce160dbda048bc3ee100d5dbc6443db2f84791c07857e33470da56fb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
