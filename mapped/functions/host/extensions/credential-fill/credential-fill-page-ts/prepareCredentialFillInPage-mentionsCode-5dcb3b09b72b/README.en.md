# `prepareCredentialFillInPage/mentionsCode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-fill/credential-fill-page.ts` · [Module README](../../../../../../modules/host/extensions/credential-fill/credential-fill-page-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:543448-543448](../../../../../../../reference/runtime/host-main.cjs#L543448-L543448) | `ArrowFunctionExpression` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543448-543448](../../../../../../../reference/runtime/host-main.cjs#L543448-L543448) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:543448 uses an implicit arrow-function return.

### host:543448

Calls written directly in this body: `/(?:^|[^a-z])code(?:[^a-z]|$)/.test`.

SHA-256 of the source span: `156c650f18967819cf19ede08075e492805ede3a7983632ddb2e1158880ee557`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
