# `visibilityHolds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/in-app-links-guidance.ts` · [Module README](../../../../../modules/core/runner/in-app-links-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557664-557669](../../../../../../reference/runtime/host-main.cjs#L557664-L557669) | `FunctionDeclaration` | no | `visibility, facts` |
| [evaluation:546108-546113](../../../../../../reference/runtime/sand-eval-runner.cjs#L546108-L546113) | `FunctionDeclaration` | no | `visibility, facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557664-557669](../../../../../../reference/runtime/host-main.cjs#L557664-L557669) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:546108-546113](../../../../../../reference/runtime/sand-eval-runner.cjs#L546108-L546113) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:557664

Calls written directly in this body: `.some`, `factHolds`, `gates.some`.

SHA-256 of the source span: `b855d559f15803319f0abdba3c0b4a42dbd0f21a14bf4be792e6e7b8d9a782f7`.

### evaluation:546108

Calls written directly in this body: `.some`, `factHolds`, `gates.some`.

SHA-256 of the source span: `b855d559f15803319f0abdba3c0b4a42dbd0f21a14bf4be792e6e7b8d9a782f7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
