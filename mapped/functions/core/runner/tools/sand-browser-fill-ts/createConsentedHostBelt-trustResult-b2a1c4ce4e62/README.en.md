# `createConsentedHostBelt/trustResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727396-727404](../../../../../../../reference/runtime/host-main.cjs#L727396-L727404) | `FunctionExpression` | no | `result` |
| [evaluation:561902-561910](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561902-L561910) | `FunctionExpression` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727396-727404](../../../../../../../reference/runtime/host-main.cjs#L727396-L727404) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:561902-561910](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561902-L561910) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:727396

Calls written directly in this body: `anchorFirstOnHostUrlAndMarkMovedWhenALaterOneDiffers`, `fillableHostOfUrl`, `hostMatchesConsentedUserFormHost`, `markLost`.

SHA-256 of the source span: `52a71a2878c511ca6a1b90cef38170fe56915b528aaf39fa5183e9ed234671f0`.

### evaluation:561902

Calls written directly in this body: `anchorFirstOnHostUrlAndMarkMovedWhenALaterOneDiffers`, `fillableHostOfUrl`, `hostMatchesConsentedUserFormHost`, `markLost`.

SHA-256 of the source span: `52a71a2878c511ca6a1b90cef38170fe56915b528aaf39fa5183e9ed234671f0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
