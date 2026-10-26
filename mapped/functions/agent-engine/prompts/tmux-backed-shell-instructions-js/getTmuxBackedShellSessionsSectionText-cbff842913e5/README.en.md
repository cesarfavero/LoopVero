# `getTmuxBackedShellSessionsSectionText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/tmux-backed-shell-instructions.js` · [Module README](../../../../../modules/agent-engine/prompts/tmux-backed-shell-instructions-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:671680-671692](../../../../../../reference/runtime/host-main.cjs#L671680-L671692) | `FunctionDeclaration` | no | `{ sharedSessionName, selfHostedMachine = false } = {}` |
| [evaluation:465112-465124](../../../../../../reference/runtime/sand-eval-runner.cjs#L465112-L465124) | `FunctionDeclaration` | no | `{ sharedSessionName, selfHostedMachine = false } = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:671680-671692](../../../../../../reference/runtime/host-main.cjs#L671680-L671692) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:465112-465124](../../../../../../reference/runtime/sand-eval-runner.cjs#L465112-L465124) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:671680

Calls written directly in this body: `getTmuxBootstrapCommand`, `tmuxCommand`, `tmuxConfigGuidance`.

SHA-256 of the source span: `a5615d33773171fdfc0896432df04731e229b1f69b8e10c1958f71ac728d5cd0`.

### evaluation:465112

Calls written directly in this body: `getTmuxBootstrapCommand`, `tmuxCommand`, `tmuxConfigGuidance`.

SHA-256 of the source span: `a5615d33773171fdfc0896432df04731e229b1f69b8e10c1958f71ac728d5cd0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
