# `appendOverviewNode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-context-usage-nodes.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-context-usage-nodes-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476417-476434](../../../../../../reference/runtime/host-main.cjs#L476417-L476434) | `FunctionDeclaration` | no | `nodes, params` |
| [evaluation:255724-255741](../../../../../../reference/runtime/sand-eval-runner.cjs#L255724-L255741) | `FunctionDeclaration` | no | `nodes, params` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476417-476434](../../../../../../reference/runtime/host-main.cjs#L476417-L476434) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255724-255741](../../../../../../reference/runtime/sand-eval-runner.cjs#L255724-L255741) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:476417

Calls written directly in this body: `carriedText`, `estimateStringTokenCount`, `new PromptContextNode`, `nodes.push`.

SHA-256 of the source span: `88989502fe09453d469d76878bfbbd2b030b51e4d95a75e10380108582f9a77a`.

### evaluation:255724

Calls written directly in this body: `carriedText`, `estimateStringTokenCount`, `new PromptContextNode`, `nodes.push`.

SHA-256 of the source span: `88989502fe09453d469d76878bfbbd2b030b51e4d95a75e10380108582f9a77a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
