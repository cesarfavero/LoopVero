# `isSandBoxConnectionLoss`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/box.ts` · [Module README](../../../../../modules/core/ports/box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:475765-475767](../../../../../../reference/runtime/sand-eval-runner.cjs#L475765-L475767) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:475765-475767](../../../../../../reference/runtime/sand-eval-runner.cjs#L475765-L475767) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:475765

Calls written directly in this body: `ConnectError.from`, `isSandBoxProxyNotFound`.

SHA-256 of the source span: `61f1a84706f45956a6d75ad95d83196a5c74b856603e7b358ac5d45164deeaa7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
