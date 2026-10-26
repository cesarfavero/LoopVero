# `renderBotTemplateSearch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/bot-templates/search-bot-templates-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/bot-templates/search-bot-templates-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770836-770871](../../../../../../../../reference/runtime/host-main.cjs#L770836-L770871) | `FunctionDeclaration` | no | `templates, args, options2 = {}` |
| [evaluation:569931-569966](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569931-L569966) | `FunctionDeclaration` | no | `templates, args, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770836-770871](../../../../../../../../reference/runtime/host-main.cjs#L770836-L770871) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:569931-569966](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569931-L569966) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:770836

Calls written directly in this body: `.join`, `.slice`, `Math.min`, `listed.map`, `matches.map`, `searchBotTemplates`, `templates.filter`.

SHA-256 of the source span: `467d2e8e47400bc2c72ddf22076f6437eec499dfde8cbfe3d57a18d7fa0326ca`.

### evaluation:569931

Calls written directly in this body: `.join`, `.slice`, `Math.min`, `listed.map`, `matches.map`, `searchBotTemplates`, `templates.filter`.

SHA-256 of the source span: `467d2e8e47400bc2c72ddf22076f6437eec499dfde8cbfe3d57a18d7fa0326ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
