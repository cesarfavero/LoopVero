# `startAgentIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496566-496953](../../../../../../../reference/runtime/host-main.cjs#L496566-L496953) | `FunctionDeclaration` | no | `{   context: context2,   client = createSandCursorBackendClient(GrokBotService, {     backend: context2.host.environment.backend,     getAccessToken: context2.deps.auth.getAccessToken,     getTeamId: context2.deps.auth.getTeamId,     getMachineId: context2.deps.auth.getMachineId   }) }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496566-496953](../../../../../../../reference/runtime/host-main.cjs#L496566-L496953) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:496566

Calls written directly in this body: `.catch`, `context2.deps.auth.subscribeToRenewal`, `context2.deps.transcript.subscribeProfileChanged`, `context2.onStop`, `createDeadlinePolicy`, `createRetryPolicy`, `createSingleFlight`, `initialize`, `new AbortController`, `new Map`, `new SandAgentIdentityService`, `new Set`.

SHA-256 of the source span: `f287a246069ac3ff32b3b688f57dc0b03e1d47cb0eade1e74c9fdb58599d4ff1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
