# `checkFolderTargets`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/upload-file-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/upload-file-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774635-774641](../../../../../../../reference/runtime/host-main.cjs#L774635-L774641) | `FunctionDeclaration` | no | `destination, service` |
| [evaluation:574238-574244](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574238-L574244) | `FunctionDeclaration` | no | `destination, service` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774635-774641](../../../../../../../reference/runtime/host-main.cjs#L774635-L774641) | 1 | 0 | 0 | 0 | 1 | 0 |
| [evaluation:574238-574244](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574238-L574244) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:774635

Calls written directly in this body: `isSharepointConnectorService`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `1c6da4548c652e34377eec6673309d8f5f1b3e91e324cc1d478f34055e6b6f97`.

### evaluation:574238

Calls written directly in this body: `isSharepointConnectorService`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `1c6da4548c652e34377eec6673309d8f5f1b3e91e324cc1d478f34055e6b6f97`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
