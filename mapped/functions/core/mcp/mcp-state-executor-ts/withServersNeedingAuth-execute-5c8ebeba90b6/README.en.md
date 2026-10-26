# `withServersNeedingAuth/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/mcp-state-executor.ts` · [Module README](../../../../../modules/core/mcp/mcp-state-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584774-584783](../../../../../../reference/runtime/sand-eval-runner.cjs#L584774-L584783) | `FunctionExpression` | yes | `ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584774-584783](../../../../../../reference/runtime/sand-eval-runner.cjs#L584774-L584783) | 2 | 1 | 1 | 2 | 0 | 0 |

### evaluation:584774

Calls written directly in this body: `executor.execute`, `needingAuth.has`.

Assignment or increment targets: `server.status`, `server.tools`.

SHA-256 of the source span: `1db9b76e061e366507e3b5cd3695da7e3bfd5ba7a39b285b4d19ab691234ec98`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
