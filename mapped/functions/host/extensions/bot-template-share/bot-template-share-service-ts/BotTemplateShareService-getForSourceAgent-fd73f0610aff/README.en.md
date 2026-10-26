# `BotTemplateShareService.getForSourceAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/bot-template-share/bot-template-share-service.ts` · [Module README](../../../../../../modules/host/extensions/bot-template-share/bot-template-share-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506090-506097](../../../../../../../reference/runtime/host-main.cjs#L506090-L506097) | `method` | yes | `args, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506090-506097](../../../../../../../reference/runtime/host-main.cjs#L506090-L506097) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:506090

Calls written directly in this body: `templateView`, `this.bySourceAgent.get`, `this.bySourceAgent.set`, `this.run`, `withResolvedBotTemplateAudience`.

SHA-256 of the source span: `2ce2eccc22afb3c384b1ee2694239fa3d0263ef9a536f9f659c02ab7c7b88d57`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
