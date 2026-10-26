# `isMainAgentId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/main-agent.ts` · [Module README](../../../../../modules/shared/agents/main-agent-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:487511-487513](../../../../../../reference/runtime/host-main.cjs#L487511-L487513) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487511-487513](../../../../../../reference/runtime/host-main.cjs#L487511-L487513) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:487511

Calls written directly in this body: `value.trim`.

SHA-256 of the source span: `9b2a42263c91b10ba39fd4cbdc92ac378699e0cdd52ac553150d8fa2c02c8114`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
