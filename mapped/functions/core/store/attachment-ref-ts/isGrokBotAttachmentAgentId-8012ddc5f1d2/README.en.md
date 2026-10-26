# `isGrokBotAttachmentAgentId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/store/attachment-ref.ts` · [Module README](../../../../../modules/core/store/attachment-ref-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:752271-752273](../../../../../../reference/runtime/host-main.cjs#L752271-L752273) | `FunctionDeclaration` | no | `value` |
| [evaluation:530349-530351](../../../../../../reference/runtime/sand-eval-runner.cjs#L530349-L530351) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752271-752273](../../../../../../reference/runtime/host-main.cjs#L752271-L752273) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:530349-530351](../../../../../../reference/runtime/sand-eval-runner.cjs#L530349-L530351) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:752271

Calls written directly in this body: `AGENT_ID.test`.

SHA-256 of the source span: `06100f80cfaf6eaceb035a2be2ceb440f014c282c4a0ec1bb01551c3154848c7`.

### evaluation:530349

Calls written directly in this body: `AGENT_ID.test`.

SHA-256 of the source span: `06100f80cfaf6eaceb035a2be2ceb440f014c282c4a0ec1bb01551c3154848c7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
