# `beginTurnBotBlock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/bot-block-detection.ts` · [Module README](../../../../../modules/core/runner/bot-block-detection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454963-454966](../../../../../../reference/runtime/host-main.cjs#L454963-L454966) | `FunctionDeclaration` | no | `args` |
| [evaluation:484484-484487](../../../../../../reference/runtime/sand-eval-runner.cjs#L484484-L484487) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454963-454966](../../../../../../reference/runtime/host-main.cjs#L454963-L454966) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:484484-484487](../../../../../../reference/runtime/sand-eval-runner.cjs#L484484-L484487) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:454963

Calls written directly in this body: `slotsByConversation.set`.

SHA-256 of the source span: `55185983775ad772bd03f0209944cb7d6292a55489f1fd06d3af483350faeb99`.

### evaluation:484484

Calls written directly in this body: `slotsByConversation.set`.

SHA-256 of the source span: `55185983775ad772bd03f0209944cb7d6292a55489f1fd06d3af483350faeb99`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
