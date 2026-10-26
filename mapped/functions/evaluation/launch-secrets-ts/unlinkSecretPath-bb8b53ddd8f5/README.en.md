# `unlinkSecretPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/launch-secrets.ts` · [Module README](../../../../modules/evaluation/launch-secrets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:630631-630641](../../../../../reference/runtime/sand-eval-runner.cjs#L630631-L630641) | `FunctionDeclaration` | yes | `path33, missingIsOk` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630631-630641](../../../../../reference/runtime/sand-eval-runner.cjs#L630631-L630641) | 2 | 0 | 1 | 2 | 1 | 1 |

### evaluation:630631

Calls written directly in this body: `findSystemErrno`, `path33.startsWith`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `1ef7a442dfab84cbc799f86215fe00ae99428b26da9ddf55d11663a3c13247d4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
