# `OnePasswordBrokerService.fill/fail3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:551079-551097](../../../../../../../reference/runtime/host-main.cjs#L551079-L551097) | `ArrowFunctionExpression` | no | `reason, {       targetUrl,       retryable = false,       detail = FILL_FAILURE_DETAIL[reason],       auditReason = auditReasonFor(reason),       extensionApi     } = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551079-551097](../../../../../../../reference/runtime/host-main.cjs#L551079-L551097) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:551079

Calls written directly in this body: `this.options.audit`.

SHA-256 of the source span: `8fc4b2108a06cc299c2767a3eee84634b268837585fe82f0cd78a52c436dae6d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
