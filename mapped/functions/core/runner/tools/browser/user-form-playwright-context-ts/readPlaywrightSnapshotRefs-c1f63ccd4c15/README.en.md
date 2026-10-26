# `readPlaywrightSnapshotRefs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/user-form-playwright-context.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/user-form-playwright-context-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767557-767562](../../../../../../../../reference/runtime/host-main.cjs#L767557-L767562) | `FunctionDeclaration` | yes | `ctx, exec2, windowIndex` |
| [evaluation:563074-563079](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563074-L563079) | `FunctionDeclaration` | yes | `ctx, exec2, windowIndex` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767557-767562](../../../../../../../../reference/runtime/host-main.cjs#L767557-L767562) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:563074-563079](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563074-L563079) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:767557

Calls written directly in this body: `mapRead`, `readPlaywrightTool`.

SHA-256 of the source span: `96b008812272f81849d9b0e4a4b9b7c53e7a0d1ce094cf1a2b333c14983989c8`.

### evaluation:563074

Calls written directly in this body: `mapRead`, `readPlaywrightTool`.

SHA-256 of the source span: `96b008812272f81849d9b0e4a4b9b7c53e7a0d1ce094cf1a2b333c14983989c8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
