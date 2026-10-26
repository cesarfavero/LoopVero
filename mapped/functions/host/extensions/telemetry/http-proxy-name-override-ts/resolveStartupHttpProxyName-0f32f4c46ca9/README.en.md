# `resolveStartupHttpProxyName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/http-proxy-name-override.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/http-proxy-name-override-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731776-731783](../../../../../../../reference/runtime/host-main.cjs#L731776-L731783) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731776-731783](../../../../../../../reference/runtime/host-main.cjs#L731776-L731783) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:731776

Calls written directly in this body: `args.store.read`.

SHA-256 of the source span: `5577967e96e19be7f19e6e229aa029c5502670f5151a53e9f16bccd633e190e5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
