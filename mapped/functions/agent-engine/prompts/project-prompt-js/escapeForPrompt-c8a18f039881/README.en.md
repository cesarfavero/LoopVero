# `escapeForPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640961-640963](../../../../../../reference/runtime/host-main.cjs#L640961-L640963) | `FunctionDeclaration` | no | `value` |
| [evaluation:431574-431576](../../../../../../reference/runtime/sand-eval-runner.cjs#L431574-L431576) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640961-640963](../../../../../../reference/runtime/host-main.cjs#L640961-L640963) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431574-431576](../../../../../../reference/runtime/sand-eval-runner.cjs#L431574-L431576) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640961

Calls written directly in this body: `.replaceAll`, `.slice`, `JSON.stringify`.

SHA-256 of the source span: `1c710326a0f1cc0add1f2d76b4471d61d8f134b9ae7b3710e2340180efed6cec`.

### evaluation:431574

Calls written directly in this body: `.replaceAll`, `.slice`, `JSON.stringify`.

SHA-256 of the source span: `1c710326a0f1cc0add1f2d76b4471d61d8f134b9ae7b3710e2340180efed6cec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
