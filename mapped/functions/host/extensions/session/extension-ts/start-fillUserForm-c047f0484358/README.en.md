# `start/fillUserForm`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/extension.ts` · [Module README](../../../../../../modules/host/extensions/session/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728506-728506](../../../../../../../reference/runtime/host-main.cjs#L728506-L728506) | `ArrowFunctionExpression` | no | `agentId, values, consentedHost, submitAfterFill` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728506-728506](../../../../../../../reference/runtime/host-main.cjs#L728506-L728506) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:728506 uses an implicit arrow-function return.

### host:728506

Calls written directly in this body: `userForms.fill`.

SHA-256 of the source span: `1c3841ee2a62acb00b943683916244bc7a1754be033490ec26f86e86da94ab42`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
