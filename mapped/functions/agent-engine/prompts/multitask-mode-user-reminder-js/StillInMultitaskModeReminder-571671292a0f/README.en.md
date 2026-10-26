# `StillInMultitaskModeReminder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/multitask-mode-user-reminder.js` · [Module README](../../../../../modules/agent-engine/prompts/multitask-mode-user-reminder-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:638473-638476](../../../../../../reference/runtime/host-main.cjs#L638473-L638476) | `FunctionDeclaration` | no | `props` |
| [evaluation:427203-427206](../../../../../../reference/runtime/sand-eval-runner.cjs#L427203-L427206) | `FunctionDeclaration` | no | `props` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:638473-638476](../../../../../../reference/runtime/host-main.cjs#L638473-L638476) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:427203-427206](../../../../../../reference/runtime/sand-eval-runner.cjs#L427203-L427206) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:638473

Calls written directly in this body: `jsx`, `jsxs`, `usesAggressiveMultitaskInstructions`.

SHA-256 of the source span: `a833c538684a05c10cd6a577673a578e0ff3e3d6df88faa3fc10b44ac6326d60`.

### evaluation:427203

Calls written directly in this body: `jsx`, `jsxs`, `usesAggressiveMultitaskInstructions`.

SHA-256 of the source span: `a833c538684a05c10cd6a577673a578e0ff3e3d6df88faa3fc10b44ac6326d60`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
