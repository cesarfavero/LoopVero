# `renderPrLookup/agentLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-tool.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:568063-568069](../../../../../../reference/runtime/sand-eval-runner.cjs#L568063-L568069) | `ArrowFunctionExpression` | no | `agent` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:568063-568069](../../../../../../reference/runtime/sand-eval-runner.cjs#L568063-L568069) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:568063

Calls written directly in this body: `coordinatorNames.get`, `summaryLine`.

SHA-256 of the source span: `cb51e147a9febcabef405ae2a1ae229c48052dde130dd85c4349557a543ff5eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
