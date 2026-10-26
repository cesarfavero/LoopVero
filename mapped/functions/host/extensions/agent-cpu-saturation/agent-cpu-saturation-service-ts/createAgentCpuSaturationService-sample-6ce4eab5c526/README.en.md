# `createAgentCpuSaturationService/sample`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-cpu-saturation/agent-cpu-saturation-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-cpu-saturation/agent-cpu-saturation-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494387-494409](../../../../../../../reference/runtime/host-main.cjs#L494387-L494409) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494387-494409](../../../../../../../reference/runtime/host-main.cjs#L494387-L494409) | 6 | 0 | 1 | 2 | 0 | 0 |

### host:494387

Calls written directly in this body: `deps.clock.now`, `deps.log`, `deps.readCpuStat`, `parseCgroupCpuUsageUsec`.

Assignment or increment targets: `lastReadKind`, `previous`, `saturatedSinceMs`.

SHA-256 of the source span: `e8085680615fdeddbe90170736b203df579d6d48d46c505f1fe74f170df50763`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
