# `createConsentedHostBelt/anchorFirstOnHostUrlAndMarkMovedWhenALaterOneDiffers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727362-727366](../../../../../../../reference/runtime/host-main.cjs#L727362-L727366) | `ArrowFunctionExpression` | no | `url2` |
| [evaluation:561868-561872](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561868-L561872) | `ArrowFunctionExpression` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727362-727366](../../../../../../../reference/runtime/host-main.cjs#L727362-L727366) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:561868-561872](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561868-L561872) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:727362

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `anchorUrl`, `moved`.

SHA-256 of the source span: `638d340e07c527c3a5a4caf6fb41f8c5222e04eea1266ac820a06b63d64230c3`.

### evaluation:561868

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `anchorUrl`, `moved`.

SHA-256 of the source span: `638d340e07c527c3a5a4caf6fb41f8c5222e04eea1266ac820a06b63d64230c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
