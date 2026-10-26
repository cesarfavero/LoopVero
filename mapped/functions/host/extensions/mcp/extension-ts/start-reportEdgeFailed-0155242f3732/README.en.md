# `start/reportEdgeFailed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/extension.ts` · [Module README](../../../../../../modules/host/extensions/mcp/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702508-702508](../../../../../../../reference/runtime/host-main.cjs#L702508-L702508) | `ArrowFunctionExpression` | no | `failure3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702508-702508](../../../../../../../reference/runtime/host-main.cjs#L702508-L702508) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:702508 uses an implicit arrow-function return.

### host:702508

Calls written directly in this body: `context2.deps.telemetry.logs.reportSkillPublishEdgeFailed`.

SHA-256 of the source span: `da0daad00f0ef6ca89bb33a3eaa518ba7cbc4f82f756b8285e4c59bb9cc08f80`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
