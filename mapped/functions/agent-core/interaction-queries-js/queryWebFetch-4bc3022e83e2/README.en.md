# `queryWebFetch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-queries.js` · [Module README](../../../../modules/agent-core/interaction-queries-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475553-475569](../../../../../reference/runtime/host-main.cjs#L475553-L475569) | `FunctionDeclaration` | yes | `listener, ctx, args, options2` |
| [evaluation:254765-254781](../../../../../reference/runtime/sand-eval-runner.cjs#L254765-L254781) | `FunctionDeclaration` | yes | `listener, ctx, args, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475553-475569](../../../../../reference/runtime/host-main.cjs#L475553-L475569) | 2 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:254765-254781](../../../../../reference/runtime/sand-eval-runner.cjs#L254765-L254781) | 2 | 0 | 1 | 1 | 1 | 0 |

### host:475553

Calls written directly in this body: `listener.query`, `new Error`, `new InteractionQuery`, `new WebFetchRequestQuery`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `ca49a778d7f1e40d72e57498539813302194e7218c8fdac78c506522f3639fb2`.

### evaluation:254765

Calls written directly in this body: `listener.query`, `new Error`, `new InteractionQuery`, `new WebFetchRequestQuery`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `ca49a778d7f1e40d72e57498539813302194e7218c8fdac78c506522f3639fb2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
