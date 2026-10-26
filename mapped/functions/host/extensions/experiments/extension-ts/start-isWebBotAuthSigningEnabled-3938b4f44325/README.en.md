# `start/isWebBotAuthSigningEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/experiments/extension.ts` · [Module README](../../../../../../modules/host/extensions/experiments/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553600-553600](../../../../../../../reference/runtime/host-main.cjs#L553600-L553600) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553600-553600](../../../../../../../reference/runtime/host-main.cjs#L553600-L553600) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:553600 uses an implicit arrow-function return.

### host:553600

Calls written directly in this body: `service.checkFeatureGate`.

SHA-256 of the source span: `161ce7dd1f2515c1312664c8b0f83c3668a2a592f93aca53a5995d8b0a3c2f6f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
