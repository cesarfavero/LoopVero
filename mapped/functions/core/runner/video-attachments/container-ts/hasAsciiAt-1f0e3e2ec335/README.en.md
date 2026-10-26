# `hasAsciiAt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/video-attachments/container.ts` · [Module README](../../../../../../modules/core/runner/video-attachments/container-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533564-533570](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533564-L533570) | `FunctionDeclaration` | no | `bytes, offset2, text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533564-533570](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533564-L533570) | 2 | 1 | 0 | 3 | 0 | 0 |

### evaluation:533564

Calls written directly in this body: `text3.charCodeAt`.

Assignment or increment targets: `index`.

SHA-256 of the source span: `249f530fac0594aa8784f351a2d816c3c905a1b877780a9b581e36ea13636bf6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
