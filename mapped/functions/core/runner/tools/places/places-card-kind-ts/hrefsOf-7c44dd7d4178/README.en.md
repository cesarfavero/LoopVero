# `hrefsOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/places/places-card-kind.ts` · [Module README](../../../../../../../modules/core/runner/tools/places/places-card-kind-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768800-768804](../../../../../../../../reference/runtime/host-main.cjs#L768800-L768804) | `FunctionDeclaration` | no | `places` |
| [evaluation:564375-564379](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564375-L564379) | `FunctionDeclaration` | no | `places` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768800-768804](../../../../../../../../reference/runtime/host-main.cjs#L768800-L768804) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564375-564379](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564375-L564379) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768800

Calls written directly in this body: `places.flatMap`.

SHA-256 of the source span: `a51e39a027ea140f3e1eff97e20f6833d7f7b1a08cc161957dc6bea1e63c0107`.

### evaluation:564375

Calls written directly in this body: `places.flatMap`.

SHA-256 of the source span: `a51e39a027ea140f3e1eff97e20f6833d7f7b1a08cc161957dc6bea1e63c0107`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
