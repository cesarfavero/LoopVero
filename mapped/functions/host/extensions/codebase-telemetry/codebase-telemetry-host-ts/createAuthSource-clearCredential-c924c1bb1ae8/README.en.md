# `createAuthSource/clearCredential`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/codebase-telemetry-host.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:540913-540918](../../../../../../../reference/runtime/host-main.cjs#L540913-L540918) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:540913-540918](../../../../../../../reference/runtime/host-main.cjs#L540913-L540918) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:540913

Calls written directly in this body: `receiver.get`, `sender.send`.

SHA-256 of the source span: `d8b86974fa2b4a358949532eb4cf24c29c2b4013af39430eead40b9af321eba6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
