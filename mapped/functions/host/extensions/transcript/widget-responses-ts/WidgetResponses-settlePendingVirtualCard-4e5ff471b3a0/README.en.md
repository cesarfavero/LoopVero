# `WidgetResponses.settlePendingVirtualCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:782741-782755](../../../../../../../reference/runtime/host-main.cjs#L782741-L782755) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782741-782755](../../../../../../../reference/runtime/host-main.cjs#L782741-L782755) | 5 | 0 | 1 | 2 | 0 | 0 |

### host:782741

Calls written directly in this body: `this.settlePendingVirtualCardOnSession`, `this.tm.roster.emit`, `this.tm.sessionStore.settleVirtualCardApproval`.

SHA-256 of the source span: `c4ff8ca246c4f03f1dd7622fc2d7b7e9f97e9d6427f65fee9f4fe7870b03ae33`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
