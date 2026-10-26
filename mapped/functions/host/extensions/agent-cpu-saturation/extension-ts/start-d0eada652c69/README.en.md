# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-cpu-saturation/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-cpu-saturation/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494421-494434](../../../../../../../reference/runtime/host-main.cjs#L494421-L494434) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494421-494434](../../../../../../../reference/runtime/host-main.cjs#L494421-L494434) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494421

Calls written directly in this body: `context2.onStop`, `createAgentCpuSaturationService`, `createPollingPolicy2`.

SHA-256 of the source span: `faf07350d1f062e9d8568b687890c139b4d1df408dba86ca385930d50b8bdfca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
