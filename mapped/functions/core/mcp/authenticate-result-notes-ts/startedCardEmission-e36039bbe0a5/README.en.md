# `startedCardEmission`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/authenticate-result-notes.ts` · [Module README](../../../../../modules/core/mcp/authenticate-result-notes-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779331-779339](../../../../../../reference/runtime/host-main.cjs#L779331-L779339) | `FunctionDeclaration` | no | `result, request5, finance` |
| [evaluation:579505-579513](../../../../../../reference/runtime/sand-eval-runner.cjs#L579505-L579513) | `FunctionDeclaration` | no | `result, request3, finance` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779331-779339](../../../../../../reference/runtime/host-main.cjs#L779331-L779339) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579505-579513](../../../../../../reference/runtime/sand-eval-runner.cjs#L579505-L579513) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:779331

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `fdcfd25af3bc8d992500a383ce25473c932bdca43ec897b02125757e9fd8a269`.

### evaluation:579505

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `ecba76de7ff37a1206eda41473b21330af533dc55f58102fc091749b61c12780`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
