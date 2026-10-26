# `compareAgentSummaries`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `shared/agents/agent-summaries.ts` · [Module README](../../../../../modules/shared/agents/agent-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722885-722887](../../../../../../reference/runtime/host-main.cjs#L722885-L722887) | `FunctionDeclaration` | no | `a, b2, mode = "row-updated"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722885-722887](../../../../../../reference/runtime/host-main.cjs#L722885-L722887) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:722885

Calls written directly in this body: `agentRecencyOf`.

SHA-256 of the source span: `61578359d8280e86117fbe057512854b90a8a7426680052300ca8d045e80b64e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
