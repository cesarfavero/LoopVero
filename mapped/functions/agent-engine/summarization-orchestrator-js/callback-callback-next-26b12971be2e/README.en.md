# `<callback>/<callback>/next`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-orchestrator.js` · [Module README](../../../../modules/agent-engine/summarization-orchestrator-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:649462-649479](../../../../../reference/runtime/host-main.cjs#L649462-L649479) | `FunctionDeclaration` | no | `(none)` |
| [evaluation:441115-441132](../../../../../reference/runtime/sand-eval-runner.cjs#L441115-L441132) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649462-649479](../../../../../reference/runtime/host-main.cjs#L649462-L649479) | 6 | 1 | 0 | 3 | 1 | 1 |
| [evaluation:441115-441132](../../../../../reference/runtime/sand-eval-runner.cjs#L441115-L441132) | 6 | 1 | 0 | 3 | 1 | 1 |

### host:649462

Calls written directly in this body: `.then`, `Promise.reject`, `Promise.resolve`, `env.stack.pop`, `env.stack.push`, `fail3`, `r.dispose.call`.

Assignment or increment targets: `r`, `s3`.

Explicit throw targets: `env.error`.

SHA-256 of the source span: `0aa52063dcaaaa4ca915b846816b67b1e712d3bd40425d58c4dde0448f23023a`.

### evaluation:441115

Calls written directly in this body: `.then`, `Promise.reject`, `Promise.resolve`, `env.stack.pop`, `env.stack.push`, `fail2`, `r.dispose.call`.

Assignment or increment targets: `r`, `s3`.

Explicit throw targets: `env.error`.

SHA-256 of the source span: `48501e57410a98813e5852f53296198072d4a879e20431f0fc1ba48a941aa874`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
