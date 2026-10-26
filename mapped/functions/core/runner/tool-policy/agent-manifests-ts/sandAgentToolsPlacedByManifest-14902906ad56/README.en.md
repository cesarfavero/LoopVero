# `sandAgentToolsPlacedByManifest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tool-policy/agent-manifests.ts` · [Module README](../../../../../../modules/core/runner/tool-policy/agent-manifests-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:543237-543239](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543237-L543239) | `FunctionDeclaration` | no | `kind, variant` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:543237-543239](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543237-L543239) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:543237

Calls written directly in this body: `manifestOf`.

SHA-256 of the source span: `6f5553a0e48c178f56eda53f58258bac1cb04ccf63813375d8430c51150b5b56`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
