# `pseudonymizeEgressIp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/egress-ip-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/egress-ip-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729902-729904](../../../../../../../reference/runtime/host-main.cjs#L729902-L729904) | `FunctionDeclaration` | no | `ip` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729902-729904](../../../../../../../reference/runtime/host-main.cjs#L729902-L729904) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:729902

Calls written directly in this body: `.digest`, `.update`.

SHA-256 of the source span: `b6641aedee9697d577c7c6ec43f44483da316e96db1b4aff48bca4984b75ec8d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
