# `searchIndexHealthTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/search-index-health-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/search-index-health-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472257-472268](../../../../../../../reference/runtime/host-main.cjs#L472257-L472268) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472257-472268](../../../../../../../reference/runtime/host-main.cjs#L472257-L472268) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:472257

Calls written directly in this body: `WARN_KINDS2.has`, `brandedErrorTag`, `logFields`.

SHA-256 of the source span: `165446d9d43f07db243021e52aa25291d47f615e5cfb79b167ca50473302f277`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
