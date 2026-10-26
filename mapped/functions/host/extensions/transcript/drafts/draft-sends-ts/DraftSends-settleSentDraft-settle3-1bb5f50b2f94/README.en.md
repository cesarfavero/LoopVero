# `DraftSends.settleSentDraft/settle3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/drafts/draft-sends.ts` · [Module README](../../../../../../../modules/host/extensions/transcript/drafts/draft-sends-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737338-737343](../../../../../../../../reference/runtime/host-main.cjs#L737338-L737343) | `ArrowFunctionExpression` | no | `item` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737338-737343](../../../../../../../../reference/runtime/host-main.cjs#L737338-L737343) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:737338

Calls written directly in this body: `settleSendingDraftEntry`.

Assignment or increment targets: `didSettle`.

SHA-256 of the source span: `272fb6cbaff8a8467b5ebb6c241a1094abd9cd90384d76ee7fe44feff0e5bb6f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
