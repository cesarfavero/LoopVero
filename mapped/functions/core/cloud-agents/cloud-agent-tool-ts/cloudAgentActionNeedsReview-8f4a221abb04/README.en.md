# `cloudAgentActionNeedsReview`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-tool.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:568088-568097](../../../../../../reference/runtime/sand-eval-runner.cjs#L568088-L568097) | `FunctionDeclaration` | no | `args, launchedIds, durableWatch` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:568088-568097](../../../../../../reference/runtime/sand-eval-runner.cjs#L568088-L568097) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:568088

Calls written directly in this body: `args.agent_id.trim`, `launchedIds.has`.

SHA-256 of the source span: `d076cb3c05fb030bbd058ea2fe536dc137622a77a703cdab21a416022232b6d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
