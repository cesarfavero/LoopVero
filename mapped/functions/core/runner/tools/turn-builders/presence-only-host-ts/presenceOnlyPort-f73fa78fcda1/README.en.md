# `presenceOnlyPort`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/presence-only-host.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/presence-only-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:568915-568921](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L568915-L568921) | `FunctionDeclaration` | no | `port, absent = []` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:568915-568921](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L568915-L568921) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:568915

Calls written directly in this body: `Object.create`, `new Proxy`, `new Set`, `unwired`.

SHA-256 of the source span: `4b58fc04a8ea2e7d2ff8b863a289b5f99607d8480c3217495b5e14e78b6c04d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
