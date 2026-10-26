# `clearFilledSecretsInPage/holdsSecretValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-fill/credential-fill-clear.ts` · [Module README](../../../../../../modules/host/extensions/credential-fill/credential-fill-clear-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:543202-543207](../../../../../../../reference/runtime/host-main.cjs#L543202-L543207) | `ArrowFunctionExpression` | yes | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543202-543207](../../../../../../../reference/runtime/host-main.cjs#L543202-L543207) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:543202

Calls written directly in this body: `digestOf`, `holdsValue2`, `input2.type.toLowerCase`.

SHA-256 of the source span: `9b6a7a288a378a804e068ce6fe71d802d5a1525b65d2a77cdade28622a3bfada`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
