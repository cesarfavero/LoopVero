# `prepareCredentialFillInPage/resolveOneTimeCode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-fill/credential-fill-page.ts` · [Module README](../../../../../../modules/host/extensions/credential-fill/credential-fill-page-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:543533-543544](../../../../../../../reference/runtime/host-main.cjs#L543533-L543544) | `ArrowFunctionExpression` | no | `inputs, form2, isEligible, minimumScore = 400` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543533-543544](../../../../../../../reference/runtime/host-main.cjs#L543533-L543544) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:543533

Calls written directly in this body: `.filter`, `.map`, `.sort`, `inputs.filter`, `splitDigitGroup`.

SHA-256 of the source span: `c4320e0eb8e12cdc3869b6321d5ea8fe142aed66c22a40cd1ff6b650f9cb2272`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
