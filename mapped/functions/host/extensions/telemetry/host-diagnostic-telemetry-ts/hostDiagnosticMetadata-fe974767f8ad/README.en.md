# `hostDiagnosticMetadata`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-diagnostic-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-diagnostic-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:471618-471700](../../../../../../../reference/runtime/host-main.cjs#L471618-L471700) | `FunctionDeclaration` | no | `diagnostic` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471618-471700](../../../../../../../reference/runtime/host-main.cjs#L471618-L471700) | 31 | 0 | 0 | 10 | 0 | 0 |

### host:471618

Calls written directly in this body: `brandedErrorTag`, `brandedId`, `connectorAuthTag`, `logFields`.

SHA-256 of the source span: `af5b391d29ddd79a036571880c246694be9c340a476c84cdae07d40ab4b89fb5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
