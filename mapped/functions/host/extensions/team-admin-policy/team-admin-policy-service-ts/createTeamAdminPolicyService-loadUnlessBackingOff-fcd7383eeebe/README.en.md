# `createTeamAdminPolicyService/loadUnlessBackingOff`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/team-admin-policy/team-admin-policy-service.ts` · [Module README](../../../../../../modules/host/extensions/team-admin-policy/team-admin-policy-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729820-729825](../../../../../../../reference/runtime/host-main.cjs#L729820-L729825) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729820-729825](../../../../../../../reference/runtime/host-main.cjs#L729820-L729825) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:729820

Calls written directly in this body: `deps.clock.monotonicNow`, `isFresh`, `runFetch`.

SHA-256 of the source span: `216e1d95d8af81e3d008a70ac3624f59b15e41db342569b182ac0b40db1abdae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
