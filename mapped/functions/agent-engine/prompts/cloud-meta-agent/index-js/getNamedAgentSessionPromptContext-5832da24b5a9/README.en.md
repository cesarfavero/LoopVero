# `getNamedAgentSessionPromptContext`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/cloud-meta-agent/index.js` · [Module README](../../../../../../modules/agent-engine/prompts/cloud-meta-agent/index-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:635750-635758](../../../../../../../reference/runtime/host-main.cjs#L635750-L635758) | `FunctionDeclaration` | no | `props` |
| [evaluation:423807-423815](../../../../../../../reference/runtime/sand-eval-runner.cjs#L423807-L423815) | `FunctionDeclaration` | no | `props` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:635750-635758](../../../../../../../reference/runtime/host-main.cjs#L635750-L635758) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:423807-423815](../../../../../../../reference/runtime/sand-eval-runner.cjs#L423807-L423815) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:635750

Calls written directly in this body: `props.namedAgentId.trim`, `props.namedAgentSessionKey.trim`, `props.namedAgentSessionKind.trim`.

SHA-256 of the source span: `afeda91d68e073493460b0b7ad50b7be5e6a6659ecf4bf05ccab28c15b762d9c`.

### evaluation:423807

Calls written directly in this body: `props.namedAgentId.trim`, `props.namedAgentSessionKey.trim`, `props.namedAgentSessionKind.trim`.

SHA-256 of the source span: `afeda91d68e073493460b0b7ad50b7be5e6a6659ecf4bf05ccab28c15b762d9c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
