# `assertPathOutsideProtectedRoots`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/protected-path-guard.ts` · [Module README](../../../../../modules/host/box/protected-path-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679114-679129](../../../../../../reference/runtime/host-main.cjs#L679114-L679129) | `FunctionDeclaration` | yes | `protectedRoots, candidatePath, baseDir` |
| [evaluation:626979-626994](../../../../../../reference/runtime/sand-eval-runner.cjs#L626979-L626994) | `FunctionDeclaration` | yes | `protectedRoots, candidatePath, baseDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679114-679129](../../../../../../reference/runtime/host-main.cjs#L679114-L679129) | 4 | 2 | 2 | 1 | 2 | 0 |
| [evaluation:626979-626994](../../../../../../reference/runtime/sand-eval-runner.cjs#L626979-L626994) | 4 | 2 | 2 | 1 | 2 | 0 |

### host:679114

Calls written directly in this body: `isModelReadableStorePath`, `isPathWithin`, `new SandProtectedPathError`, `realpathNearestExisting`, `refusalMessage2`.

Explicit throw targets: `SandProtectedPathError`.

SHA-256 of the source span: `ce945eeccf4940fae7cc26d76514105a006071785b75d01a7a0efc11afe44d47`.

### evaluation:626979

Calls written directly in this body: `isModelReadableStorePath`, `isPathWithin2`, `new SandProtectedPathError`, `realpathNearestExisting`, `refusalMessage`.

Explicit throw targets: `SandProtectedPathError`.

SHA-256 of the source span: `1af73f0e21fd9eabbb70fb003900f775905d3b1da30b443473770022580057ec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
