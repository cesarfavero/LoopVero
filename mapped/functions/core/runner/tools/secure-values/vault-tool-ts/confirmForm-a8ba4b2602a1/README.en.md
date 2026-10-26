# `confirmForm`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/vault-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767970-768003](../../../../../../../../reference/runtime/host-main.cjs#L767970-L768003) | `FunctionDeclaration` | no | `args` |
| [evaluation:563486-563519](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563486-L563519) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767970-768003](../../../../../../../../reference/runtime/host-main.cjs#L767970-L768003) | 4 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:563486-563519](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563486-L563519) | 4 | 0 | 0 | 1 | 1 | 0 |

### host:767970

Calls written directly in this body: `clampBlock`, `clampLine`, `definedValues`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `4a228bc4d4859bb18ceb4afae7feae1623f6b83e48ff0157410339ff197c1663`.

### evaluation:563486

Calls written directly in this body: `clampBlock`, `clampLine`, `definedValues`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `4a228bc4d4859bb18ceb4afae7feae1623f6b83e48ff0157410339ff197c1663`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
