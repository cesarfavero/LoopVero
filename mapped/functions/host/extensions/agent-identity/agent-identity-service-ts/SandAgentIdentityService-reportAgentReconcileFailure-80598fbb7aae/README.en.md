# `SandAgentIdentityService.reportAgentReconcileFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495746-495758](../../../../../../../reference/runtime/host-main.cjs#L495746-L495758) | `method` | no | `agentId, error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495746-495758](../../../../../../../reference/runtime/host-main.cjs#L495746-L495758) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:495746

Calls written directly in this body: `brandedErrorTag`, `brandedOrInvalidId`, `errorLogTag`, `logFields`, `this.deps.report`.

SHA-256 of the source span: `cd6332af5ade8cfb6e1f85346d59992bfe8fe9a96c844fdc280707ab6cb60694`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
