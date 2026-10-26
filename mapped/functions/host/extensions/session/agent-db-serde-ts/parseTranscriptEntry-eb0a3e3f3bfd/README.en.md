# `parseTranscriptEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db-serde.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-serde-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717995-718003](../../../../../../../reference/runtime/host-main.cjs#L717995-L718003) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717995-718003](../../../../../../../reference/runtime/host-main.cjs#L717995-L718003) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:717995

Calls written directly in this body: `JSON.parse`, `transcriptEntryOfJson`.

Assignment or increment targets: `parsed2`.

SHA-256 of the source span: `86236d17e497789e507e33fbeba843c168d85c73958c1cccb07b67d3e91ad11e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
