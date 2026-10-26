# `cloudAgentAgentIdDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-tool-descriptions.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-tool-descriptions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770138-770145](../../../../../../reference/runtime/host-main.cjs#L770138-L770145) | `FunctionDeclaration` | no | `{   durableWatch,   publishRepository = false,   agentScope = "launched" }` |
| [evaluation:567511-567518](../../../../../../reference/runtime/sand-eval-runner.cjs#L567511-L567518) | `FunctionDeclaration` | no | `{   durableWatch,   publishRepository = false,   agentScope = "launched" }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770138-770145](../../../../../../reference/runtime/host-main.cjs#L770138-L770145) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:567511-567518](../../../../../../reference/runtime/sand-eval-runner.cjs#L567511-L567518) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:770138

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `7eaf1e705d26c2824315ca5778006f4256ef24f9ed7678d1ee69225cc3c91b55`.

### evaluation:567511

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `7eaf1e705d26c2824315ca5778006f4256ef24f9ed7678d1ee69225cc3c91b55`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
