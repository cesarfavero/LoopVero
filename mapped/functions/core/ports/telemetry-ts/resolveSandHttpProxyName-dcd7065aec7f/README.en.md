# `resolveSandHttpProxyName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/observability/README.en.md).

**Module:** `core/ports/telemetry.ts` · [Module README](../../../../../modules/core/ports/telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:450974-450976](../../../../../../reference/runtime/host-main.cjs#L450974-L450976) | `FunctionDeclaration` | no | `env` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:450974-450976](../../../../../../reference/runtime/host-main.cjs#L450974-L450976) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:450974

Calls written directly in this body: `readSandBoxPodEnv`.

SHA-256 of the source span: `78d90ce5b6436534c1fae35d2f6c98638413a55f308ac398669f509553da59e7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
