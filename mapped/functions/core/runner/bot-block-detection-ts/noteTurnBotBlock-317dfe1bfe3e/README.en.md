# `noteTurnBotBlock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/bot-block-detection.ts` · [Module README](../../../../../modules/core/runner/bot-block-detection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454967-454975](../../../../../../reference/runtime/host-main.cjs#L454967-L454975) | `FunctionDeclaration` | no | `args` |
| [evaluation:484497-484505](../../../../../../reference/runtime/sand-eval-runner.cjs#L484497-L484505) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454967-454975](../../../../../../reference/runtime/host-main.cjs#L454967-L454975) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:484497-484505](../../../../../../reference/runtime/sand-eval-runner.cjs#L484497-L484505) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:454967

Calls written directly in this body: `slotsByConversation.get`.

Assignment or increment targets: `slot.hit`.

SHA-256 of the source span: `7cf7a580b882220d93a7873a665b1c4165d6d0fbaed5db906f189b1cefd1c9d0`.

### evaluation:484497

Calls written directly in this body: `slotsByConversation.get`.

Assignment or increment targets: `slot.hit`.

SHA-256 of the source span: `7cf7a580b882220d93a7873a665b1c4165d6d0fbaed5db906f189b1cefd1c9d0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
