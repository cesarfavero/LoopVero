# `closeInheritedFd`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/launch-secrets.ts` · [Module README](../../../../modules/evaluation/launch-secrets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:630642-630651](../../../../../reference/runtime/sand-eval-runner.cjs#L630642-L630651) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630642-630651](../../../../../reference/runtime/sand-eval-runner.cjs#L630642-L630651) | 2 | 0 | 0 | 2 | 1 | 1 |

### evaluation:630642

Calls written directly in this body: `findSystemErrno`, `inheritedFd`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `8990dbf653468d7db150f6d056a0da804c3a3a0e9e4eeb4ee2d0b1b960878012`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
