# `createConsentedHostBelt/okToWrite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727380-727395](../../../../../../../reference/runtime/host-main.cjs#L727380-L727395) | `FunctionExpression` | yes | `(none)` |
| [evaluation:561886-561901](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561886-L561901) | `FunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727380-727395](../../../../../../../reference/runtime/host-main.cjs#L727380-L727395) | 6 | 0 | 2 | 7 | 0 | 0 |
| [evaluation:561886-561901](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561886-L561901) | 6 | 0 | 2 | 7 | 0 | 0 |

### host:727380

Calls written directly in this body: `anchorFirstOnHostUrlAndMarkMovedWhenALaterOneDiffers`, `hostMatchesConsentedUserFormHost`, `livePageHostOf`, `markLost`, `runner.run`, `selectTabOnConsentedHost`.

SHA-256 of the source span: `8150d849e348be1b84356c382647094a0fa9e205e1cccab1f45936bd526f245e`.

### evaluation:561886

Calls written directly in this body: `anchorFirstOnHostUrlAndMarkMovedWhenALaterOneDiffers`, `hostMatchesConsentedUserFormHost`, `livePageHostOf`, `markLost`, `runner.run`, `selectTabOnConsentedHost`.

SHA-256 of the source span: `8150d849e348be1b84356c382647094a0fa9e205e1cccab1f45936bd526f245e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
