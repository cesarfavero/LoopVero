# `BoxHandoffResume.createAwaitingStateSink/clearForTab`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/box-handoff-resume.ts` · [Module README](../../../../../../modules/host/extensions/transcript/box-handoff-resume-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734772-734774](../../../../../../../reference/runtime/host-main.cjs#L734772-L734774) | `ArrowFunctionExpression` | no | `agentId, tabId, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734772-734774](../../../../../../../reference/runtime/host-main.cjs#L734772-L734774) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:734772

Calls written directly in this body: `this.applyAwaitingStateForTab`.

SHA-256 of the source span: `4d645838c77597807de9785e315b06929e78a4ce4ca95fa93eeb96f89ececd04`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
