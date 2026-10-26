# `OmitTestingDirectivesSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/testing/parent.js` · [Module README](../../../../../../modules/agent-engine/prompts/testing/parent-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636336-636338](../../../../../../../reference/runtime/host-main.cjs#L636336-L636338) | `FunctionDeclaration` | no | `{ additionalInstructions }` |
| [evaluation:424389-424391](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424389-L424391) | `FunctionDeclaration` | no | `{ additionalInstructions }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636336-636338](../../../../../../../reference/runtime/host-main.cjs#L636336-L636338) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424389-424391](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424389-L424391) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:636336

Calls written directly in this body: `additionalInstructions.map`, `jsx`, `jsxs`.

SHA-256 of the source span: `baa4c1623e12169317e6f35e8205a0abe562b8e18f93c0938149d0977902fa60`.

### evaluation:424389

Calls written directly in this body: `additionalInstructions.map`, `jsx`, `jsxs`.

SHA-256 of the source span: `baa4c1623e12169317e6f35e8205a0abe562b8e18f93c0938149d0977902fa60`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
