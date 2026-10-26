# `start/onConnectorAuth`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/extension.ts` · [Module README](../../../../../../modules/host/extensions/mcp/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702488-702494](../../../../../../../reference/runtime/host-main.cjs#L702488-L702494) | `ArrowFunctionExpression` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702488-702494](../../../../../../../reference/runtime/host-main.cjs#L702488-L702494) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:702488

Calls written directly in this body: `connectorAuthAnalyticsProps`, `context2.deps.telemetry.analytics.trackEvent`, `context2.deps.telemetry.logs.reportConnectorAuth`.

SHA-256 of the source span: `a8be8299d857dd4ad612e0cbc8e0a8bc8249dd65bc58e696e65e913d4868b226`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
