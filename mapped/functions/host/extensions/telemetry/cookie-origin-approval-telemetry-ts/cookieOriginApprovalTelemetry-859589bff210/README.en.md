# `cookieOriginApprovalTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/telemetry/cookie-origin-approval-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/cookie-origin-approval-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:456201-456225](../../../../../../../reference/runtime/host-main.cjs#L456201-L456225) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:456201-456225](../../../../../../../reference/runtime/host-main.cjs#L456201-L456225) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:456201

Calls written directly in this body: `boundedDecision`, `boundedHarness`, `boundedOutcome`, `boundedRefusalReason`, `boundedStage`, `brandedId`, `cappedCount2`, `cappedInteger`, `cookieOriginApprovalLevel`, `cookieOriginApprovalSandErrorOf`, `logFields`, `sandErrorTags`.

SHA-256 of the source span: `445a922a0180293a8d50693a5c4df36944d617ef441d29a353ef4839df1dfd7d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
