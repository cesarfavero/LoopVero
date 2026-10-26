# `normalizeDestination`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/upload-file-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/upload-file-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774605-774634](../../../../../../../reference/runtime/host-main.cjs#L774605-L774634) | `FunctionDeclaration` | no | `destination` |
| [evaluation:574208-574237](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574208-L574237) | `FunctionDeclaration` | no | `destination` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774605-774634](../../../../../../../reference/runtime/host-main.cjs#L774605-L774634) | 10 | 0 | 0 | 1 | 3 | 0 |
| [evaluation:574208-574237](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574208-L574237) | 10 | 0 | 0 | 1 | 3 | 0 |

### host:774605

Calls written directly in this body: `destination.name.includes`, `new SandToolInputError`, `nonEmpty6`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `fbc7c934599edee9f1e97babd9164cae48c6ea4b460aff63403af36e2d309b16`.

### evaluation:574208

Calls written directly in this body: `destination.name.includes`, `new SandToolInputError`, `nonEmpty5`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `5d020803f9fd4777f8e19b711a8105c7b4fe93b599a3c81a5e5b2b2caab64b72`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
