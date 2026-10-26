# `queryWebSearch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-queries.js` · [Module README](../../../../modules/agent-core/interaction-queries-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475541-475552](../../../../../reference/runtime/host-main.cjs#L475541-L475552) | `FunctionDeclaration` | yes | `listener, ctx, args` |
| [evaluation:254753-254764](../../../../../reference/runtime/sand-eval-runner.cjs#L254753-L254764) | `FunctionDeclaration` | yes | `listener, ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475541-475552](../../../../../reference/runtime/host-main.cjs#L475541-L475552) | 1 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:254753-254764](../../../../../reference/runtime/sand-eval-runner.cjs#L254753-L254764) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:475541

Calls written directly in this body: `listener.query`, `new Error`, `new InteractionQuery`, `new WebSearchRequestQuery`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `f490681c972f8b4c2966ebfc365225d4ba2fc206c38e167d1bc3ee90c2abd1ba`.

### evaluation:254753

Calls written directly in this body: `listener.query`, `new Error`, `new InteractionQuery`, `new WebSearchRequestQuery`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `f490681c972f8b4c2966ebfc365225d4ba2fc206c38e167d1bc3ee90c2abd1ba`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
