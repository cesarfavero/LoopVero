# `runTurnToolBuilders`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/turn-tool-builder.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/turn-tool-builder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:564594-564640](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564594-L564640) | `FunctionDeclaration` | no | `builders, ctx, withheld, presenceOnly` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:564594-564640](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564594-L564640) | 9 | 4 | 0 | 1 | 0 | 0 |

### evaluation:564594

Calls written directly in this body: `GROK_BOT_TOOL_ID_BY_MODEL_NAME.get`, `builder.build`, `builder.names.flatMap`, `builder.names.some`, `builtNames.add`, `decisions.offers`, `declared.has`, `missing.has`, `new Set`, `presenceOnly.ctx`, `tools.push`, `undeclaredTools.increment`, `withheld.push`.

Assignment or increment targets: `presenceCtx`.

SHA-256 of the source span: `84ba743c45d4ae6356e1b6e0a536d0d1352cc7df91fd2bcb28368372fdf669ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
