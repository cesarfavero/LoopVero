# `carryOneSecret`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/grok-bot-secrets.ts` · [Module README](../../../../../modules/shared/agents/grok-bot-secrets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:709003-709015](../../../../../../reference/runtime/host-main.cjs#L709003-L709015) | `FunctionDeclaration` | yes | `deps, { serverId, name: name18 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709003-709015](../../../../../../reference/runtime/host-main.cjs#L709003-L709015) | 3 | 0 | 2 | 5 | 0 | 1 |

### host:709003

Calls written directly in this body: `deps.put`, `deps.reportFailure`, `deps.reveal`, `validateGrokBotSecretName`, `validateGrokBotSecretValue`, `value.trim`.

SHA-256 of the source span: `7170ea2380d98878ee09f18d5be22eaa47849bc954313d723cb471eb41dee934`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
