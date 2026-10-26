# `isNamedAgentHomePromptSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/cloud-meta-agent/index.js` · [Module README](../../../../../../modules/agent-engine/prompts/cloud-meta-agent/index-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:635747-635749](../../../../../../../reference/runtime/host-main.cjs#L635747-L635749) | `FunctionDeclaration` | no | `props` |
| [evaluation:423804-423806](../../../../../../../reference/runtime/sand-eval-runner.cjs#L423804-L423806) | `FunctionDeclaration` | no | `props` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:635747-635749](../../../../../../../reference/runtime/host-main.cjs#L635747-L635749) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:423804-423806](../../../../../../../reference/runtime/sand-eval-runner.cjs#L423804-L423806) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:635747

Calls written directly in this body: `props.namedAgentSessionKind.trim`.

SHA-256 of the source span: `aadf28893bb162874cb22e7f10197313d21d4785a1d359a21b5dc400ce0f9176`.

### evaluation:423804

Calls written directly in this body: `props.namedAgentSessionKind.trim`.

SHA-256 of the source span: `aadf28893bb162874cb22e7f10197313d21d4785a1d359a21b5dc400ce0f9176`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
