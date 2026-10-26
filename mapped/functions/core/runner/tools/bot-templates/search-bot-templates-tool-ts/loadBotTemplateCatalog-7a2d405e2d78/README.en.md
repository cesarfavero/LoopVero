# `loadBotTemplateCatalog`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/bot-templates/search-bot-templates-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/bot-templates/search-bot-templates-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770872-770885](../../../../../../../../reference/runtime/host-main.cjs#L770872-L770885) | `FunctionDeclaration` | yes | `ctx, marketplace` |
| [evaluation:569967-569980](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569967-L569980) | `FunctionDeclaration` | yes | `ctx, marketplace` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770872-770885](../../../../../../../../reference/runtime/host-main.cjs#L770872-L770885) | 2 | 0 | 1 | 3 | 1 | 1 |
| [evaluation:569967-569980](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569967-L569980) | 2 | 0 | 1 | 3 | 1 | 1 |

### host:770872

Calls written directly in this body: `listBotTemplateUseCases`, `marketplace.listListings`, `mergeBotTemplateCatalogs`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `99d97ae8ba5bcfc36ac220af3b65617c20d106126b5764cc2cfbf59be0214d91`.

### evaluation:569967

Calls written directly in this body: `listBotTemplateUseCases`, `marketplace.listListings`, `mergeBotTemplateCatalogs`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `fef1200895189fcdd0f6ed0c65a281fcc54d2096a1514c9107f4d0cddbf1180b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
