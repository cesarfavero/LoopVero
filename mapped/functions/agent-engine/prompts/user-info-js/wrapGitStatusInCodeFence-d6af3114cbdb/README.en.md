# `wrapGitStatusInCodeFence`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640027-640035](../../../../../../reference/runtime/host-main.cjs#L640027-L640035) | `FunctionDeclaration` | no | `status` |
| [evaluation:430641-430649](../../../../../../reference/runtime/sand-eval-runner.cjs#L430641-L430649) | `FunctionDeclaration` | no | `status` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640027-640035](../../../../../../reference/runtime/host-main.cjs#L640027-L640035) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:430641-430649](../../../../../../reference/runtime/sand-eval-runner.cjs#L430641-L430649) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:640027

Calls written directly in this body: `status.trim`.

SHA-256 of the source span: `b0b7e09cee55c8c6a373e0c37adf009df6090d02b30c4f414ae8385c21e52c30`.

### evaluation:430641

Calls written directly in this body: `status.trim`.

SHA-256 of the source span: `b0b7e09cee55c8c6a373e0c37adf009df6090d02b30c4f414ae8385c21e52c30`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
