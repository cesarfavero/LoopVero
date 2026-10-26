# `adminLockState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/in-app-links-guidance.ts` · [Module README](../../../../../modules/core/runner/in-app-links-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557675-557678](../../../../../../reference/runtime/host-main.cjs#L557675-L557678) | `FunctionDeclaration` | no | `row, facts` |
| [evaluation:546119-546122](../../../../../../reference/runtime/sand-eval-runner.cjs#L546119-L546122) | `FunctionDeclaration` | no | `row, facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557675-557678](../../../../../../reference/runtime/host-main.cjs#L557675-L557678) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546119-546122](../../../../../../reference/runtime/sand-eval-runner.cjs#L546119-L546122) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:557675

Calls written directly in this body: `adminLockRead`.

SHA-256 of the source span: `8890e52f91c69abe98020171c48b68ec1174fd783b7ab141a20feb2b0ce964d3`.

### evaluation:546119

Calls written directly in this body: `adminLockRead`.

SHA-256 of the source span: `8890e52f91c69abe98020171c48b68ec1174fd783b7ab141a20feb2b0ce964d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
