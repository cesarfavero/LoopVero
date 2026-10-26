# `renderAgentSkillItems`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640084-640086](../../../../../../reference/runtime/host-main.cjs#L640084-L640086) | `FunctionDeclaration` | no | `skills` |
| [evaluation:430698-430700](../../../../../../reference/runtime/sand-eval-runner.cjs#L430698-L430700) | `FunctionDeclaration` | no | `skills` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640084-640086](../../../../../../reference/runtime/host-main.cjs#L640084-L640086) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430698-430700](../../../../../../reference/runtime/sand-eval-runner.cjs#L430698-L430700) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640084

Calls written directly in this body: `skills.map`.

SHA-256 of the source span: `b362a0b640c35f7005671deede23f6ad5a9ead9d692135235587eaa1723c6daa`.

### evaluation:430698

Calls written directly in this body: `skills.map`.

SHA-256 of the source span: `b362a0b640c35f7005671deede23f6ad5a9ead9d692135235587eaa1723c6daa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
