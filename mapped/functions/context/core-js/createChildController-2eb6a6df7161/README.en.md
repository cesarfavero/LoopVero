# `createChildController`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/core.js` · [Module README](../../../../modules/context/core-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225258-225273](../../../../../reference/runtime/host-main.cjs#L225258-L225273) | `FunctionDeclaration` | no | `parentSignal` |
| [evaluation:1746-1761](../../../../../reference/runtime/sand-eval-runner.cjs#L1746-L1761) | `FunctionDeclaration` | no | `parentSignal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225258-225273](../../../../../reference/runtime/host-main.cjs#L225258-L225273) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:1746-1761](../../../../../reference/runtime/sand-eval-runner.cjs#L1746-L1761) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:225258

Calls written directly in this body: `controller.abort`, `new AbortController`, `parentSignal.addEventListener`.

SHA-256 of the source span: `f3ff02d747c724090e487e2177f3a46a529bcea4fc21004eb823008f74678c5a`.

### evaluation:1746

Calls written directly in this body: `controller.abort`, `new AbortController`, `parentSignal.addEventListener`.

SHA-256 of the source span: `f3ff02d747c724090e487e2177f3a46a529bcea4fc21004eb823008f74678c5a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
