# `createTeamAdminPolicyService/isCloudAgentsDisabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/team-admin-policy/team-admin-policy-service.ts` · [Module README](../../../../../../modules/host/extensions/team-admin-policy/team-admin-policy-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729827-729830](../../../../../../../reference/runtime/host-main.cjs#L729827-L729830) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729827-729830](../../../../../../../reference/runtime/host-main.cjs#L729827-L729830) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:729827

Calls written directly in this body: `loadUnlessBackingOff`, `snapshot.get`.

SHA-256 of the source span: `67a6e8cfb4c5bbefb2a7ed0a6cc076b5f867c79c1f47f6334eac1cce2f7c0a5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
