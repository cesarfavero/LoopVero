# `renderLinkLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sessions/related-conversations-prompt.ts` · [Module README](../../../../../../modules/core/runner/sessions/related-conversations-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538429-538431](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538429-L538431) | `FunctionDeclaration` | no | `lines2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538429-538431](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538429-L538431) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:538429

Calls written directly in this body: `.join`, `lines2.slice`.

SHA-256 of the source span: `669a9b4ff9b1ae64250cd5a3e0db265b0430dcd281c1484a84e3d8cb9aa2437d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
