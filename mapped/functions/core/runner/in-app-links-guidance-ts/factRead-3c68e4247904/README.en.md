# `factRead`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/in-app-links-guidance.ts` · [Module README](../../../../../modules/core/runner/in-app-links-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557655-557657](../../../../../../reference/runtime/host-main.cjs#L557655-L557657) | `FunctionDeclaration` | no | `facts, fact` |
| [evaluation:546102-546104](../../../../../../reference/runtime/sand-eval-runner.cjs#L546102-L546104) | `FunctionDeclaration` | no | `facts, fact` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557655-557657](../../../../../../reference/runtime/host-main.cjs#L557655-L557657) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546102-546104](../../../../../../reference/runtime/sand-eval-runner.cjs#L546102-L546104) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:557655

Calls written directly in this body: `isSandUiMapFactName`.

SHA-256 of the source span: `b35c603bd19cd91dab211411de92c496c095d7fdf0122e87c66dd07438a6d08e`.

### evaluation:546102

Calls written directly in this body: `isSandUiMapFactName`.

SHA-256 of the source span: `b35c603bd19cd91dab211411de92c496c095d7fdf0122e87c66dd07438a6d08e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
