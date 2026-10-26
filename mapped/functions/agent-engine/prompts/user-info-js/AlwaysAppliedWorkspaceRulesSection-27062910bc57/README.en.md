# `AlwaysAppliedWorkspaceRulesSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640064-640066](../../../../../../reference/runtime/host-main.cjs#L640064-L640066) | `FunctionDeclaration` | no | `{ globalRules, description: description9 = "These are workspace-level rules that the agent must always follow." }` |
| [evaluation:430678-430680](../../../../../../reference/runtime/sand-eval-runner.cjs#L430678-L430680) | `FunctionDeclaration` | no | `{ globalRules, description: description9 = "These are workspace-level rules that the agent must always follow." }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640064-640066](../../../../../../reference/runtime/host-main.cjs#L640064-L640066) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430678-430680](../../../../../../reference/runtime/sand-eval-runner.cjs#L430678-L430680) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640064

Calls written directly in this body: `globalRules.map`, `jsx`.

SHA-256 of the source span: `d71367910cd7c07109b2543256d49dac64faf7344f937da1d8cf4aeebba65bd8`.

### evaluation:430678

Calls written directly in this body: `globalRules.map`, `jsx`.

SHA-256 of the source span: `d71367910cd7c07109b2543256d49dac64faf7344f937da1d8cf4aeebba65bd8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
