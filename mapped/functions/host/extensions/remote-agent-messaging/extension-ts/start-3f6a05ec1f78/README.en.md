# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/remote-agent-messaging/extension.ts` · [Module README](../../../../../../modules/host/extensions/remote-agent-messaging/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708445-708466](../../../../../../../reference/runtime/host-main.cjs#L708445-L708466) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708445-708466](../../../../../../../reference/runtime/host-main.cjs#L708445-L708466) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:708445

Calls written directly in this body: `createDeadlinePolicy`, `createSandCursorBackendClient`, `createTemporalMemberTurns`.

SHA-256 of the source span: `cd197684c8012bbfd30a9a4282ec39366b85a5ca8ded2425d5c9029f2418f69a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
