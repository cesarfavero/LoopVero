# `isGrokBotAttachmentKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/store/attachment-ref.ts` · [Module README](../../../../../modules/core/store/attachment-ref-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:752274-752276](../../../../../../reference/runtime/host-main.cjs#L752274-L752276) | `FunctionDeclaration` | no | `{ agentPublicId, name: name18 }` |
| [evaluation:530352-530354](../../../../../../reference/runtime/sand-eval-runner.cjs#L530352-L530354) | `FunctionDeclaration` | no | `{ agentPublicId, name: name18 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752274-752276](../../../../../../reference/runtime/host-main.cjs#L752274-L752276) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:530352-530354](../../../../../../reference/runtime/sand-eval-runner.cjs#L530352-L530354) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:752274

Calls written directly in this body: `NEW_STORE_KEY_NAME.test`, `READ_ONLY_FILE_NAME_STORE_KEY_NAME.test`, `isGrokBotAttachmentAgentId`.

SHA-256 of the source span: `94063fe7d922647d098b26d23baa04dc4c9c1848b2022dcc98bf6d2740b72adc`.

### evaluation:530352

Calls written directly in this body: `NEW_STORE_KEY_NAME.test`, `READ_ONLY_FILE_NAME_STORE_KEY_NAME.test`, `isGrokBotAttachmentAgentId`.

SHA-256 of the source span: `94063fe7d922647d098b26d23baa04dc4c9c1848b2022dcc98bf6d2740b72adc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
