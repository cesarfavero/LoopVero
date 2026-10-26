# `CloudInstructionsSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640424-640429](../../../../../../reference/runtime/host-main.cjs#L640424-L640429) | `FunctionDeclaration` | no | `{ cloudInstructions }` |
| [evaluation:431038-431043](../../../../../../reference/runtime/sand-eval-runner.cjs#L431038-L431043) | `FunctionDeclaration` | no | `{ cloudInstructions }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640424-640429](../../../../../../reference/runtime/host-main.cjs#L640424-L640429) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431038-431043](../../../../../../reference/runtime/sand-eval-runner.cjs#L431038-L431043) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:640424

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `686bd1f35f6d6d3fc37e9a09a1c89e382e557e10447f80ebbb4504956a577c93`.

### evaluation:431038

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `686bd1f35f6d6d3fc37e9a09a1c89e382e557e10447f80ebbb4504956a577c93`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
