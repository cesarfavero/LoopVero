# `SandCookieOriginApprovalBridge.request`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/cookie-origin-approval-bridge.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542797-542821](../../../../../../../reference/runtime/host-main.cjs#L542797-L542821) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542797-542821](../../../../../../../reference/runtime/host-main.cjs#L542797-L542821) | 3 | 0 | 1 | 3 | 0 | 0 |

### host:542797

Calls written directly in this body: `args.signal.addEventListener`, `args.signal.removeEventListener`, `this.begin`, `this.settledOutcome`.

SHA-256 of the source span: `5975269cfe9c531797a7b390cf494d4e229a7f9e9b88ced9bdc7d50ad5ef47d8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
