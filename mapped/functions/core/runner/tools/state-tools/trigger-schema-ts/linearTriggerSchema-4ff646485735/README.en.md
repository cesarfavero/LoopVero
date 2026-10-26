# `linearTriggerSchema`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/trigger-schema.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/trigger-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762309-762340](../../../../../../../../reference/runtime/host-main.cjs#L762309-L762340) | `FunctionDeclaration` | no | `copy` |
| [evaluation:554919-554950](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554919-L554950) | `FunctionDeclaration` | no | `copy` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762309-762340](../../../../../../../../reference/runtime/host-main.cjs#L762309-L762340) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554919-554950](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554919-L554950) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:762309

Calls written directly in this body: `.optional`, `described`, `external_exports2.array`, `external_exports2.discriminatedUnion`, `external_exports2.literal`, `external_exports2.object`, `external_exports2.string`.

SHA-256 of the source span: `909e6fb3126cdb5b6a8ae9e15cc80a4b9b644a4a189576a0c1f14be0363f64a5`.

### evaluation:554919

Calls written directly in this body: `.optional`, `described`, `external_exports3.array`, `external_exports3.discriminatedUnion`, `external_exports3.literal`, `external_exports3.object`, `external_exports3.string`.

SHA-256 of the source span: `b622cca28547a9afa4e317eb6a514b92832d6a6aeaa229144f6a788b44c6c21d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
