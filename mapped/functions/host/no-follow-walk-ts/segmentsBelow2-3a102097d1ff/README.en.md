# `segmentsBelow2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/no-follow-walk.ts` · [Module README](../../../../modules/host/no-follow-walk-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:627482-627490](../../../../../reference/runtime/sand-eval-runner.cjs#L627482-L627490) | `FunctionDeclaration` | no | `root, dir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:627482-627490](../../../../../reference/runtime/sand-eval-runner.cjs#L627482-L627490) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:627482

Calls written directly in this body: `invariant`, `rel.split`, `rel.startsWith`.

SHA-256 of the source span: `20a9d31eb871142876e5a8c8d7e8136734cd2cba0666250e289b8f6487aa91d4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
