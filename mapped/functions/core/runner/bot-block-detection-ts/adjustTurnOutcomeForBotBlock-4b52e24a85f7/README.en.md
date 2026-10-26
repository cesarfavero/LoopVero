# `adjustTurnOutcomeForBotBlock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/bot-block-detection.ts` · [Module README](../../../../../modules/core/runner/bot-block-detection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454984-454989](../../../../../../reference/runtime/host-main.cjs#L454984-L454989) | `FunctionDeclaration` | no | `args` |
| [evaluation:484509-484514](../../../../../../reference/runtime/sand-eval-runner.cjs#L484509-L484514) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454984-454989](../../../../../../reference/runtime/host-main.cjs#L454984-L454989) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:484509-484514](../../../../../../reference/runtime/sand-eval-runner.cjs#L484509-L484514) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:454984

Calls written directly in this body: `peekTurnBotBlock`.

SHA-256 of the source span: `8c8fc42535238c62620e912df9f27798329e6c00473047db7c39f94c6e2003a4`.

### evaluation:484509

Calls written directly in this body: `peekTurnBotBlock`.

SHA-256 of the source span: `8c8fc42535238c62620e912df9f27798329e6c00473047db7c39f94c6e2003a4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
