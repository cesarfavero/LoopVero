# `statusForCatalog`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/mcp-state-executor.ts` · [Module README](../../../../../modules/core/mcp/mcp-state-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693535-693537](../../../../../../reference/runtime/host-main.cjs#L693535-L693537) | `FunctionDeclaration` | no | `status` |
| [evaluation:584786-584788](../../../../../../reference/runtime/sand-eval-runner.cjs#L584786-L584788) | `FunctionDeclaration` | no | `status` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693535-693537](../../../../../../reference/runtime/host-main.cjs#L693535-L693537) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:584786-584788](../../../../../../reference/runtime/sand-eval-runner.cjs#L584786-L584788) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:693535

Calls written directly in this body: `UNUSABLE_SERVER_STATUSES.has`.

SHA-256 of the source span: `967307c09728a56c0cb72ec77b0ac1c8b02f526f1d448e37a57d473c02a33513`.

### evaluation:584786

Calls written directly in this body: `UNUSABLE_SERVER_STATUSES.has`.

SHA-256 of the source span: `967307c09728a56c0cb72ec77b0ac1c8b02f526f1d448e37a57d473c02a33513`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
