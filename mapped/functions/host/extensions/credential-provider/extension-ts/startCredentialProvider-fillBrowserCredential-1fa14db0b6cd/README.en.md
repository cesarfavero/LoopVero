# `startCredentialProvider/fillBrowserCredential`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/extension.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:551795-551860](../../../../../../../reference/runtime/host-main.cjs#L551795-L551860) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551795-551860](../../../../../../../reference/runtime/host-main.cjs#L551795-L551860) | 7 | 0 | 4 | 4 | 0 | 0 |

### host:551795

Calls written directly in this body: `armOneTimeCodeFollowUp`, `audit`, `auditEventOf`, `browserWindowIndexOfCdpPort`, `browserWindowIndexOfDebuggerUrl`, `fillOutcome`, `filler.pickFillTarget`, `leasedFill.run`, `new URL`, `passwordStepFollowUp.markFilled`, `passwordStepFollowUp.watch`, `resolveAgentWindow`, `trustedBrowserOrigin`, `usernameFirstFillDetail`.

Assignment or increment targets: `outcome`.

SHA-256 of the source span: `6a64ad875323db15e68b7977cc67dd464d60ee5e68b58024cde90b96827a96d9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
