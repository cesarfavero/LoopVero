# `loadActiveSubscriptionsSummaryBlock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-orchestrator.js` · [Module README](../../../../modules/agent-engine/summarization-orchestrator-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:649488-649496](../../../../../reference/runtime/host-main.cjs#L649488-L649496) | `FunctionDeclaration` | yes | `ctx, load2` |
| [evaluation:441141-441149](../../../../../reference/runtime/sand-eval-runner.cjs#L441141-L441149) | `FunctionDeclaration` | yes | `ctx, load2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649488-649496](../../../../../reference/runtime/host-main.cjs#L649488-L649496) | 2 | 0 | 1 | 2 | 0 | 1 |
| [evaluation:441141-441149](../../../../../reference/runtime/sand-eval-runner.cjs#L441141-L441149) | 2 | 0 | 1 | 2 | 0 | 1 |

### host:649488

Calls written directly in this body: `String`, `load2`, `logger62.warn`, `withTimeout`.

SHA-256 of the source span: `fe41b6edf6be5124912281dac35dea2da5e8f2c1ae8f35946da18a3b322dcb2c`.

### evaluation:441141

Calls written directly in this body: `String`, `load2`, `logger39.warn`, `withTimeout`.

SHA-256 of the source span: `17dcfe69117388945f03196f5931c945599e53396c9d4ac02448cf793f8909e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
