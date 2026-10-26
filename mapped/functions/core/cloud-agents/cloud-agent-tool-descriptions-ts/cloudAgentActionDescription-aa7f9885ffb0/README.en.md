# `cloudAgentActionDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-tool-descriptions.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-tool-descriptions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770123-770134](../../../../../../reference/runtime/host-main.cjs#L770123-L770134) | `FunctionDeclaration` | no | `{   durableWatch,   replyModes,   publishRepository = false,   agentScope = "launched" }` |
| [evaluation:567494-567505](../../../../../../reference/runtime/sand-eval-runner.cjs#L567494-L567505) | `FunctionDeclaration` | no | `{   durableWatch,   replyModes,   publishRepository = false,   agentScope = "launched" }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770123-770134](../../../../../../reference/runtime/host-main.cjs#L770123-L770134) | 5 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:567494-567505](../../../../../../reference/runtime/sand-eval-runner.cjs#L567494-L567505) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:770123

Calls written directly in this body: `cloudAgentReplyActionClause`.

SHA-256 of the source span: `f9d492f381ae42795b0ea9a7af95c64fb142f28a04491306c0ce46143a002af2`.

### evaluation:567494

Calls written directly in this body: `cloudAgentReplyActionClause`.

SHA-256 of the source span: `f9d492f381ae42795b0ea9a7af95c64fb142f28a04491306c0ce46143a002af2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
