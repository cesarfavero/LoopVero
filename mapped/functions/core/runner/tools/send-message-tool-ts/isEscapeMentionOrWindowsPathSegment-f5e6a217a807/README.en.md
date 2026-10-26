# `isEscapeMentionOrWindowsPathSegment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760735-760747](../../../../../../../reference/runtime/host-main.cjs#L760735-L760747) | `FunctionDeclaration` | no | `content, start, end` |
| [evaluation:551550-551562](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551550-L551562) | `FunctionDeclaration` | no | `content, start, end` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760735-760747](../../../../../../../reference/runtime/host-main.cjs#L760735-L760747) | 2 | 2 | 0 | 3 | 0 | 0 |
| [evaluation:551550-551562](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551550-L551562) | 2 | 2 | 0 | 3 | 0 | 0 |

### host:760735

Calls written directly in this body: `/^["'\\]/.test`, `INLINE_MENTION_END.test`, `PATH_SEGMENT_START.test`, `WHITESPACE2.test`, `WINDOWS_PATH_TOKEN.test`, `content.slice`.

Assignment or increment targets: `tokenEnd`, `tokenStart`.

SHA-256 of the source span: `71f9662bfd33982a35bc586891bf216e319a5fa4e18039e52ede0c7aa52c291c`.

### evaluation:551550

Calls written directly in this body: `/^["'\\]/.test`, `INLINE_MENTION_END.test`, `PATH_SEGMENT_START.test`, `WHITESPACE2.test`, `WINDOWS_PATH_TOKEN.test`, `content.slice`.

Assignment or increment targets: `tokenEnd`, `tokenStart`.

SHA-256 of the source span: `71f9662bfd33982a35bc586891bf216e319a5fa4e18039e52ede0c7aa52c291c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
