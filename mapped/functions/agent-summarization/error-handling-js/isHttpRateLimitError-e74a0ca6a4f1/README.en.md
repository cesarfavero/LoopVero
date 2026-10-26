# `isHttpRateLimitError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/error-handling.js` · [Module README](../../../../modules/agent-summarization/error-handling-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620175-620191](../../../../../reference/runtime/host-main.cjs#L620175-L620191) | `FunctionDeclaration` | no | `error64` |
| [evaluation:304529-304545](../../../../../reference/runtime/sand-eval-runner.cjs#L304529-L304545) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620175-620191](../../../../../reference/runtime/host-main.cjs#L620175-L620191) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:304529-304545](../../../../../reference/runtime/sand-eval-runner.cjs#L304529-L304545) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:620175

Calls written directly in this body: `new Set`, `queue.push`, `queue.shift`, `seen.add`, `seen.has`.

SHA-256 of the source span: `05e0913a79d2a0ca6e1d27a9eb22ef367515601581cb2f9a3d03404d1ea78cb7`.

### evaluation:304529

Calls written directly in this body: `new Set`, `queue.push`, `queue.shift`, `seen.add`, `seen.has`.

SHA-256 of the source span: `c81aa3c2e4356b057e8c4c47ef8c6ec38ac7d567eafa54699d5e8ebefe7229b7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
