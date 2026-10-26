# `cloudAgentActionFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-tool.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:567813-567824](../../../../../../reference/runtime/sand-eval-runner.cjs#L567813-L567824) | `FunctionDeclaration` | no | `{   durableWatch,   publishRepository,   publishApp }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567813-567824](../../../../../../reference/runtime/sand-eval-runner.cjs#L567813-L567824) | 4 | 0 | 0 | 1 | 0 | 0 |

### evaluation:567813

Calls written directly in this body: `cloudAgentAction.exclude`.

SHA-256 of the source span: `532d6b206646d947fddc91dae4c6e133fffaeef542cc9b2719eb348388f94c87`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
