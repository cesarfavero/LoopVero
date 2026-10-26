# `promptContextUsageTree`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-context-usage-nodes.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-context-usage-nodes-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476411-476416](../../../../../../reference/runtime/host-main.cjs#L476411-L476416) | `FunctionDeclaration` | no | `nodes` |
| [evaluation:255718-255723](../../../../../../reference/runtime/sand-eval-runner.cjs#L255718-L255723) | `FunctionDeclaration` | no | `nodes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476411-476416](../../../../../../reference/runtime/host-main.cjs#L476411-L476416) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255718-255723](../../../../../../reference/runtime/sand-eval-runner.cjs#L255718-L255723) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476411

Calls written directly in this body: `new PromptContextUsageTree`.

SHA-256 of the source span: `97c28c564435121c42ac5f2f28a8079620558de65db7b323381652f2f142821b`.

### evaluation:255718

Calls written directly in this body: `new PromptContextUsageTree`.

SHA-256 of the source span: `97c28c564435121c42ac5f2f28a8079620558de65db7b323381652f2f142821b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
