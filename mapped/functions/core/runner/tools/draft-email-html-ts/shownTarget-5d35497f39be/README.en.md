# `shownTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-email-html.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732562-732565](../../../../../../../reference/runtime/host-main.cjs#L732562-L732565) | `FunctionDeclaration` | no | `chunk` |
| [evaluation:539574-539577](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539574-L539577) | `FunctionDeclaration` | no | `chunk` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732562-732565](../../../../../../../reference/runtime/host-main.cjs#L732562-L732565) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539574-539577](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539574-L539577) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:732562

Calls written directly in this body: `.replace`, `chunk.replace`, `normalizedTarget`, `withoutTrailingProsePunctuation`.

SHA-256 of the source span: `7325086f6e11927e54b86c5dfbd2d69a2ce5e61fc878ad5aaa1a949bf9d68c19`.

### evaluation:539574

Calls written directly in this body: `.replace`, `chunk.replace`, `normalizedTarget`, `withoutTrailingProsePunctuation`.

SHA-256 of the source span: `7325086f6e11927e54b86c5dfbd2d69a2ce5e61fc878ad5aaa1a949bf9d68c19`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
