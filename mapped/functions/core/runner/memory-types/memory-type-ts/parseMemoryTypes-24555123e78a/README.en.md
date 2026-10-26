# `parseMemoryTypes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-types/memory-type.ts` · [Module README](../../../../../../modules/core/runner/memory-types/memory-type-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702583-702597](../../../../../../../reference/runtime/host-main.cjs#L702583-L702597) | `FunctionDeclaration` | no | `definitions` |
| [evaluation:535033-535047](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535033-L535047) | `FunctionDeclaration` | no | `definitions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702583-702597](../../../../../../../reference/runtime/host-main.cjs#L702583-L702597) | 1 | 1 | 0 | 1 | 1 | 0 |
| [evaluation:535033-535047](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535033-L535047) | 1 | 1 | 0 | 1 | 1 | 0 |

### host:702583

Calls written directly in this body: `definitions.map`, `names3.add`, `names3.has`, `new Error`, `new Set`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `1bd7706c667519611fb4e61399de2af803fd9da45adfded50047ae53b3e2d277`.

### evaluation:535033

Calls written directly in this body: `definitions.map`, `names3.add`, `names3.has`, `new Error`, `new Set`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `53a74d1106ed665f4ff3201e547973c25dd751166e3d3f8b05bcf50e16983ee0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
