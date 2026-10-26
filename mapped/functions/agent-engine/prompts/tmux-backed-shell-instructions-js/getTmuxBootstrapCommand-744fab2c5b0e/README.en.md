# `getTmuxBootstrapCommand`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/tmux-backed-shell-instructions.js` · [Module README](../../../../../modules/agent-engine/prompts/tmux-backed-shell-instructions-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:671675-671679](../../../../../../reference/runtime/host-main.cjs#L671675-L671679) | `FunctionDeclaration` | no | `{ sharedSessionName, selfHostedMachine = false } = {}` |
| [evaluation:465107-465111](../../../../../../reference/runtime/sand-eval-runner.cjs#L465107-L465111) | `FunctionDeclaration` | no | `{ sharedSessionName, selfHostedMachine = false } = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:671675-671679](../../../../../../reference/runtime/host-main.cjs#L671675-L671679) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:465107-465111](../../../../../../reference/runtime/sand-eval-runner.cjs#L465107-L465111) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:671675

Calls written directly in this body: `tmuxCommand`.

SHA-256 of the source span: `cb97efb2bbb7cedb9f787138c661f76ad23ce1f109828126a22df9086ecb8911`.

### evaluation:465107

Calls written directly in this body: `tmuxCommand`.

SHA-256 of the source span: `cb97efb2bbb7cedb9f787138c661f76ad23ce1f109828126a22df9086ecb8911`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
