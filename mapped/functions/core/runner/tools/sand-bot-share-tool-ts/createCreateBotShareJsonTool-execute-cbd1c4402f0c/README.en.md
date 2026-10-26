# `createCreateBotShareJsonTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-bot-share-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-bot-share-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771207-771243](../../../../../../../reference/runtime/host-main.cjs#L771207-L771243) | `ArrowFunctionExpression` | yes | `ctx, recipe, shareDeps` |
| [evaluation:570441-570477](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570441-L570477) | `ArrowFunctionExpression` | yes | `ctx, recipe, shareDeps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771207-771243](../../../../../../../reference/runtime/host-main.cjs#L771207-L771243) | 6 | 0 | 2 | 6 | 1 | 1 |
| [evaluation:570441-570477](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570441-L570477) | 6 | 0 | 2 | 6 | 1 | 1 |

### host:771207

Calls written directly in this body: `botTemplateShareCreateInputFromRecipe`, `botTemplateShareRefusalToolResult`, `botTemplateShareToMessage`, `resolvedToolVisibility`, `shareDeps.emitShare`, `shareDeps.getShareScope`, `shareDeps.getSourceAgentId`, `shareDeps.getSourceAvatar`, `shareDeps.share.create`, `shareDeps.share.getShareScope`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `9f81d5168969688da763888490a959c3830353d2fe598167db104021d2278936`.

### evaluation:570441

Calls written directly in this body: `botTemplateShareCreateInputFromRecipe`, `botTemplateShareRefusalToolResult`, `botTemplateShareToMessage`, `resolvedToolVisibility`, `shareDeps.emitShare`, `shareDeps.getShareScope`, `shareDeps.getSourceAgentId`, `shareDeps.getSourceAvatar`, `shareDeps.share.create`, `shareDeps.share.getShareScope`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `abf2e80a870495c3228f352cf10839cf48240598b67c632ad8ab598f5c18d47b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
