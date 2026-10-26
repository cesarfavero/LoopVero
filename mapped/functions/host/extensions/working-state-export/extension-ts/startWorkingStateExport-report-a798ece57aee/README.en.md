# `startWorkingStateExport/report`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/extension.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786089-786092](../../../../../../../reference/runtime/host-main.cjs#L786089-L786092) | `ArrowFunctionExpression` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786089-786092](../../../../../../../reference/runtime/host-main.cjs#L786089-L786092) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:786089

Calls written directly in this body: `context2.deps.telemetry.logs.reportWorkingStateExport`, `recordWorkingStateExportMetrics`.

SHA-256 of the source span: `1f35ee0def2dc1176bb93ccec5a9a84aa2d6d0c4999f680d30603580f782bea0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
