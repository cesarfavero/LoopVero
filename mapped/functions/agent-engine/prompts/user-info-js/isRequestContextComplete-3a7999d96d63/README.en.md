# `isRequestContextComplete`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639805-639807](../../../../../../reference/runtime/host-main.cjs#L639805-L639807) | `FunctionDeclaration` | no | `completeness` |
| [evaluation:430419-430421](../../../../../../reference/runtime/sand-eval-runner.cjs#L430419-L430421) | `FunctionDeclaration` | no | `completeness` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639805-639807](../../../../../../reference/runtime/host-main.cjs#L639805-L639807) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430419-430421](../../../../../../reference/runtime/sand-eval-runner.cjs#L430419-L430421) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:639805

Calls written directly in this body: `REQUEST_CONTEXT_COMPLETENESS_KEYS.every`.

SHA-256 of the source span: `d3fe69c00196923fb112a606e57e32a5a41f6965195b82c5b035da5e191483b6`.

### evaluation:430419

Calls written directly in this body: `REQUEST_CONTEXT_COMPLETENESS_KEYS.every`.

SHA-256 of the source span: `d3fe69c00196923fb112a606e57e32a5a41f6965195b82c5b035da5e191483b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
