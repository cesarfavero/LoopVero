# `toRemoteGrokBotAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495149-495175](../../../../../../../reference/runtime/host-main.cjs#L495149-L495175) | `FunctionDeclaration` | no | `wire` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495149-495175](../../../../../../../reference/runtime/host-main.cjs#L495149-L495175) | 9 | 0 | 0 | 4 | 0 | 0 |

### host:495149

Calls written directly in this body: `.flatMap`, `.map`, `dirNameSafeAgentId`, `profileServerBindingFromJson`, `wire.id.trim`, `wire.role.trim`.

SHA-256 of the source span: `f69800b56bd78f47155681ce2a262cd4c77cecdae0e036c813c744f7c6925698`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
