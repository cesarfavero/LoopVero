# `isMissingPathError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/errors/system-errno.ts` · [Module README](../../../../../modules/shared/errors/system-errno-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:787-790](../../../../../../reference/runtime/host-main.cjs#L787-L790) | `FunctionDeclaration` | no | `error64` |
| [evaluation:474678-474681](../../../../../../reference/runtime/sand-eval-runner.cjs#L474678-L474681) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:787-790](../../../../../../reference/runtime/host-main.cjs#L787-L790) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:474678-474681](../../../../../../reference/runtime/sand-eval-runner.cjs#L474678-L474681) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:787

Calls written directly in this body: `findSystemErrno`.

SHA-256 of the source span: `5f15e8fccd55e1f7b60443d84e29d02de7a21ecc342bea9755ad5273b34c7528`.

### evaluation:474678

Calls written directly in this body: `findSystemErrno`.

SHA-256 of the source span: `63edd3f4f98caa0b77386de64abffebeed5ced3197c06bbd8c9fe99dab0bd6fc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
