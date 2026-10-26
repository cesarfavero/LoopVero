# `createPressureCpuProfiler/pruneOldProfiles`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/pressure-cpu-profiler.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/pressure-cpu-profiler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731866-731871](../../../../../../../reference/runtime/host-main.cjs#L731866-L731871) | `ArrowFunctionExpression` | no | `maxRetainedProfiles` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731866-731871](../../../../../../../reference/runtime/host-main.cjs#L731866-L731871) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:731866

Calls written directly in this body: `.filter`, `.sort`, `Math.max`, `profiles.slice`.

SHA-256 of the source span: `0955830807b35ffaa17edefa4bf796c75ef48537c344cd6aa50f8b9e2a6f3968`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
