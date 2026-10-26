# `createLeasedCredentialFill/runWithFill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/credential-fill-lease.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/credential-fill-lease-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:548732-548745](../../../../../../../reference/runtime/host-main.cjs#L548732-L548745) | `ArrowFunctionExpression` | yes | `windowIndex, activeFill, fill` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548732-548745](../../../../../../../reference/runtime/host-main.cjs#L548732-L548745) | 0 | 0 | 1 | 1 | 1 | 1 |

### host:548732

Calls written directly in this body: `fill`, `holdUntilCleared`, `releaseIfCleared`.

Assignment or increment targets: `activeFill.active`, `result`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `908dd7219bd1599b582c908a301d8e1d1c0b48a7b1720fd1ec246e071b8907c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
