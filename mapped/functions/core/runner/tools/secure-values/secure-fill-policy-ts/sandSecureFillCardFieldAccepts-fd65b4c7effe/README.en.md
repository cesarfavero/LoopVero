# `sandSecureFillCardFieldAccepts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-fill-policy.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-fill-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766726-766733](../../../../../../../../reference/runtime/host-main.cjs#L766726-L766733) | `FunctionDeclaration` | no | `field, target` |
| [evaluation:562239-562246](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562239-L562246) | `FunctionDeclaration` | no | `field, target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766726-766733](../../../../../../../../reference/runtime/host-main.cjs#L766726-L766733) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:562239-562246](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562239-L562246) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:766726

Calls written directly in this body: `.includes`, `.replace`, `.split`, `CARD_SECURITY_CODE_DESCRIPTOR.test`, `control.autoComplete.toLowerCase`, `userFormControlLooksLikeCardNumber`.

SHA-256 of the source span: `45294b0b2e628a8360df7067de796d9d3ff4c34557807cdf3b4bdeba0c88691b`.

### evaluation:562239

Calls written directly in this body: `.includes`, `.replace`, `.split`, `CARD_SECURITY_CODE_DESCRIPTOR.test`, `control.autoComplete.toLowerCase`, `userFormControlLooksLikeCardNumber`.

SHA-256 of the source span: `45294b0b2e628a8360df7067de796d9d3ff4c34557807cdf3b4bdeba0c88691b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
