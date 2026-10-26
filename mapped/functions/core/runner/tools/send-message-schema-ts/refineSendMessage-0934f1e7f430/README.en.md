# `refineSendMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741594-741783](../../../../../../../reference/runtime/host-main.cjs#L741594-L741783) | `FunctionDeclaration` | no | `value, ctx` |
| [evaluation:482541-482730](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482541-L482730) | `FunctionDeclaration` | no | `value, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741594-741783](../../../../../../../reference/runtime/host-main.cjs#L741594-L741783) | 30 | 2 | 0 | 8 | 0 | 0 |
| [evaluation:482541-482730](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482541-L482730) | 30 | 2 | 0 | 8 | 0 | 0 |

### host:741594

Calls written directly in this body: `.entries`, `.join`, `ctx.addIssue`, `isFieldProvided`, `isKnownNonImage`, `isValidAttachmentUrl`, `refineCards`, `refineLinkItems`, `refineShipment`, `refineShopping`, `textContentIssue`, `types4.includes`, `types4.map`.

SHA-256 of the source span: `7746fa38ba6d7df579ccb76374b3dba84523205c205342e4ecf51a31a4c2bf67`.

### evaluation:482541

Calls written directly in this body: `.entries`, `.join`, `ctx.addIssue`, `isFieldProvided`, `isKnownNonImage`, `isValidAttachmentUrl`, `refineCards`, `refineLinkItems`, `refineShipment`, `refineShopping`, `textContentIssue`, `types4.includes`, `types4.map`.

SHA-256 of the source span: `cbb4092f8f75e3018b16f722626d48d20682f83d58a5bdc196b317dac04a43ba`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
