# `attachmentUrlLooksLikeAudio`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741193-741195](../../../../../../../reference/runtime/host-main.cjs#L741193-L741195) | `FunctionDeclaration` | no | `url2` |
| [evaluation:482140-482142](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482140-L482142) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741193-741195](../../../../../../../reference/runtime/host-main.cjs#L741193-L741195) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:482140-482142](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482140-L482142) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:741193

Calls written directly in this body: `AUDIO_ATTACHMENT_PATH_PATTERN.test`.

SHA-256 of the source span: `e7715ed685b0774f1706c37d1fcc2438c1cac01bb7ab3e9fbd61a46676944a69`.

### evaluation:482140

Calls written directly in this body: `AUDIO_ATTACHMENT_PATH_PATTERN.test`.

SHA-256 of the source span: `e7715ed685b0774f1706c37d1fcc2438c1cac01bb7ab3e9fbd61a46676944a69`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
