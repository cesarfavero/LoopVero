# `hasExactKeys`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/csnaps-protocol.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/csnaps-protocol-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541276-541280](../../../../../../../reference/runtime/host-main.cjs#L541276-L541280) | `FunctionDeclaration` | no | `value, keys` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541276-541280](../../../../../../../reference/runtime/host-main.cjs#L541276-L541280) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:541276

Calls written directly in this body: `.sort`, `Object.keys`, `actual.every`.

SHA-256 of the source span: `21d12eaaa274be6c8a65c2c1f42b477f3cc7fa9673330662b9c935176557b3e3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
