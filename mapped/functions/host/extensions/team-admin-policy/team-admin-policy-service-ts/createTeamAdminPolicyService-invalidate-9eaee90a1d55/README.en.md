# `createTeamAdminPolicyService/invalidate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/team-admin-policy/team-admin-policy-service.ts` · [Module README](../../../../../../modules/host/extensions/team-admin-policy/team-admin-policy-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729839-729845](../../../../../../../reference/runtime/host-main.cjs#L729839-L729845) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729839-729845](../../../../../../../reference/runtime/host-main.cjs#L729839-L729845) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:729839

Calls written directly in this body: `snapshot.set`.

Assignment or increment targets: `cache3.generation`, `cache3.inFlight`, `cache3.lastFailureAtMs`, `cache3.snapshotAtMs`.

SHA-256 of the source span: `da4440e422008585755286f203dd4ce5cd700c27ee7769c5e608eb929cd0d78b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
