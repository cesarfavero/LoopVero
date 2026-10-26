# `inspectBrowserDocument`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:547218-547605](../../../../../../../reference/runtime/host-main.cjs#L547218-L547605) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547218-547605](../../../../../../../reference/runtime/host-main.cjs#L547218-L547605) | 19 | 0 | 0 | 1 | 0 | 0 |

### host:547218

Calls written directly in this body: `.includes`, `.map`, `/(?:^|[/_-])(?:register|signup|sign-up|create-account|forgot-password|forgotpassword|password-reset|reset-password|recover-password|password-recovery)(?:[/_-]|$)/i.test`, `autocompleteTokens`, `document.hasFocus`, `frames.some`, `inputs.filter`, `inputs.slice`, `inputs.some`, `loginFormIsSubmittable`, `new WeakSet`, `oneTimeCodeShape`, `owningForm`, `resolveUsername`, `revealedOnceIsEligible`, `visibleTextInputs.some`, `visit3`.

Assignment or increment targets: `formKind`, `inputBucket`, `window.__sandCredentialInspectRevealed`.

SHA-256 of the source span: `102224440103e232c85cf8254a5543776780d143e59f4bf885c1ab1c1773e943`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
