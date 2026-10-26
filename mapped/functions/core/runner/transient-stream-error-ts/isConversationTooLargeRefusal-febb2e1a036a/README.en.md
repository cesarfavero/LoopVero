# `isConversationTooLargeRefusal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736267-736269](../../../../../../reference/runtime/host-main.cjs#L736267-L736269) | `FunctionDeclaration` | no | `error64` |
| [evaluation:589959-589961](../../../../../../reference/runtime/sand-eval-runner.cjs#L589959-L589961) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736267-736269](../../../../../../reference/runtime/host-main.cjs#L736267-L736269) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:589959-589961](../../../../../../reference/runtime/sand-eval-runner.cjs#L589959-L589961) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:736267

Calls written directly in this body: `hasConversationTooLargeSignal`, `new Set`.

SHA-256 of the source span: `05df710489c1cfc79c141e0d4ec694ff709b871a4780ff3dbd025749a5523c4b`.

### evaluation:589959

Calls written directly in this body: `hasConversationTooLargeSignal`, `new Set`.

SHA-256 of the source span: `cdb30fd66d6e00c47455ab6b6fd872df41bc68166565b0cc57e1b858080ddab5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
