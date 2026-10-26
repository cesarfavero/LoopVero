# `connectorAuthAnalyticsProps`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/observability/README.en.md).

**Module:** `shared/observability/connector-auth-telemetry.ts` · [Module README](../../../../../modules/shared/observability/connector-auth-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:455697-455724](../../../../../../reference/runtime/host-main.cjs#L455697-L455724) | `FunctionDeclaration` | no | `report, surface` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:455697-455724](../../../../../../reference/runtime/host-main.cjs#L455697-L455724) | 16 | 0 | 0 | 1 | 0 | 0 |

### host:455697

Calls written directly in this body: `analyticsOnlyUnboundedConnectorDomain`, `brandedHost`, `brandedId`, `connectorAuthTag`, `sandErrorTags`.

SHA-256 of the source span: `906c13fc4a613e828e2bc3711e0162a0b369895f4fc6e2ed9544ebd9c36114ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
