# `start/isDisabledByTeamAdmin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/extension.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538634-538634](../../../../../../../reference/runtime/host-main.cjs#L538634-L538634) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538634-538634](../../../../../../../reference/runtime/host-main.cjs#L538634-L538634) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:538634 uses an implicit arrow-function return.

### host:538634

Calls written directly in this body: `teamAdminPolicy.isCloudAgentsDisabled`.

SHA-256 of the source span: `5c9805fdd9758dcbcba3b193d8f1a60f5d025e22eb162091499705ae1ba85c1e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
