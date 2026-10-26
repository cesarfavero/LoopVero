# `DebugSubagentInstructionsSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/testing/parent.js` · [Module README](../../../../../../modules/agent-engine/prompts/testing/parent-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636316-636318](../../../../../../../reference/runtime/host-main.cjs#L636316-L636318) | `FunctionDeclaration` | no | `{ computerUseSubagentName = "computerUse", stepNumber }` |
| [evaluation:424369-424371](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424369-L424371) | `FunctionDeclaration` | no | `{ computerUseSubagentName = "computerUse", stepNumber }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636316-636318](../../../../../../../reference/runtime/host-main.cjs#L636316-L636318) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424369-424371](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424369-L424371) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:636316

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `ac7d33532c37c0e0892033f54aef6c956e85e1ba13bde64fcb686bf4d7f26051`.

### evaluation:424369

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `ac7d33532c37c0e0892033f54aef6c956e85e1ba13bde64fcb686bf4d7f26051`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
