# `searchBotTemplates`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/bot-templates/search-bot-templates-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/bot-templates/search-bot-templates-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770788-770792](../../../../../../../../reference/runtime/host-main.cjs#L770788-L770792) | `FunctionDeclaration` | no | `templates, query2, limit3` |
| [evaluation:569883-569887](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569883-L569887) | `FunctionDeclaration` | no | `templates, query2, limit3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770788-770792](../../../../../../../../reference/runtime/host-main.cjs#L770788-L770792) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:569883-569887](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569883-L569887) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:770788

Calls written directly in this body: `.filter`, `.map`, `.slice`, `.sort`, `queryTerms`, `templates.map`.

SHA-256 of the source span: `d98b2141a65a43eb8fcf531cc6954096c7d34600b2415d8cf267ed6bbb674c42`.

### evaluation:569883

Calls written directly in this body: `.filter`, `.map`, `.slice`, `.sort`, `queryTerms`, `templates.map`.

SHA-256 of the source span: `d98b2141a65a43eb8fcf531cc6954096c7d34600b2415d8cf267ed6bbb674c42`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
