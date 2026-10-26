# `startManagedSetupWhenAuthenticated/handleRenewal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/managed-setup/extension.ts` · [Module README](../../../../../../modules/host/extensions/managed-setup/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684124-684131](../../../../../../../reference/runtime/host-main.cjs#L684124-L684131) | `ArrowFunctionExpression` | no | `event` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684124-684131](../../../../../../../reference/runtime/host-main.cjs#L684124-L684131) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:684124

Calls written directly in this body: `options2.auth.peekAccessToken`, `options2.refreshManagedSkills`, `start`.

SHA-256 of the source span: `ac00500a379bd425b866e4ea9ad0069504b70280ba742a42401793c112d47f26`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
