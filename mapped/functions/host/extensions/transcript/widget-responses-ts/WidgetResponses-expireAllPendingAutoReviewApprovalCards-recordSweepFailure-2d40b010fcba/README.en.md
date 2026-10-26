# `WidgetResponses.expireAllPendingAutoReviewApprovalCards/recordSweepFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:782531-782536](../../../../../../../reference/runtime/host-main.cjs#L782531-L782536) | `ArrowFunctionExpression` | no | `stage, error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782531-782536](../../../../../../../reference/runtime/host-main.cjs#L782531-L782536) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:782531

Calls written directly in this body: `errorLogTag`, `this.tm.telemetry.reportAutoReviewExpireSweepFailed`.

SHA-256 of the source span: `ae4ccab44cc3a4bb43a80430d636760fd76ecdb8306359cd2c03aafa42c7514f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
