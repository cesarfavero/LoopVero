# `WidgetResponses.settleCredentialRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783012-783032](../../../../../../../reference/runtime/host-main.cjs#L783012-L783032) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783012-783032](../../../../../../../reference/runtime/host-main.cjs#L783012-L783032) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:783012

Calls written directly in this body: `args.session.db.updateTranscriptEntry`, `this.cancelCredentialRequestExpiry`, `this.tm.roster.emit`, `updateEntry`.

SHA-256 of the source span: `ef46c68db8952d2e09c2d7678313356e2d72276a3f3264b24b4e23e1cd64cd40`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
