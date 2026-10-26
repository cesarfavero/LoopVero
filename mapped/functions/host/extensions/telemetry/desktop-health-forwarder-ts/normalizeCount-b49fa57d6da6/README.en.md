# `normalizeCount`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/desktop-health-forwarder.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/desktop-health-forwarder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731360-731365](../../../../../../../reference/runtime/host-main.cjs#L731360-L731365) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731360-731365](../../../../../../../reference/runtime/host-main.cjs#L731360-L731365) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:731360

Calls written directly in this body: `Math.min`, `Number.isSafeInteger`.

SHA-256 of the source span: `06e522ac7ec2abf17fb67b5962312c2d5e49a8478ccef1ce215308a234c30d74`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
