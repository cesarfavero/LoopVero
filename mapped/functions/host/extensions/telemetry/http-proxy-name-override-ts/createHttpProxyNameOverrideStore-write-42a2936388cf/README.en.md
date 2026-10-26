# `createHttpProxyNameOverrideStore/write`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/http-proxy-name-override.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/http-proxy-name-override-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731765-731773](../../../../../../../reference/runtime/host-main.cjs#L731765-L731773) | `ArrowFunctionExpression` | yes | `override` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731765-731773](../../../../../../../reference/runtime/host-main.cjs#L731765-L731773) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:731765

Calls written directly in this body: `JSON.stringify`, `errorLogTag`, `writeSandDataFile`.

SHA-256 of the source span: `71f06874740b7319ed7220b461077d7634c7a1b345facfea0241f355426eb5e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
