# `isMessagesDecline`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/local-exec/messages-error-classifier.ts` · [Module README](../../../../../modules/shared/local-exec/messages-error-classifier-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770371-770373](../../../../../../reference/runtime/host-main.cjs#L770371-L770373) | `FunctionDeclaration` | no | `error64` |
| [evaluation:569079-569081](../../../../../../reference/runtime/sand-eval-runner.cjs#L569079-L569081) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770371-770373](../../../../../../reference/runtime/host-main.cjs#L770371-L770373) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:569079-569081](../../../../../../reference/runtime/sand-eval-runner.cjs#L569079-L569081) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:770371

Calls written directly in this body: `DECLINED_MESSAGES.has`.

SHA-256 of the source span: `1a4a4d1d243f07fea73e3f8f6f26d8e165ea8b09752c9481718c2e02c322e1ca`.

### evaluation:569079

Calls written directly in this body: `DECLINED_MESSAGES.has`.

SHA-256 of the source span: `eea586fc91c55660473db97d2b578e58a1f3fc3b070afaf205b726723dc618b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
