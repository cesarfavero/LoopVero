# `createUpdateAppHomeTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-app-home-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-app-home-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771042-771054](../../../../../../../reference/runtime/host-main.cjs#L771042-L771054) | `FunctionDeclaration` | no | `appHome` |
| [evaluation:570148-570160](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570148-L570160) | `FunctionDeclaration` | no | `appHome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771042-771054](../../../../../../../reference/runtime/host-main.cjs#L771042-L771054) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570148-570160](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570148-L570160) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:771042

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `1315c7ecc57f3397860e18ea6c5015af65fcef2cbd899cb576b62be3cda3d676`.

### evaluation:570148

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `1315c7ecc57f3397860e18ea6c5015af65fcef2cbd899cb576b62be3cda3d676`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
