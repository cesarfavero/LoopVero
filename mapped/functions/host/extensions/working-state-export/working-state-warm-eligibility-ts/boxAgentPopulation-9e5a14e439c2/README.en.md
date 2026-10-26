# `boxAgentPopulation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/working-state-warm-eligibility.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/working-state-warm-eligibility-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785882-785888](../../../../../../../reference/runtime/host-main.cjs#L785882-L785888) | `FunctionDeclaration` | no | `agentIds, runningAgentIds, isBoxAgent` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785882-785888](../../../../../../../reference/runtime/host-main.cjs#L785882-L785888) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:785882

Calls written directly in this body: `agentIds.filter`, `boxAgentIds.filter`.

SHA-256 of the source span: `98bfdcdf5aad2d45cbb95043f26b84fa27725a2af90b31e4c326e8a60015c9a7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
