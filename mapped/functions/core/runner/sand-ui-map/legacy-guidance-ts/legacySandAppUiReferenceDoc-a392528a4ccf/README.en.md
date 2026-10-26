# `legacySandAppUiReferenceDoc`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-ui-map/legacy-guidance.ts` · [Module README](../../../../../../modules/core/runner/sand-ui-map/legacy-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:555291-555313](../../../../../../../reference/runtime/host-main.cjs#L555291-L555313) | `FunctionDeclaration` | no | `visibility = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555291-555313](../../../../../../../reference/runtime/host-main.cjs#L555291-L555313) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:555291

Calls written directly in this body: `.join`, `Object.values`, `extras.join`, `legacyTaughtSettingsAnchorIds`, `linkableRowsByTab`, `settingsRowLink`.

SHA-256 of the source span: `8fde5b81212e866ed27b900df2b714364454f22aa449efe6941d99d460dd819d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
