# `BotTemplateShareService.publish`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/bot-template-share/bot-template-share-service.ts` · [Module README](../../../../../../modules/host/extensions/bot-template-share/bot-template-share-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506079-506085](../../../../../../../reference/runtime/host-main.cjs#L506079-L506085) | `method` | yes | `args, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506079-506085](../../../../../../../reference/runtime/host-main.cjs#L506079-L506085) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:506079

Calls written directly in this body: `templateView`, `this.remember`, `this.run`.

SHA-256 of the source span: `3593ebc05496034cbc8aecbd7db60d63b72fe6f5bb42ada02537744cf6ddc233`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
