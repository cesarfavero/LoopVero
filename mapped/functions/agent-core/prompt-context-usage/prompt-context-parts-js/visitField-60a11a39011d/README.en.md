# `visitField`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-context-parts.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-context-parts-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476337-476344](../../../../../../reference/runtime/host-main.cjs#L476337-L476344) | `FunctionDeclaration` | no | `scope, index, field, value, valueKind, toolName` |
| [evaluation:255647-255654](../../../../../../reference/runtime/sand-eval-runner.cjs#L255647-L255654) | `FunctionDeclaration` | no | `scope, index, field, value, valueKind, toolName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476337-476344](../../../../../../reference/runtime/host-main.cjs#L476337-L476344) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:255647-255654](../../../../../../reference/runtime/sand-eval-runner.cjs#L255647-L255654) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:476337

Calls written directly in this body: `contentPath`, `stringifyPromptContextValue`, `visitValue`.

SHA-256 of the source span: `ddb62f4a5269f7fa37f89c96d5ba2fb7e51d0ea6c2908474f6e22d2a0f8b14c3`.

### evaluation:255647

Calls written directly in this body: `contentPath`, `stringifyPromptContextValue`, `visitValue`.

SHA-256 of the source span: `ddb62f4a5269f7fa37f89c96d5ba2fb7e51d0ea6c2908474f6e22d2a0f8b14c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
