# `advertisedSendMessageParameters`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742109-742113](../../../../../../../reference/runtime/host-main.cjs#L742109-L742113) | `FunctionDeclaration` | no | `args` |
| [evaluation:483056-483060](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483056-L483060) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742109-742113](../../../../../../../reference/runtime/host-main.cjs#L742109-L742113) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:483056-483060](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483056-L483060) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:742109

Calls written directly in this body: `base.extend`, `inAppVariantKey`, `schema3.extend`.

SHA-256 of the source span: `515b62be569ed4d8fc1e7de58019fcf23e6ecb93303002ad3020860e703d0b9a`.

### evaluation:483056

Calls written directly in this body: `base.extend`, `inAppVariantKey`, `schema3.extend`.

SHA-256 of the source span: `515b62be569ed4d8fc1e7de58019fcf23e6ecb93303002ad3020860e703d0b9a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
