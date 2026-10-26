# `refusalError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/local-exec-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/local-exec-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472076-472089](../../../../../../../reference/runtime/host-main.cjs#L472076-L472089) | `FunctionDeclaration` | no | `cause` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472076-472089](../../../../../../../reference/runtime/host-main.cjs#L472076-L472089) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:472076

Calls written directly in this body: `SandError.localExecComputerAmbiguous`, `SandError.localExecComputerUnknown`, `SandError.localExecMessagesUnsupported`, `SandError.localExecNoProviders`, `SandError.localExecProvidersStale`.

SHA-256 of the source span: `feac98681a411594e932be10e75e4461ce09430dd646f405ed88f6e4985a9bd2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
