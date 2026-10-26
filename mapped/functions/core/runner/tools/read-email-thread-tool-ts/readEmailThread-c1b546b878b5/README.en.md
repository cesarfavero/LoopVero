# `readEmailThread`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/read-email-thread-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/read-email-thread-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765094-765107](../../../../../../../reference/runtime/host-main.cjs#L765094-L765107) | `FunctionDeclaration` | yes | `deps, args` |
| [evaluation:558462-558475](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558462-L558475) | `FunctionDeclaration` | yes | `deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765094-765107](../../../../../../../reference/runtime/host-main.cjs#L765094-L765107) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:558462-558475](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558462-L558475) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:765094

Calls written directly in this body: `Math.min`, `deps.email.readThread`, `renderEmailThread`.

SHA-256 of the source span: `e8c80fd2d3bcff04ae4b7412980458c4ac9ba3c6bfdeb8702e5f99b6a6e31083`.

### evaluation:558462

Calls written directly in this body: `Math.min`, `deps.email.readThread`, `renderEmailThread`.

SHA-256 of the source span: `e8c80fd2d3bcff04ae4b7412980458c4ac9ba3c6bfdeb8702e5f99b6a6e31083`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
