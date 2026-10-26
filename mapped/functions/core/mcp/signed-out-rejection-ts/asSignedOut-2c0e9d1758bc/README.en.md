# `asSignedOut`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/signed-out-rejection.ts` · [Module README](../../../../../modules/core/mcp/signed-out-rejection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585286-585288](../../../../../../reference/runtime/sand-eval-runner.cjs#L585286-L585288) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585286-585288](../../../../../../reference/runtime/sand-eval-runner.cjs#L585286-L585288) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:585286

Calls written directly in this body: `new McpError`.

SHA-256 of the source span: `d742522c4ed866edfb678381be0c0d0d33f9f4747b58348e2c2d28efb049991e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
