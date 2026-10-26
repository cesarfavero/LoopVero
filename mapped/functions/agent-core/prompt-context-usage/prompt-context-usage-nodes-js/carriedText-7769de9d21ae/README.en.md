# `carriedText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-context-usage-nodes.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-context-usage-nodes-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476435-476444](../../../../../../reference/runtime/host-main.cjs#L476435-L476444) | `FunctionDeclaration` | no | `carrier, text3` |
| [evaluation:255742-255751](../../../../../../reference/runtime/sand-eval-runner.cjs#L255742-L255751) | `FunctionDeclaration` | no | `carrier, text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476435-476444](../../../../../../reference/runtime/host-main.cjs#L476435-L476444) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:255742-255751](../../../../../../reference/runtime/sand-eval-runner.cjs#L255742-L255751) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:476435

Calls written directly in this body: `text3.slice`.

SHA-256 of the source span: `c86cf7295725940b761e430d3f5e87ecfcc6ff563fba91b03e02b6f31caf167c`.

### evaluation:255742

Calls written directly in this body: `text3.slice`.

SHA-256 of the source span: `c86cf7295725940b761e430d3f5e87ecfcc6ff563fba91b03e02b6f31caf167c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
