# `deriveCloudAgentHandoffLineage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-tool.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:568018-568025](../../../../../../reference/runtime/sand-eval-runner.cjs#L568018-L568025) | `FunctionDeclaration` | no | `ctx, toolCallId, fallbackLineage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:568018-568025](../../../../../../reference/runtime/sand-eval-runner.cjs#L568018-L568025) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:568018

Calls written directly in this body: `ctx.get`, `deriveSandRequestLineage`.

SHA-256 of the source span: `a27ca7c9fca904d79d6b9eacc3bcfb01470270dc57d29bbabb89c9df3b4d39b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
