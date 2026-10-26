# `createLocalSandMcp/getCustomInstructions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/integrations/README.en.md).

**Module:** `evaluation/local-mcp.ts` · [Module README](../../../../modules/evaluation/local-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628173-628178](../../../../../reference/runtime/sand-eval-runner.cjs#L628173-L628178) | `ArrowFunctionExpression` | yes | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628173-628178](../../../../../reference/runtime/sand-eval-runner.cjs#L628173-L628178) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:628173

Calls written directly in this body: `instructions.map`, `lease.getInstructions`, `new Map`.

SHA-256 of the source span: `30bc1ea986f1171c6e0f6e8aed04617aa7e580e2b5f82e9317a85b8a1c731c17`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
