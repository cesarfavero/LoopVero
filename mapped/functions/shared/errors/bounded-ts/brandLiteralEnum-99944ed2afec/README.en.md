# `brandLiteralEnum`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/errors/bounded.ts` · [Module README](../../../../../modules/shared/errors/bounded-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:155158-155160](../../../../../../reference/runtime/host-main.cjs#L155158-L155160) | `FunctionDeclaration` | no | `value` |
| [evaluation:475826-475828](../../../../../../reference/runtime/sand-eval-runner.cjs#L475826-L475828) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:155158-155160](../../../../../../reference/runtime/host-main.cjs#L155158-L155160) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475826-475828](../../../../../../reference/runtime/sand-eval-runner.cjs#L475826-L475828) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:155158

Calls written directly in this body: `brandClosed`.

SHA-256 of the source span: `a710220a33993ea21670c80bd599eb0ecf273488e10ca36c520748157b57fe49`.

### evaluation:475826

Calls written directly in this body: `brandClosed`.

SHA-256 of the source span: `a710220a33993ea21670c80bd599eb0ecf273488e10ca36c520748157b57fe49`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
