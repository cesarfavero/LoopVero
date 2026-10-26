# `recordCloudAgentExchangeOutbound`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-exchange.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-exchange-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:567237-567254](../../../../../../reference/runtime/sand-eval-runner.cjs#L567237-L567254) | `FunctionDeclaration` | yes | `exchange, api, message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567237-567254](../../../../../../reference/runtime/sand-eval-runner.cjs#L567237-L567254) | 2 | 0 | 2 | 0 | 0 | 1 |

### evaluation:567237

Calls written directly in this body: `Date.now`, `api.get`, `errorLogTag`, `exchange.recordOutbound`, `process.stderr.write`.

SHA-256 of the source span: `586ae2a7f9164bde1d6348ea9bb13ce48ed1871f1cd3787d950acd6ad396584c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
