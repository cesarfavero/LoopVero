# `ImplementationSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/testing/parent.js` · [Module README](../../../../../../modules/agent-engine/prompts/testing/parent-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636330-636332](../../../../../../../reference/runtime/host-main.cjs#L636330-L636332) | `FunctionDeclaration` | no | `{ useDebugSubagent }` |
| [evaluation:424383-424385](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424383-L424385) | `FunctionDeclaration` | no | `{ useDebugSubagent }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636330-636332](../../../../../../../reference/runtime/host-main.cjs#L636330-L636332) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424383-424385](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424383-L424385) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:636330

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `320b71203fc9e8f30ac36f346c9b77bd30390cd5dabfeff17ce372e51ec255ee`.

### evaluation:424383

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `320b71203fc9e8f30ac36f346c9b77bd30390cd5dabfeff17ce372e51ec255ee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
