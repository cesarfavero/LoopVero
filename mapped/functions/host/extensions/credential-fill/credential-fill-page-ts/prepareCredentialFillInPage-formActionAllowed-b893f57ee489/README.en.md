# `prepareCredentialFillInPage/formActionAllowed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-fill/credential-fill-page.ts` · [Module README](../../../../../../modules/host/extensions/credential-fill/credential-fill-page-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:543551-543556](../../../../../../../reference/runtime/host-main.cjs#L543551-L543556) | `ArrowFunctionExpression` | no | `form2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543551-543556](../../../../../../../reference/runtime/host-main.cjs#L543551-L543556) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:543551

Calls written directly in this body: `Element.prototype.getAttribute.call`, `document.createElement`, `policy.allowedFormActionOrigins.includes`.

Assignment or increment targets: `parser.href`.

SHA-256 of the source span: `ae29d1d4489808ac6f6c28b2a957f89b0e2d7cd8f9d92838abd76d502d69d253`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
