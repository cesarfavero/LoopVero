# `clearFilledSecretsInPage/holdsValue2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-fill/credential-fill-clear.ts` · [Module README](../../../../../../modules/host/extensions/credential-fill/credential-fill-clear-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:543201-543201](../../../../../../../reference/runtime/host-main.cjs#L543201-L543201) | `ArrowFunctionExpression` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543201-543201](../../../../../../../reference/runtime/host-main.cjs#L543201-L543201) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:543201 uses an implicit arrow-function return.

### host:543201

Calls written directly in this body: `input2.type.toLowerCase`, `valueless.has`.

SHA-256 of the source span: `87573fa4744bad81b5795961a717e5fcb8f19df1a620e2fdac16e8136d032dd6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
