# `McpMetaToolServersSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640443-640450](../../../../../../reference/runtime/host-main.cjs#L640443-L640450) | `FunctionDeclaration` | no | `{ mcpMetaToolOptions, mcpInfoComplete }` |
| [evaluation:431057-431064](../../../../../../reference/runtime/sand-eval-runner.cjs#L431057-L431064) | `FunctionDeclaration` | no | `{ mcpMetaToolOptions, mcpInfoComplete }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640443-640450](../../../../../../reference/runtime/host-main.cjs#L640443-L640450) | 5 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431057-431064](../../../../../../reference/runtime/sand-eval-runner.cjs#L431057-L431064) | 5 | 0 | 0 | 2 | 0 | 0 |

### host:640443

Calls written directly in this body: `McpMetaToolServerList`, `jsx`, `jsxs`.

SHA-256 of the source span: `e4ffc87413d1a1cc874a685243fd8285e18d9f6ab215eada5bbcd822807754a2`.

### evaluation:431057

Calls written directly in this body: `McpMetaToolServerList`, `jsx`, `jsxs`.

SHA-256 of the source span: `e4ffc87413d1a1cc874a685243fd8285e18d9f6ab215eada5bbcd822807754a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
