# `startsWith2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-attachment-guard.ts` · [Module README](../../../../../modules/core/mcp/gmail-attachment-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584298-584301](../../../../../../reference/runtime/sand-eval-runner.cjs#L584298-L584301) | `FunctionDeclaration` | no | `bytes, prefix, offset2 = 0` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584298-584301](../../../../../../reference/runtime/sand-eval-runner.cjs#L584298-L584301) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:584298

Calls written directly in this body: `.equals`, `Buffer.from`, `bytes.subarray`.

SHA-256 of the source span: `e023de0e1f48e8be4a2ca1dc2aa3f64e75eb94c1d330f393f564ae42ff15c114`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
