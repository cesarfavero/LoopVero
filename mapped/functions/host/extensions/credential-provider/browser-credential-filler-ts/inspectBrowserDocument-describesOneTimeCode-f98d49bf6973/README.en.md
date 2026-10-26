# `inspectBrowserDocument/describesOneTimeCode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:547392-547394](../../../../../../../reference/runtime/host-main.cjs#L547392-L547394) | `ArrowFunctionExpression` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547392-547394](../../../../../../../reference/runtime/host-main.cjs#L547392-L547394) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:547392 uses an implicit arrow-function return.

### host:547392

Calls written directly in this body: `/(?:^|[^a-z])(?:(?:totp|otp|2fa|mfa|one[\s_-]*time[\s_-]*(?:code|pin|pass(?:word|code))|two[\s_-]*factor|multi[\s_-]*factor|authenticator|passcode)(?:[\s_-]*(?:code|token|input|field|digits?))?|(?:verification|verify|security|auth(?:entication)?|confirmation)[\s_-]*code)(?:[^a-z]|$)/.test`.

SHA-256 of the source span: `ad327ca905b0e6221fb9e3ef337b323c3741325b5759c889d071e99f02b0bbd7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
