# `userAgentPlatformOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/sand-client-metadata.ts` · [Module README](../../../../../modules/shared/node/sand-client-metadata-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:175853-175864](../../../../../../reference/runtime/host-main.cjs#L175853-L175864) | `FunctionDeclaration` | no | `platform2` |
| [evaluation:511788-511799](../../../../../../reference/runtime/sand-eval-runner.cjs#L511788-L511799) | `FunctionDeclaration` | no | `platform` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175853-175864](../../../../../../reference/runtime/host-main.cjs#L175853-L175864) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:511788-511799](../../../../../../reference/runtime/sand-eval-runner.cjs#L511788-L511799) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:175853

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `6023c2446f9a4cf3cbad70b57254a1908a1246b2806e09dc3906226b8f0a41da`.

### evaluation:511788

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `7be2672057ccba89f35882c379ea5002e0f339d06b0a726a3af18ce8437830d1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
