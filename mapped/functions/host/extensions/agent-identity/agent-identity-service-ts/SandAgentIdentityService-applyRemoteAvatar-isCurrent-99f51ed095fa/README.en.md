# `SandAgentIdentityService.applyRemoteAvatar/isCurrent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495945-495945](../../../../../../../reference/runtime/host-main.cjs#L495945-L495945) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495945-495945](../../../../../../../reference/runtime/host-main.cjs#L495945-L495945) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:495945 uses an implicit arrow-function return.

### host:495945

Calls written directly in this body: `this.locallyChangedAvatarIds.has`.

SHA-256 of the source span: `b3e249b6d84f6aa062292fa001ea553ee5983d6ab3f8e9f7f461252b4825ecba`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
