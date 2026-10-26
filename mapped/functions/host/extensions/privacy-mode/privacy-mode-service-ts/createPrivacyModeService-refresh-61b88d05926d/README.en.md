# `createPrivacyModeService/refresh`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/privacy-mode/privacy-mode-service.ts` · [Module README](../../../../../../modules/host/extensions/privacy-mode/privacy-mode-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706513-706544](../../../../../../../reference/runtime/host-main.cjs#L706513-L706544) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706513-706544](../../../../../../../reference/runtime/host-main.cjs#L706513-L706544) | 4 | 0 | 1 | 1 | 0 | 1 |

### host:706513

Calls written directly in this body: `activeRefresh.abort`, `clock.now`, `logger132.warn`, `new AbortController`, `policies2.lookupRetry.runWithRetry`, `publish`, `toPrivacyMode2`.

Assignment or increment targets: `activeRefresh`, `generation`.

SHA-256 of the source span: `70ca3a8ea71e6910200079fcc847c785da68dd0af75d3584012addbd962bad07`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
