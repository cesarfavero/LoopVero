# `nonEmptyList`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-email-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-email-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764273-764275](../../../../../../../reference/runtime/host-main.cjs#L764273-L764275) | `FunctionDeclaration` | no | `values` |
| [evaluation:557641-557643](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557641-L557643) | `FunctionDeclaration` | no | `values` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764273-764275](../../../../../../../reference/runtime/host-main.cjs#L764273-L764275) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557641-557643](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557641-L557643) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:764273

Calls written directly in this body: `.filter`.

SHA-256 of the source span: `e7c796d54948a42210ecb00197c0c57009c935cf61cf6c4de5eeae75f8f55532`.

### evaluation:557641

Calls written directly in this body: `.filter`.

SHA-256 of the source span: `e7c796d54948a42210ecb00197c0c57009c935cf61cf6c4de5eeae75f8f55532`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
