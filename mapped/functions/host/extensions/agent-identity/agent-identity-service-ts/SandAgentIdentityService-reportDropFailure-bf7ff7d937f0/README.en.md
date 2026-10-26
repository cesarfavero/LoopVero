# `SandAgentIdentityService.reportDropFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495883-495895](../../../../../../../reference/runtime/host-main.cjs#L495883-L495895) | `method` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495883-495895](../../../../../../../reference/runtime/host-main.cjs#L495883-L495895) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:495883

Calls written directly in this body: `errorMessage`, `logFields`, `this.deps.log`, `this.deps.report`.

SHA-256 of the source span: `2a173bcb7eedb9859b240303061dd5c592fba1b83cb6da20fa4ccb9bc8363826`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
