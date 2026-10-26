# `StaleBuildGitNotice`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/cloud-agent.js` · [Module README](../../../../../modules/agent-engine/prompts/cloud-agent-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636173-636178](../../../../../../reference/runtime/host-main.cjs#L636173-L636178) | `FunctionDeclaration` | no | `{ staleBuildGitRefs }` |
| [evaluation:424229-424234](../../../../../../reference/runtime/sand-eval-runner.cjs#L424229-L424234) | `FunctionDeclaration` | no | `{ staleBuildGitRefs }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636173-636178](../../../../../../reference/runtime/host-main.cjs#L636173-L636178) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:424229-424234](../../../../../../reference/runtime/sand-eval-runner.cjs#L424229-L424234) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:636173

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `13e68b3799ddddb9e081b6ba72bb7f5dc10aad0d431688ccbd6100a8c119caa1`.

### evaluation:424229

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `13e68b3799ddddb9e081b6ba72bb7f5dc10aad0d431688ccbd6100a8c119caa1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
