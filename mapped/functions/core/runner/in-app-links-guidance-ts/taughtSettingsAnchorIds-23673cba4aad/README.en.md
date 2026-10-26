# `taughtSettingsAnchorIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/in-app-links-guidance.ts` · [Module README](../../../../../modules/core/runner/in-app-links-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557707-557709](../../../../../../reference/runtime/host-main.cjs#L557707-L557709) | `FunctionDeclaration` | no | `facts` |
| [evaluation:546143-546145](../../../../../../reference/runtime/sand-eval-runner.cjs#L546143-L546145) | `FunctionDeclaration` | no | `facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557707-557709](../../../../../../reference/runtime/host-main.cjs#L557707-L557709) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546143-546145](../../../../../../reference/runtime/sand-eval-runner.cjs#L546143-L546145) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557707

Calls written directly in this body: `.map`, `taughtSettingsRows`.

SHA-256 of the source span: `847d045877ee018521243c49d46c520846d3d7980b1d053a4b65cf0a08667b95`.

### evaluation:546143

Calls written directly in this body: `.map`, `taughtSettingsRows`.

SHA-256 of the source span: `847d045877ee018521243c49d46c520846d3d7980b1d053a4b65cf0a08667b95`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
