# `profileHarnessFromJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/agents/agent-files.ts` · [Module README](../../../../../modules/core/agents/agent-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490828-490830](../../../../../../reference/runtime/host-main.cjs#L490828-L490830) | `FunctionDeclaration` | no | `parsed2` |
| [evaluation:629039-629041](../../../../../../reference/runtime/sand-eval-runner.cjs#L629039-L629041) | `FunctionDeclaration` | no | `parsed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490828-490830](../../../../../../reference/runtime/host-main.cjs#L490828-L490830) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:629039-629041](../../../../../../reference/runtime/sand-eval-runner.cjs#L629039-L629041) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:490828

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `0322e929d758ede9905d06353fef6a36247e7aa33b773da5c94414fead76643b`.

### evaluation:629039

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `07e838a1eb5e731daa7630836b9f42c8ff4f8c8100ed9cc97c28da57c5e0a1fd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
