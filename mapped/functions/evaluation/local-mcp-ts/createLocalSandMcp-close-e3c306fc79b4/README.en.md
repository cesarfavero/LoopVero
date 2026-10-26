# `createLocalSandMcp/close`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/integrations/README.en.md).

**Module:** `evaluation/local-mcp.ts` · [Module README](../../../../modules/evaluation/local-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628182-628184](../../../../../reference/runtime/sand-eval-runner.cjs#L628182-L628184) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628182-628184](../../../../../reference/runtime/sand-eval-runner.cjs#L628182-L628184) | 0 | 0 | 1 | 0 | 0 | 0 |

### evaluation:628182

Calls written directly in this body: `manager.closeAllClients`.

SHA-256 of the source span: `a1dc4e0ce1cf9db32ec5e418c0238ab736621e94a900274767e59f6a7b285a00`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
