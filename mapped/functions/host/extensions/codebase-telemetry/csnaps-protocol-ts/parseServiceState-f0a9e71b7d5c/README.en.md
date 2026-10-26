# `parseServiceState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/csnaps-protocol.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/csnaps-protocol-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541250-541258](../../../../../../../reference/runtime/host-main.cjs#L541250-L541258) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541250-541258](../../../../../../../reference/runtime/host-main.cjs#L541250-L541258) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:541250

Calls written directly in this body: `Array.isArray`, `hasExactKeys`, `new CsnapsProtocolError`, `value.tracked.map`.

Explicit throw targets: `CsnapsProtocolError`.

SHA-256 of the source span: `609396935bea3f843868f96e50ac21f028544bbbfd28e4b40728e8affb4efce8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
