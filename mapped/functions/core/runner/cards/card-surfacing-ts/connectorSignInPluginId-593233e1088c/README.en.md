# `connectorSignInPluginId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/cards/card-surfacing.ts` · [Module README](../../../../../../modules/core/runner/cards/card-surfacing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763839-763843](../../../../../../../reference/runtime/host-main.cjs#L763839-L763843) | `FunctionDeclaration` | no | `card, resolved` |
| [evaluation:557173-557177](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557173-L557177) | `FunctionDeclaration` | no | `card, resolved` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763839-763843](../../../../../../../reference/runtime/host-main.cjs#L763839-L763843) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557173-557177](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557173-L557177) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:763839

Calls written directly in this body: `PLUGIN_ID_PATTERN.test`.

SHA-256 of the source span: `53c5e3b96aabd1921d6c1d113b3212422225ba2305d652d0d764c94b2aca4b81`.

### evaluation:557173

Calls written directly in this body: `PLUGIN_ID_PATTERN.test`.

SHA-256 of the source span: `53c5e3b96aabd1921d6c1d113b3212422225ba2305d652d0d764c94b2aca4b81`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
