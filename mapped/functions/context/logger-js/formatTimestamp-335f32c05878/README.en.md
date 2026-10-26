# `formatTimestamp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225458-225460](../../../../../reference/runtime/host-main.cjs#L225458-L225460) | `FunctionDeclaration` | no | `timestamp3` |
| [evaluation:1946-1948](../../../../../reference/runtime/sand-eval-runner.cjs#L1946-L1948) | `FunctionDeclaration` | no | `timestamp2` |
| [state-worker:21335-21337](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21335-L21337) | `FunctionDeclaration` | no | `timestamp` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225458-225460](../../../../../reference/runtime/host-main.cjs#L225458-L225460) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:1946-1948](../../../../../reference/runtime/sand-eval-runner.cjs#L1946-L1948) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:21335-21337](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21335-L21337) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225458

Calls written directly in this body: `.slice`, `timestamp3.toISOString`.

SHA-256 of the source span: `af09885bc92cee08d09de4d42c8f952834e3f494d99ad524d95d111ea4184018`.

### evaluation:1946

Calls written directly in this body: `.slice`, `timestamp2.toISOString`.

SHA-256 of the source span: `2412e97f43afa2572636fe020ebabb93622634bdb5e1fb87ce04ffe47c67fca7`.

### state-worker:21335

Calls written directly in this body: `.slice`, `timestamp.toISOString`.

SHA-256 of the source span: `e4521efebe293476a0db327d607208e72b8254c55cd6a938a9030ab6a7f8bcbe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
