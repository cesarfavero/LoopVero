# `connectorAuthTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/observability/README.en.md).

**Module:** `shared/observability/connector-auth-telemetry.ts` · [Module README](../../../../../modules/shared/observability/connector-auth-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:455725-455743](../../../../../../reference/runtime/host-main.cjs#L455725-L455743) | `FunctionDeclaration` | no | `report, surface` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:455725-455743](../../../../../../reference/runtime/host-main.cjs#L455725-L455743) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:455725

Calls written directly in this body: `brandedId`, `connectorAuthTag`, `logFields`, `sandErrorTags`.

SHA-256 of the source span: `dbbc3aec8f3c24d4e1ffac89ab4d4e3ca294ff134f79fe1df016bc12611ddd21`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
