# `computerUseSpanOutcomeOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [Module README](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742964-742973](../../../../../../../../reference/runtime/host-main.cjs#L742964-L742973) | `FunctionDeclaration` | no | `error64, signal` |
| [evaluation:515815-515824](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515815-L515824) | `FunctionDeclaration` | no | `error63, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742964-742973](../../../../../../../../reference/runtime/host-main.cjs#L742964-L742973) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:515815-515824](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515815-L515824) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:742964

Calls written directly in this body: `isComputerUseTimeout`.

SHA-256 of the source span: `e5523157d3f774ed110d29e21d7272266657e8138653b0885f3b06a21bfabf4c`.

### evaluation:515815

Calls written directly in this body: `isComputerUseTimeout`.

SHA-256 of the source span: `67d83b5179eea9fec84a3f06555fb99b069b48ce5e52c68eef31a04613e20889`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
