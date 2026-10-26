# `createTeamAdminPolicyService/isFresh`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/team-admin-policy/team-admin-policy-service.ts` · [Module README](../../../../../../modules/host/extensions/team-admin-policy/team-admin-policy-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729794-729794](../../../../../../../reference/runtime/host-main.cjs#L729794-L729794) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729794-729794](../../../../../../../reference/runtime/host-main.cjs#L729794-L729794) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:729794 uses an implicit arrow-function return.

### host:729794

Calls written directly in this body: `deps.clock.monotonicNow`, `snapshot.get`.

SHA-256 of the source span: `0d2a9201644f3f23b6d8cea145a732661add55ba2ab7b8cf3ae1c4bfe1fd6429`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
