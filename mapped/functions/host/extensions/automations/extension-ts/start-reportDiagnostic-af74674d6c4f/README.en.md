# `start/reportDiagnostic`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/extension.ts` · [Module README](../../../../../../modules/host/extensions/automations/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505942-505942](../../../../../../../reference/runtime/host-main.cjs#L505942-L505942) | `ArrowFunctionExpression` | no | `diagnostic` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505942-505942](../../../../../../../reference/runtime/host-main.cjs#L505942-L505942) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:505942 uses an implicit arrow-function return.

### host:505942

Calls written directly in this body: `context2.deps.telemetry.logs.reportHostExtensionDiagnostic`.

SHA-256 of the source span: `d3d4e5f22d61751cbd39881cf4d3559fd7ed9aa1f3141a9b3450b6589a9a6bdb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
