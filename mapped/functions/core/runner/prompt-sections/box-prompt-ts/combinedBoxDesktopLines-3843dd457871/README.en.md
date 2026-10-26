# `combinedBoxDesktopLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/box-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/box-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:528986-529006](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528986-L529006) | `FunctionDeclaration` | no | `includeHumanSteps = true, desktopExecutor = false, {   contradictionFixes = false,   skillAccess = "read",   slowStepHeadsUp } = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528986-529006](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528986-L529006) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:528986

Calls written directly in this body: `SKILL_OPEN_COPY[computed].openAndFollow`, `sitePlaybookDispatchLine`.

SHA-256 of the source span: `c1d23a97a643c9041365877c29f138a9c1c1a3813274dce20f1dfa84d7db334d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
