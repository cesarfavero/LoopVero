# `GitInstructions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/cloud-agent.js` · [Module README](../../../../../modules/agent-engine/prompts/cloud-agent-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636224-636236](../../../../../../reference/runtime/host-main.cjs#L636224-L636236) | `FunctionDeclaration` | no | `{ toolInfo, shouldShowTestingInstructions, suppressCreatedPrMention = false, startedAsNewProject = false, isSelfHostedMachine = false, ownerAllowsAgentMerge = false }` |
| [evaluation:424280-424292](../../../../../../reference/runtime/sand-eval-runner.cjs#L424280-L424292) | `FunctionDeclaration` | no | `{ toolInfo, shouldShowTestingInstructions, suppressCreatedPrMention = false, startedAsNewProject = false, isSelfHostedMachine = false, ownerAllowsAgentMerge = false }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636224-636236](../../../../../../reference/runtime/host-main.cjs#L636224-L636236) | 6 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424280-424292](../../../../../../reference/runtime/sand-eval-runner.cjs#L424280-L424292) | 6 | 0 | 0 | 1 | 0 | 0 |

### host:636224

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `d1ce3321ea40a3c2bdc7185a41d4a1cd9a211034802af5af0ff80dddf8661cda`.

### evaluation:424280

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `d1ce3321ea40a3c2bdc7185a41d4a1cd9a211034802af5af0ff80dddf8661cda`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
