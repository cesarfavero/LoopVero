# `tryParseUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/connectors/channel-attachment.ts` · [Module README](../../../../../modules/host/connectors/channel-attachment-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497778-497784](../../../../../../reference/runtime/host-main.cjs#L497778-L497784) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497778-497784](../../../../../../reference/runtime/host-main.cjs#L497778-L497784) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:497778

Calls written directly in this body: `new URL`.

SHA-256 of the source span: `40327e72e2f6f1cc378d4830d0b494821b9e10770ef80aac63f9a8c1a0979dfc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
