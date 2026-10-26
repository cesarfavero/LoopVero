# `renderAutomationRuntimeStatusReminder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `core/runner/prompt-sections/automations-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/automations-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:528562-528579](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528562-L528579) | `FunctionDeclaration` | no | `automations, timeZone, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528562-528579](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528562-L528579) | 5 | 1 | 0 | 2 | 0 | 0 |

### evaluation:528562

Calls written directly in this body: `automation.runs.filter`, `automationDefinitionLine`, `formatTimestamp2`, `lines2.join`, `lines2.push`, `summarizeLastRun`, `systemReminder`.

SHA-256 of the source span: `ab26357803a4d8ad3b4f246c43e913e1de8fadcfbd56f679d1ccb91b17610e6f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
