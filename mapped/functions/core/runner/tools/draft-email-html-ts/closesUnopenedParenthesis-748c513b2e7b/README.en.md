# `closesUnopenedParenthesis`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-email-html.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732606-732608](../../../../../../../reference/runtime/host-main.cjs#L732606-L732608) | `FunctionDeclaration` | no | `url2` |
| [evaluation:539618-539620](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539618-L539620) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732606-732608](../../../../../../../reference/runtime/host-main.cjs#L732606-L732608) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539618-539620](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539618-L539620) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:732606

Calls written directly in this body: `url2.endsWith`, `url2.split`.

SHA-256 of the source span: `d97129337cf3a883ac27e0e9684aba9f860c157914c195925ccefb78cf841104`.

### evaluation:539618

Calls written directly in this body: `url2.endsWith`, `url2.split`.

SHA-256 of the source span: `d97129337cf3a883ac27e0e9684aba9f860c157914c195925ccefb78cf841104`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
