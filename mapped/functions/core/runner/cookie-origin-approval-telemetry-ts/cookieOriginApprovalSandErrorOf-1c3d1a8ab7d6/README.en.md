# `cookieOriginApprovalSandErrorOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/cookie-origin-approval-telemetry.ts` · [Module README](../../../../../modules/core/runner/cookie-origin-approval-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:456081-456118](../../../../../../reference/runtime/host-main.cjs#L456081-L456118) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:456081-456118](../../../../../../reference/runtime/host-main.cjs#L456081-L456118) | 17 | 0 | 0 | 13 | 0 | 0 |

### host:456081

Calls written directly in this body: `SandError.cookieApprovalAborted`, `SandError.cookieApprovalCollectFailed`, `SandError.cookieApprovalEnumerateFailed`, `SandError.cookieApprovalExpired`, `SandError.cookieApprovalMachineStale`, `SandError.cookieApprovalNoMachine`, `SandError.cookieApprovalNoMatch`, `SandError.cookieApprovalNoWindow`, `SandError.cookieApprovalUnavailable`, `SandError.cookieImportGateOff`, `SandError.cookieInjectFailed`, `brandedErrorClass`.

SHA-256 of the source span: `baa95cd2cdad6b71441b7271ba206cce0f64b483615d9c5cdffe4662d6ec4d7c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
