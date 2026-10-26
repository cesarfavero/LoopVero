# `BotTemplateShareService.run`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/bot-template-share/bot-template-share-service.ts` · [Module README](../../../../../../modules/host/extensions/bot-template-share/bot-template-share-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506069-506078](../../../../../../../reference/runtime/host-main.cjs#L506069-L506078) | `method` | yes | `call` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506069-506078](../../../../../../../reference/runtime/host-main.cjs#L506069-L506078) | 1 | 0 | 1 | 1 | 1 | 1 |

### host:506069

Calls written directly in this body: `call`, `errorLogTag`, `this.reportFailure`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `48bbc2259bd52ba97927fc812392af53d3921b28691d00cbe7ed68279998e678`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
