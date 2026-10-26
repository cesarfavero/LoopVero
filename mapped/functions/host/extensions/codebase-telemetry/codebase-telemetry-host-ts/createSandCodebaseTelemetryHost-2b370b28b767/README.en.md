# `createSandCodebaseTelemetryHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/codebase-telemetry-host.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:540858-540904](../../../../../../../reference/runtime/host-main.cjs#L540858-L540904) | `FunctionDeclaration` | no | `{   auth: auth2,   privacyMode,   createAdapter,   logger: logger132 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:540858-540904](../../../../../../../reference/runtime/host-main.cjs#L540858-L540904) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:540858

Calls written directly in this body: `createAuthSource`, `createPrivacyModeSource`, `disposables.add`, `new DisposableStore`.

SHA-256 of the source span: `58535e07a00b15f4d0f72dd6bdabbb7f3b12076498e853ad503a65d57a318e92`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
