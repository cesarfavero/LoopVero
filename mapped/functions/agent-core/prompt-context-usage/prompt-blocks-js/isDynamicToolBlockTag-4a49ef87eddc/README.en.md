# `isDynamicToolBlockTag`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-blocks.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-blocks-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476147-476149](../../../../../../reference/runtime/host-main.cjs#L476147-L476149) | `FunctionDeclaration` | no | `tagName2` |
| [evaluation:255457-255459](../../../../../../reference/runtime/sand-eval-runner.cjs#L255457-L255459) | `FunctionDeclaration` | no | `tagName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476147-476149](../../../../../../reference/runtime/host-main.cjs#L476147-L476149) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255457-255459](../../../../../../reference/runtime/sand-eval-runner.cjs#L255457-L255459) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476147

Calls written directly in this body: `tagName2.startsWith`.

SHA-256 of the source span: `d7994c08da08649f7899d9acb54ad36c8f90e6bbb5a1e9d27863956550deef6c`.

### evaluation:255457

Calls written directly in this body: `tagName.startsWith`.

SHA-256 of the source span: `676a239bbda1d9374591e27dd0b9820a89fb968f2311db8dd5d9bbfb15482f28`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
