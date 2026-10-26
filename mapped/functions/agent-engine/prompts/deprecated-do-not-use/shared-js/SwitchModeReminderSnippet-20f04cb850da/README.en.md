# `SwitchModeReminderSnippet`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/deprecated-do-not-use/shared.js` · [Module README](../../../../../../modules/agent-engine/prompts/deprecated-do-not-use/shared-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636255-636260](../../../../../../../reference/runtime/host-main.cjs#L636255-L636260) | `FunctionDeclaration` | no | `{ currentMode, targetModes, fromModes }` |
| [evaluation:424311-424316](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424311-L424316) | `FunctionDeclaration` | no | `{ currentMode, targetModes, fromModes }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636255-636260](../../../../../../../reference/runtime/host-main.cjs#L636255-L636260) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424311-424316](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424311-L424316) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:636255

Calls written directly in this body: `buildCurrentModeStatement`.

SHA-256 of the source span: `9ced3b158c79ee82dd09bba6a979d66f0f2afdf4293f6ace816a417a7497cf91`.

### evaluation:424311

Calls written directly in this body: `buildCurrentModeStatement`.

SHA-256 of the source span: `9ced3b158c79ee82dd09bba6a979d66f0f2afdf4293f6ace816a417a7497cf91`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
