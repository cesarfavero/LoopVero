# `startCredentialProvider/fillBrowserOneTimeCode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/extension.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:551919-551968](../../../../../../../reference/runtime/host-main.cjs#L551919-L551968) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551919-551968](../../../../../../../reference/runtime/host-main.cjs#L551919-L551968) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:551919

Calls written directly in this body: `audit`, `auditEventOf`, `browserWindowIndexOfDebuggerUrl`, `fillOutcome`, `leasedFill.runFollowUp`, `oneTimeCodeFollowUp.retryAfterLeaseRefusal`, `oneTimeCodeFollowUp.sessionFor`.

SHA-256 of the source span: `cdd013d13e6221362914e31fe5b2f0a775157e923dd58fbe376c939cade0e5b8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
