# `isInitialPromptScaffoldTag`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-blocks.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-blocks-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476160-476162](../../../../../../reference/runtime/host-main.cjs#L476160-L476162) | `FunctionDeclaration` | no | `tagName2` |
| [evaluation:255470-255472](../../../../../../reference/runtime/sand-eval-runner.cjs#L255470-L255472) | `FunctionDeclaration` | no | `tagName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476160-476162](../../../../../../reference/runtime/host-main.cjs#L476160-L476162) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255470-255472](../../../../../../reference/runtime/sand-eval-runner.cjs#L255470-L255472) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476160

Calls written directly in this body: `INITIAL_PROMPT_SCAFFOLD_TAGS_NON_MCP.some`, `isToolDiscoveryBlockTag`.

SHA-256 of the source span: `5f06d3ffda0ed3b5e866fa271f16da7a08d920709014119746e9fd99c7637a4a`.

### evaluation:255470

Calls written directly in this body: `INITIAL_PROMPT_SCAFFOLD_TAGS_NON_MCP.some`, `isToolDiscoveryBlockTag`.

SHA-256 of the source span: `f0a381a0b97e398ffe590b9ace1376a51182ae1870616a88492413cf4c1a4b64`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
