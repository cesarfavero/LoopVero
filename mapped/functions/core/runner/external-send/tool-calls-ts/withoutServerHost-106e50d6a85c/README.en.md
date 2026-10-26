# `withoutServerHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/external-send/tool-calls.ts` · [Module README](../../../../../../modules/core/runner/external-send/tool-calls-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:539089-539093](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539089-L539093) | `FunctionDeclaration` | no | `calls` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:539089-539093](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539089-L539093) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:539089

Calls written directly in this body: `calls.flatMap`.

SHA-256 of the source span: `71ce22a0e168b303b5d8eacb1c78a6b1e231a97c6be55e77f3672a2a9da76da7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
