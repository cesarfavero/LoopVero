# `settlesInitialUserPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-context-parts.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-context-parts-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476282-476284](../../../../../../reference/runtime/host-main.cjs#L476282-L476284) | `FunctionDeclaration` | no | `message` |
| [evaluation:255592-255594](../../../../../../reference/runtime/sand-eval-runner.cjs#L255592-L255594) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476282-476284](../../../../../../reference/runtime/host-main.cjs#L476282-L476284) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255592-255594](../../../../../../reference/runtime/sand-eval-runner.cjs#L255592-L255594) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476282

Calls written directly in this body: `isSummaryCarrierMessage`.

SHA-256 of the source span: `cbc0f4b96184ddc02c6c6eca1bfdc3fdc165bc0b08ed9b41d25b20d27b3ce65d`.

### evaluation:255592

Calls written directly in this body: `isSummaryCarrierMessage`.

SHA-256 of the source span: `cbc0f4b96184ddc02c6c6eca1bfdc3fdc165bc0b08ed9b41d25b20d27b3ce65d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
