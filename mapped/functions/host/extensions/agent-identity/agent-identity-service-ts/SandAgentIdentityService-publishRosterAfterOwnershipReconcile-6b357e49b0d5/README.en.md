# `SandAgentIdentityService.publishRosterAfterOwnershipReconcile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495306-495324](../../../../../../../reference/runtime/host-main.cjs#L495306-L495324) | `method` | yes | `signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495306-495324](../../../../../../../reference/runtime/host-main.cjs#L495306-L495324) | 0 | 0 | 1 | 0 | 0 | 1 |

### host:495306

Calls written directly in this body: `errorMessage`, `logFields`, `signal.throwIfAborted`, `this.deps.log`, `this.deps.publishAgentRoster`, `this.deps.report`.

SHA-256 of the source span: `17189666f0ce78238f5f73468e3702f7eba04466ea043a5093b23a927c0a80d7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
