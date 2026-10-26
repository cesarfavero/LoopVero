# `traceComputerUseSpan`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [Module README](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743039-743054](../../../../../../../../reference/runtime/host-main.cjs#L743039-L743054) | `FunctionDeclaration` | yes | `ctx, name18, attributes, run` |
| [evaluation:515890-515905](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515890-L515905) | `FunctionDeclaration` | yes | `ctx, name18, attributes, run` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743039-743054](../../../../../../../../reference/runtime/host-main.cjs#L743039-L743054) | 0 | 0 | 1 | 1 | 1 | 2 |
| [evaluation:515890-515905](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515890-L515905) | 0 | 0 | 1 | 1 | 1 | 2 |

### host:743039

Calls written directly in this body: `__callDispose`, `__using`, `run`, `span.failIfNoOutcome`, `startComputerUseSpan`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `3191205894729efc329728fcbf4af1e205620512294c78601506caf8776a1823`.

### evaluation:515890

Calls written directly in this body: `__callDispose`, `__using`, `run`, `span.failIfNoOutcome`, `startComputerUseSpan`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `528524fc9ad3c8a22d372ccaea7c9bb8c104445a556b5fdc542b3ab071eee6f0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
