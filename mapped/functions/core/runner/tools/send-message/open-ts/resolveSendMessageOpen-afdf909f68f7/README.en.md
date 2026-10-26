# `resolveSendMessageOpen`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message/open.ts` · [Module README](../../../../../../../modules/core/runner/tools/send-message/open-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557838-557868](../../../../../../../../reference/runtime/host-main.cjs#L557838-L557868) | `FunctionDeclaration` | no | `raw, context2` |
| [evaluation:550652-550682](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L550652-L550682) | `FunctionDeclaration` | no | `raw, context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557838-557868](../../../../../../../../reference/runtime/host-main.cjs#L557838-L557868) | 7 | 0 | 0 | 1 | 6 | 0 |
| [evaluation:550652-550682](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L550652-L550682) | 7 | 0 | 0 | 1 | 6 | 0 |

### host:557838

Calls written directly in this body: `OPENABLE_ROUTES.has`, `moveAllowedForRequestSource`, `openRefused`, `sandDeepLinks.parse`, `sandUiFactsForToolDescription`, `taught.includes`, `taught.join`, `taughtSettingsAnchorIds`.

Explicit throw targets: `openRefused`.

SHA-256 of the source span: `04ece11fe62a42bc02b147eaead4174f9da20a4d17ddb83011e5848dda3abbbd`.

### evaluation:550652

Calls written directly in this body: `OPENABLE_ROUTES.has`, `moveAllowedForRequestSource`, `openRefused`, `sandDeepLinks.parse`, `sandUiFactsForToolDescription`, `taught.includes`, `taught.join`, `taughtSettingsAnchorIds`.

Explicit throw targets: `openRefused`.

SHA-256 of the source span: `04ece11fe62a42bc02b147eaead4174f9da20a4d17ddb83011e5848dda3abbbd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
