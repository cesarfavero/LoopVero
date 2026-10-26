# `measureMediaDimensions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760669-760675](../../../../../../../reference/runtime/host-main.cjs#L760669-L760675) | `FunctionDeclaration` | yes | `source, deps` |
| [evaluation:551484-551490](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551484-L551490) | `FunctionDeclaration` | yes | `source, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760669-760675](../../../../../../../reference/runtime/host-main.cjs#L760669-L760675) | 3 | 0 | 1 | 4 | 0 | 0 |
| [evaluation:551484-551490](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551484-L551490) | 3 | 0 | 1 | 4 | 0 | 0 |

### host:760669

Calls written directly in this body: `deps.readMediaDimensions`, `filePathFromFileUrl`.

SHA-256 of the source span: `fa147fcdf45c20f2bdfeff01043c36c253f232bbf949fbc2462a2261aa5cb617`.

### evaluation:551484

Calls written directly in this body: `deps.readMediaDimensions`, `filePathFromFileUrl`.

SHA-256 of the source span: `fa147fcdf45c20f2bdfeff01043c36c253f232bbf949fbc2462a2261aa5cb617`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
