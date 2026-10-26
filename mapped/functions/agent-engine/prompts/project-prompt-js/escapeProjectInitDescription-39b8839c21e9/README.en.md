# `escapeProjectInitDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640968-640974](../../../../../../reference/runtime/host-main.cjs#L640968-L640974) | `FunctionDeclaration` | no | `initDescription` |
| [evaluation:431581-431587](../../../../../../reference/runtime/sand-eval-runner.cjs#L431581-L431587) | `FunctionDeclaration` | no | `initDescription` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640968-640974](../../../../../../reference/runtime/host-main.cjs#L640968-L640974) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431581-431587](../../../../../../reference/runtime/sand-eval-runner.cjs#L431581-L431587) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:640968

Calls written directly in this body: `.join`, `.slice`, `collapseWhitespace`, `escapeForPrompt`.

SHA-256 of the source span: `a849bf88139fcfba7b1af89739878afb0e1b427dd319e71941edf66f6ad3d5f4`.

### evaluation:431581

Calls written directly in this body: `.join`, `.slice`, `collapseWhitespace`, `escapeForPrompt`.

SHA-256 of the source span: `a849bf88139fcfba7b1af89739878afb0e1b427dd319e71941edf66f6ad3d5f4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
