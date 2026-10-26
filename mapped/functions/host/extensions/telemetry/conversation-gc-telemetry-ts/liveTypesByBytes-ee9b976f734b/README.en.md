# `liveTypesByBytes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/conversation-gc-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/conversation-gc-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:456005-456012](../../../../../../../reference/runtime/host-main.cjs#L456005-L456012) | `FunctionDeclaration` | no | `liveBytesByType` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:456005-456012](../../../../../../../reference/runtime/host-main.cjs#L456005-L456012) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:456005

Calls written directly in this body: `.sort`, `LIVE_BYTES_BY_TYPE_KEYS.filter`, `brandLiteralEnumList`.

SHA-256 of the source span: `5a3631f4985c43918f5ed38f4191692d0366f3e71cef3e77aa6535b9f6fbe232`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
