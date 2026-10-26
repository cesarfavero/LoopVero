# `textMessageBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760910-760926](../../../../../../../reference/runtime/host-main.cjs#L760910-L760926) | `FunctionDeclaration` | no | `rawArgs, deps, cards` |
| [evaluation:551725-551741](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551725-L551741) | `FunctionDeclaration` | no | `rawArgs, deps, cards` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760910-760926](../../../../../../../reference/runtime/host-main.cjs#L760910-L760926) | 5 | 0 | 0 | 4 | 1 | 0 |
| [evaluation:551725-551741](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551725-L551741) | 5 | 0 | 0 | 4 | 1 | 0 |

### host:760910

Calls written directly in this body: `.map`, `buildLinkItemsContent`, `deps.linkItems.stored`, `findLinkItemsRepetition`, `new SandToolInputError`, `normalizeSendMessageTextContent`, `renderCardMessageBody`, `shipmentCardOfArgs`, `shoppingCardOfArgs`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `6aeb0be94a668606c3c2c686df90e63edc3e19c25b002be8282edb7b5881fa5c`.

### evaluation:551725

Calls written directly in this body: `.map`, `buildLinkItemsContent`, `deps.linkItems.stored`, `findLinkItemsRepetition`, `new SandToolInputError`, `normalizeSendMessageTextContent`, `renderCardMessageBody`, `shipmentCardOfArgs`, `shoppingCardOfArgs`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `6aeb0be94a668606c3c2c686df90e63edc3e19c25b002be8282edb7b5881fa5c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
