# `sendMessageParametersByTurnBehavior`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761276-761297](../../../../../../../reference/runtime/host-main.cjs#L761276-L761297) | `FunctionDeclaration` | no | `deps` |
| [evaluation:552091-552112](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552091-L552112) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761276-761297](../../../../../../../reference/runtime/host-main.cjs#L761276-L761297) | 5 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:552091-552112](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552091-L552112) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:761276

Calls written directly in this body: `deps.taskThreads`.

SHA-256 of the source span: `6d0afacc50b85729b8616bed950e51f743d007cdc12c2ed15b00bedbfab1e9f0`.

### evaluation:552091

Calls written directly in this body: `deps.taskThreads`.

SHA-256 of the source span: `6d0afacc50b85729b8616bed950e51f743d007cdc12c2ed15b00bedbfab1e9f0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
