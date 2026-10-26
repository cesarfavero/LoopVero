# `conciseAdvertisedSendMessageParameters`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742041-742047](../../../../../../../reference/runtime/host-main.cjs#L742041-L742047) | `FunctionDeclaration` | no | `args` |
| [evaluation:482988-482994](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482988-L482994) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742041-742047](../../../../../../../reference/runtime/host-main.cjs#L742041-L742047) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:482988-482994](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482988-L482994) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:742041

Calls written directly in this body: `base.extend`, `conciseVariantTables`, `inAppVariantKey`, `schema3.extend`, `shopping.extend`, `variant.extend`.

SHA-256 of the source span: `5881fb50ab69cbd633e7fc779062eee29972a08bd5fd02211c95c4956788f156`.

### evaluation:482988

Calls written directly in this body: `base.extend`, `conciseVariantTables`, `inAppVariantKey`, `schema3.extend`, `shopping.extend`, `variant.extend`.

SHA-256 of the source span: `5881fb50ab69cbd633e7fc779062eee29972a08bd5fd02211c95c4956788f156`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
