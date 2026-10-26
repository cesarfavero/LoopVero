# `emailBodyHtmlTag`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-email-html.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732464-732466](../../../../../../../reference/runtime/host-main.cjs#L732464-L732466) | `FunctionDeclaration` | no | `body` |
| [evaluation:539476-539478](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539476-L539478) | `FunctionDeclaration` | no | `body` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732464-732466](../../../../../../../reference/runtime/host-main.cjs#L732464-L732466) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539476-539478](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539476-L539478) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:732464

Calls written directly in this body: `HTML_MARKUP.exec`.

SHA-256 of the source span: `7ad35506e62c72b7bcb235fd2eeb73c53d9045eb61c18c44b063c16480fc72f9`.

### evaluation:539476

Calls written directly in this body: `HTML_MARKUP.exec`.

SHA-256 of the source span: `7ad35506e62c72b7bcb235fd2eeb73c53d9045eb61c18c44b063c16480fc72f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
