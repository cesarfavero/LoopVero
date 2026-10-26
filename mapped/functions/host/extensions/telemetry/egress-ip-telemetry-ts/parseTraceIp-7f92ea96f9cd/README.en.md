# `parseTraceIp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/egress-ip-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/egress-ip-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729893-729901](../../../../../../../reference/runtime/host-main.cjs#L729893-L729901) | `FunctionDeclaration` | no | `body` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729893-729901](../../../../../../../reference/runtime/host-main.cjs#L729893-L729901) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:729893

Calls written directly in this body: `.trim`, `body.split`, `line.trim`, `trimmed.slice`, `trimmed.startsWith`.

SHA-256 of the source span: `0669c61ded6ff0e7428ece3fd9422aa7b9ff791df3b262d6efba31e6e16f9193`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
