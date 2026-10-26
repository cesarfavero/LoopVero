# `cookieOriginApprovalLevel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/telemetry/cookie-origin-approval-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/cookie-origin-approval-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:456188-456200](../../../../../../../reference/runtime/host-main.cjs#L456188-L456200) | `FunctionDeclaration` | no | `outcome, refusalReason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:456188-456200](../../../../../../../reference/runtime/host-main.cjs#L456188-L456200) | 6 | 0 | 0 | 4 | 0 | 0 |

### host:456188

Calls written directly in this body: `INFO_REFUSAL_REASONS.has`.

SHA-256 of the source span: `69479c88948acefc1d38a617b1d9ecc0e840dc3193831003bf7a92e6cfc9fb8d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
