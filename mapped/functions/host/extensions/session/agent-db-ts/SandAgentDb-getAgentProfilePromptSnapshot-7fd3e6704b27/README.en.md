# `SandAgentDb.getAgentProfilePromptSnapshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718916-718918](../../../../../../../reference/runtime/host-main.cjs#L718916-L718918) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718916-718918](../../../../../../../reference/runtime/host-main.cjs#L718916-L718918) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:718916

Calls written directly in this body: `parseAgentProfilePromptSnapshot`, `this.readKv`.

SHA-256 of the source span: `14fe877ee09cb9840eb1efc9560f1bb737b9cc99d9b64c24c9fc8b736ecae01a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
