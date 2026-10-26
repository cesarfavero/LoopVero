# `agentTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tool-policy/agent-tools.ts` · [Module README](../../../../../../modules/core/runner/tool-policy/agent-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756564-756589](../../../../../../../reference/runtime/host-main.cjs#L756564-L756589) | `FunctionDeclaration` | no | `args` |
| [evaluation:542484-542509](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542484-L542509) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756564-756589](../../../../../../../reference/runtime/host-main.cjs#L756564-L756589) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:542484-542509](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542484-L542509) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:756564

Calls written directly in this body: `.filter`, `new Map`, `new Set`.

SHA-256 of the source span: `0a633a140c52f57effb00b7a797a32f1a05a1a66799e90f3b401236df82615db`.

### evaluation:542484

Calls written directly in this body: `.filter`, `new Map`, `new Set`.

SHA-256 of the source span: `0a633a140c52f57effb00b7a797a32f1a05a1a66799e90f3b401236df82615db`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
