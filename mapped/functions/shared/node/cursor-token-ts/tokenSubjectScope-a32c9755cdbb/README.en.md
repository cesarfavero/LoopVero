# `tokenSubjectScope`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-token.ts` · [Module README](../../../../../modules/shared/node/cursor-token-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:175730-175733](../../../../../../reference/runtime/host-main.cjs#L175730-L175733) | `FunctionDeclaration` | no | `accessToken` |
| [evaluation:511709-511712](../../../../../../reference/runtime/sand-eval-runner.cjs#L511709-L511712) | `FunctionDeclaration` | no | `accessToken` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175730-175733](../../../../../../reference/runtime/host-main.cjs#L175730-L175733) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:511709-511712](../../../../../../reference/runtime/sand-eval-runner.cjs#L511709-L511712) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:175730

Calls written directly in this body: `accountSubjectScope`, `parseJwtPayload`.

SHA-256 of the source span: `b239582040885db3b13775b53a708cdfaef64dd0bc28ea88d14e78a937d321b7`.

### evaluation:511709

Calls written directly in this body: `accountSubjectScope`, `parseJwtPayload`.

SHA-256 of the source span: `b239582040885db3b13775b53a708cdfaef64dd0bc28ea88d14e78a937d321b7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
