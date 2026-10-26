# `safeJsonParse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/external-send/tool-calls.ts` · [Module README](../../../../../../modules/core/runner/external-send/tool-calls-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:539170-539176](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539170-L539176) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:539170-539176](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539170-L539176) | 0 | 0 | 0 | 2 | 0 | 1 |

### evaluation:539170

Calls written directly in this body: `JSON.parse`.

SHA-256 of the source span: `d8d67fe926f8d15d80cc286ea9439250b9daef4496e1c90b4cf779db841449c9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
