# `ComputerUseInstructionsSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/shared.js` · [Module README](../../../../../modules/agent-engine/prompts/shared-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636163-636167](../../../../../../reference/runtime/host-main.cjs#L636163-L636167) | `FunctionDeclaration` | no | `{ props }` |
| [evaluation:424219-424223](../../../../../../reference/runtime/sand-eval-runner.cjs#L424219-L424223) | `FunctionDeclaration` | no | `{ props }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636163-636167](../../../../../../reference/runtime/host-main.cjs#L636163-L636167) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424219-424223](../../../../../../reference/runtime/sand-eval-runner.cjs#L424219-L424223) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:636163

Calls written directly in this body: `getRequiredToolName`, `jsx`, `jsxs`.

SHA-256 of the source span: `a32adb89af41c2fb2c3ced1a8ea9dcc48d65a566766fe4e47a3345057a365550`.

### evaluation:424219

Calls written directly in this body: `getRequiredToolName`, `jsx`, `jsxs`.

SHA-256 of the source span: `a32adb89af41c2fb2c3ced1a8ea9dcc48d65a566766fe4e47a3345057a365550`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
