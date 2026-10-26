# `createSystemPromptAssembly`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:552679-553779](../../../../../../reference/runtime/sand-eval-runner.cjs#L552679-L553779) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552679-553779](../../../../../../reference/runtime/sand-eval-runner.cjs#L552679-L553779) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:552679

Calls written directly in this body: `resolveSandTurnToolDecisions`, `toolDecisions.offers`.

SHA-256 of the source span: `1346844e3c9f9e02f0fd769cd4fda76fe3ab35d73a06473457bc02d961524b62`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
