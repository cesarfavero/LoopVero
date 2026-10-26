# `createSearchBotTemplatesTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/bot-templates/search-bot-templates-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/bot-templates/search-bot-templates-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770896-770901](../../../../../../../../reference/runtime/host-main.cjs#L770896-L770901) | `ArrowFunctionExpression` | yes | `ctx, args` |
| [evaluation:569991-569996](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569991-L569996) | `ArrowFunctionExpression` | yes | `ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770896-770901](../../../../../../../../reference/runtime/host-main.cjs#L770896-L770901) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:569991-569996](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569991-L569996) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:770896

Calls written directly in this body: `loadBotTemplateCatalog`, `renderBotTemplateSearch`.

SHA-256 of the source span: `64773a346276978d12a4d1bf57542e45e5e928f076a691d265bad5f98db576e0`.

### evaluation:569991

Calls written directly in this body: `loadBotTemplateCatalog`, `renderBotTemplateSearch`.

SHA-256 of the source span: `64773a346276978d12a4d1bf57542e45e5e928f076a691d265bad5f98db576e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
