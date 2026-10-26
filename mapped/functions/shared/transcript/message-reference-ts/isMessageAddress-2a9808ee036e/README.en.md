# `isMessageAddress`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/message-reference.ts` · [Module README](../../../../../modules/shared/transcript/message-reference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739428-739430](../../../../../../reference/runtime/host-main.cjs#L739428-L739430) | `FunctionDeclaration` | no | `value` |
| [evaluation:538617-538619](../../../../../../reference/runtime/sand-eval-runner.cjs#L538617-L538619) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739428-739430](../../../../../../reference/runtime/host-main.cjs#L739428-L739430) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:538617-538619](../../../../../../reference/runtime/sand-eval-runner.cjs#L538617-L538619) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:739428

Calls written directly in this body: `MESSAGE_ADDRESS_EXACT.test`.

SHA-256 of the source span: `01b32acaa328afa4a0d25cc82cb455983b2947e6333ea435c10c25d7756c8f0f`.

### evaluation:538617

Calls written directly in this body: `MESSAGE_ADDRESS_EXACT.test`.

SHA-256 of the source span: `01b32acaa328afa4a0d25cc82cb455983b2947e6333ea435c10c25d7756c8f0f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
