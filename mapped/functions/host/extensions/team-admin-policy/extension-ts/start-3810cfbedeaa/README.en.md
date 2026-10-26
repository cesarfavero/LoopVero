# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/team-admin-policy/extension.ts` · [Module README](../../../../../../modules/host/extensions/team-admin-policy/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729858-729881](../../../../../../../reference/runtime/host-main.cjs#L729858-L729881) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729858-729881](../../../../../../../reference/runtime/host-main.cjs#L729858-L729881) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:729858

Calls written directly in this body: `context2.deps.settings.subscribeToChanges`, `context2.onStop`, `createTeamAdminPolicyService`, `service.prefetch`.

SHA-256 of the source span: `36cf88eba242bcceefa14b5282db773d3fd1d4f1ff279aaf958f39bd406fbbe7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
