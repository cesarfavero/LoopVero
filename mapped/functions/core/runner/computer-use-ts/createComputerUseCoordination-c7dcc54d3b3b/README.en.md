# `createComputerUseCoordination`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/computer-use.ts` · [Module README](../../../../../modules/core/runner/computer-use-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:525285-525570](../../../../../../reference/runtime/sand-eval-runner.cjs#L525285-L525570) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525285-525570](../../../../../../reference/runtime/sand-eval-runner.cjs#L525285-L525570) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:525285

Calls written directly in this body: `createPlaywrightRunCodeOffer`, `new Map`, `new Set`.

SHA-256 of the source span: `f8f76108afce4cb75b2ff14a363b451d2a4c3c505a19e5fdd8b19c6ce503a6b8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
