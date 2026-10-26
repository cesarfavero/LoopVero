# `urlLooksLikeImage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/connectors/channel-attachment.ts` · [Module README](../../../../../modules/host/connectors/channel-attachment-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497799-497803](../../../../../../reference/runtime/host-main.cjs#L497799-L497803) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497799-497803](../../../../../../reference/runtime/host-main.cjs#L497799-L497803) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:497799

Calls written directly in this body: `imageMimeFromPath`, `tryParseUrl`.

SHA-256 of the source span: `aa6b4805d404566c7096ff3256a69ad184ebec36cd0cb13590457b6b8b8df29a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
