# `createCodebaseTelemetryService`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/codebase-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:540987-541088](../../../../../../../reference/runtime/host-main.cjs#L540987-L541088) | `FunctionDeclaration` | no | `{   auth: auth2,   createAdapter,   privacyMode,   policies: policies2,   logger: logger132 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:540987-541088](../../../../../../../reference/runtime/host-main.cjs#L540987-L541088) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:540987

Calls written directly in this body: `createSandCodebaseTelemetryHost`, `new CodebaseSnapshotTrigger`, `new CodebaseTelemetryController`.

Assignment or increment targets: `controller`.

SHA-256 of the source span: `a61d95b6a18f5f72f7d2e2464c54cdd6c30761a9491404975981619e603a5152`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
