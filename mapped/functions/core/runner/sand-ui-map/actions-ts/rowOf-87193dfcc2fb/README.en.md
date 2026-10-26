# `rowOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-ui-map/actions.ts` · [Module README](../../../../../../modules/core/runner/sand-ui-map/actions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557880-557883](../../../../../../../reference/runtime/host-main.cjs#L557880-L557883) | `FunctionDeclaration` | no | `action` |
| [evaluation:550688-550691](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550688-L550691) | `FunctionDeclaration` | no | `action` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557880-557883](../../../../../../../reference/runtime/host-main.cjs#L557880-L557883) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:550688-550691](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550688-L550691) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:557880

Calls written directly in this body: `SAND_UI_MAP_SETTINGS_ROWS.find`, `sandUiActionAnchor`.

SHA-256 of the source span: `4711d71ce010641fba808abc3ddc3b478b3a2eed36b72f0ebbd6b3373c11e213`.

### evaluation:550688

Calls written directly in this body: `SAND_UI_MAP_SETTINGS_ROWS.find`, `sandUiActionAnchor`.

SHA-256 of the source span: `4711d71ce010641fba808abc3ddc3b478b3a2eed36b72f0ebbd6b3373c11e213`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
