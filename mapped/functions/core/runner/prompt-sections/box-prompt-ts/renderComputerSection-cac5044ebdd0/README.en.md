# `renderComputerSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/box-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/box-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529047-529124](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529047-L529124) | `FunctionDeclaration` | no | `host, builtinSkillPointers, skillAccess = "read"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529047-529124](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529047-L529124) | 10 | 0 | 0 | 6 | 0 | 0 |

### evaluation:529047

Calls written directly in this body: `.join`, `availableDesktopExecutor`, `boxDriverDisplayLine`, `builtinSkillPointer`, `combinedBoxDesktopLines`, `desktopExecutorPort.computerPrompt`, `desktopExecutorPort.sharesBrowserTools`, `host.gates.passwordRulesReport`, `host.gates.promptContradictionFixes`, `host.gates.secureValues`, `host.gates.slowStepHeadsUp`, `host.isCombinedComputerUseAvailable`, `host.passwordRulesReportCopy`, `host.playwrightRunCode.current`, `host.resolveBoxBrowser`, `host.slowStepHeadsUpCopy`, `leanComputerPrompt`, `passwordRulesReportClause`, `sitePlaybookDispatchLine`, `slowStepHeadsUpLine`, `subagentHumanStepRule`.

SHA-256 of the source span: `bba1b43f5b8dd59f0922a89a5391aa2cb9d52da561f7da069940668416183b85`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
