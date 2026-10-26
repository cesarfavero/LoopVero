# `resolveSendMessageAct`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-ui-map/actions.ts` · [Module README](../../../../../../modules/core/runner/sand-ui-map/actions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557929-557968](../../../../../../../reference/runtime/host-main.cjs#L557929-L557968) | `FunctionDeclaration` | no | `raw, context2` |
| [evaluation:550737-550776](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550737-L550776) | `FunctionDeclaration` | no | `raw, context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557929-557968](../../../../../../../reference/runtime/host-main.cjs#L557929-L557968) | 10 | 0 | 0 | 1 | 8 | 0 |
| [evaluation:550737-550776](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550737-L550776) | 10 | 0 | 0 | 1 | 8 | 0 |

### host:557929

Calls written directly in this body: `.join`, `PLAN_NAME.test`, `actRefused`, `moveAllowedForRequestSource`, `parseSendMessageAct`, `sandUiActionAcceptsValue`, `sandUiActionTakesValue`, `sandUiFactsForToolDescription`, `taught.find`, `taught.map`, `taughtActions`, `valueList`.

Explicit throw targets: `actRefused`.

SHA-256 of the source span: `0de6f2cb7b382038855c2a94bec3def75fe4c2ccadadde761912d0ed3d84c5df`.

### evaluation:550737

Calls written directly in this body: `.join`, `PLAN_NAME.test`, `actRefused`, `moveAllowedForRequestSource`, `parseSendMessageAct`, `sandUiActionAcceptsValue`, `sandUiActionTakesValue`, `sandUiFactsForToolDescription`, `taught.find`, `taught.map`, `taughtActions`, `valueList`.

Explicit throw targets: `actRefused`.

SHA-256 of the source span: `0de6f2cb7b382038855c2a94bec3def75fe4c2ccadadde761912d0ed3d84c5df`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
