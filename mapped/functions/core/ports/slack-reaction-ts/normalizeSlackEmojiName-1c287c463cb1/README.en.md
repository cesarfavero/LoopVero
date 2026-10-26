# `normalizeSlackEmojiName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/slack-reaction.ts` · [Module README](../../../../../modules/core/ports/slack-reaction-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768189-768193](../../../../../../reference/runtime/host-main.cjs#L768189-L768193) | `FunctionDeclaration` | no | `raw` |
| [evaluation:563705-563709](../../../../../../reference/runtime/sand-eval-runner.cjs#L563705-L563709) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768189-768193](../../../../../../reference/runtime/host-main.cjs#L768189-L768193) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563705-563709](../../../../../../reference/runtime/sand-eval-runner.cjs#L563705-L563709) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:768189

Calls written directly in this body: `.toLowerCase`, `SLACK_EMOJI_NAME_PATTERN.test`, `raw.trim`, `trimmed.endsWith`, `trimmed.slice`, `trimmed.startsWith`.

SHA-256 of the source span: `e6771f67c6472d6d340f1e8a6d644ed022e0df86831d5a1c1fd238ca2d8e916a`.

### evaluation:563705

Calls written directly in this body: `.toLowerCase`, `SLACK_EMOJI_NAME_PATTERN.test`, `raw.trim`, `trimmed.endsWith`, `trimmed.slice`, `trimmed.startsWith`.

SHA-256 of the source span: `e6771f67c6472d6d340f1e8a6d644ed022e0df86831d5a1c1fd238ca2d8e916a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
