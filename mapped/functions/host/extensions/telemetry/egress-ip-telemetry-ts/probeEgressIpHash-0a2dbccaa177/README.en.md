# `probeEgressIpHash`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/egress-ip-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/egress-ip-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729913-729923](../../../../../../../reference/runtime/host-main.cjs#L729913-L729923) | `FunctionDeclaration` | yes | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729913-729923](../../../../../../../reference/runtime/host-main.cjs#L729913-L729923) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:729913

Calls written directly in this body: `new EgressIpProbeError`, `options2.deadline.run`, `parseTraceIp`, `pseudonymizeEgressIp`.

Explicit throw targets: `EgressIpProbeError`.

SHA-256 of the source span: `9968f53ec196012b351336604eeffac0ba5837d8c8ee2bda93032d83336fa8f1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
