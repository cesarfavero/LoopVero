# `collapseWhitespace`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640951-640953](../../../../../../reference/runtime/host-main.cjs#L640951-L640953) | `FunctionDeclaration` | no | `value` |
| [evaluation:431564-431566](../../../../../../reference/runtime/sand-eval-runner.cjs#L431564-L431566) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640951-640953](../../../../../../reference/runtime/host-main.cjs#L640951-L640953) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431564-431566](../../../../../../reference/runtime/sand-eval-runner.cjs#L431564-L431566) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640951

Calls written directly in this body: `.trim`, `value.replace`.

SHA-256 of the source span: `7ec7c20226b10ae08b3c6dc1303238ca44f84f2721ae8f8b632cc666910ce684`.

### evaluation:431564

Calls written directly in this body: `.trim`, `value.replace`.

SHA-256 of the source span: `7ec7c20226b10ae08b3c6dc1303238ca44f84f2721ae8f8b632cc666910ce684`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
