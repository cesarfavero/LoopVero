# `snapshotFromResponse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/team-admin-policy/team-admin-policy-service.ts` · [Module README](../../../../../../modules/host/extensions/team-admin-policy/team-admin-policy-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729759-729768](../../../../../../../reference/runtime/host-main.cjs#L729759-L729768) | `FunctionDeclaration` | no | `response, teamId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729759-729768](../../../../../../../reference/runtime/host-main.cjs#L729759-L729768) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:729759

Calls written directly in this body: `localToolPermissionCeilingOf`.

SHA-256 of the source span: `faebe9c1c4d3a5428f03af1db298f92fc3cf74d8b7f4e147ec68b5be5a19f9eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
