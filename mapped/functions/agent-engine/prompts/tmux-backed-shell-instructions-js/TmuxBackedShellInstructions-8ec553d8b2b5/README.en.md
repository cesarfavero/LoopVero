# `TmuxBackedShellInstructions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/tmux-backed-shell-instructions.js` · [Module README](../../../../../modules/agent-engine/prompts/tmux-backed-shell-instructions-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:671693-671696](../../../../../../reference/runtime/host-main.cjs#L671693-L671696) | `FunctionDeclaration` | no | `{ sharedSessionName, selfHostedMachine = false } = {}` |
| [evaluation:465125-465128](../../../../../../reference/runtime/sand-eval-runner.cjs#L465125-L465128) | `FunctionDeclaration` | no | `{ sharedSessionName, selfHostedMachine = false } = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:671693-671696](../../../../../../reference/runtime/host-main.cjs#L671693-L671696) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:465125-465128](../../../../../../reference/runtime/sand-eval-runner.cjs#L465125-L465128) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:671693

Calls written directly in this body: `getTmuxBootstrapCommand`, `jsx`, `jsxs`, `tmuxCommand`, `tmuxConfigGuidance`.

SHA-256 of the source span: `8cb11e9cd7b28a9b70c6fcfd70440729f7e72e57c5ee44c819d0557a0075e49b`.

### evaluation:465125

Calls written directly in this body: `getTmuxBootstrapCommand`, `jsx`, `jsxs`, `tmuxCommand`, `tmuxConfigGuidance`.

SHA-256 of the source span: `8cb11e9cd7b28a9b70c6fcfd70440729f7e72e57c5ee44c819d0557a0075e49b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
