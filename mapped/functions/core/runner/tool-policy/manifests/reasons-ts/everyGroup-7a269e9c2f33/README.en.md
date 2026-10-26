# `everyGroup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tool-policy/manifests/reasons.ts` · [Module README](../../../../../../../modules/core/runner/tool-policy/manifests/reasons-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756680-756703](../../../../../../../../reference/runtime/host-main.cjs#L756680-L756703) | `FunctionDeclaration` | no | `reason` |
| [evaluation:542618-542641](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L542618-L542641) | `FunctionDeclaration` | no | `reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756680-756703](../../../../../../../../reference/runtime/host-main.cjs#L756680-L756703) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:542618-542641](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L542618-L542641) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:756680

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `d8f8ce1026dbbbd2540da11c9e9e3dbe2f15f42bc3e3609aeb050e6122f2b1f2`.

### evaluation:542618

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `d8f8ce1026dbbbd2540da11c9e9e3dbe2f15f42bc3e3609aeb050e6122f2b1f2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
