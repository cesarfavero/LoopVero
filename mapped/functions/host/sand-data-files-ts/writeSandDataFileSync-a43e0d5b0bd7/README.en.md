# `writeSandDataFileSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453726-453731](../../../../../reference/runtime/host-main.cjs#L453726-L453731) | `FunctionDeclaration` | no | `path33, data2, options2 = {}` |
| [evaluation:627493-627498](../../../../../reference/runtime/sand-eval-runner.cjs#L627493-L627498) | `FunctionDeclaration` | no | `path33, data2, options2 = {}` |
| [state-worker:485-490](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L485-L490) | `FunctionDeclaration` | no | `path, data, options = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453726-453731](../../../../../reference/runtime/host-main.cjs#L453726-L453731) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:627493-627498](../../../../../reference/runtime/sand-eval-runner.cjs#L627493-L627498) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:485-490](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L485-L490) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:453726

Calls written directly in this body: `keptModeSync`, `sandDataNoFollowRoot`, `writeFileAtomicSync`.

SHA-256 of the source span: `48853fc7d78c47cde77e9f46cd79035a5176dc6dc70410d3ebe8501980df9d37`.

### evaluation:627493

Calls written directly in this body: `keptModeSync`, `sandDataNoFollowRoot`, `writeFileAtomicSync`.

SHA-256 of the source span: `48853fc7d78c47cde77e9f46cd79035a5176dc6dc70410d3ebe8501980df9d37`.

### state-worker:485

Calls written directly in this body: `keptModeSync`, `sandDataNoFollowRoot`, `writeFileAtomicSync`.

SHA-256 of the source span: `b9f04163e3f70383b321b5d8c2aebee9e12b7de56859adfda8d6a541e56e2a92`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
