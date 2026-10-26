# `createCredentialProviderStatusTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-provider-status-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-provider-status-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751739-751772](../../../../../../../reference/runtime/host-main.cjs#L751739-L751772) | `FunctionDeclaration` | no | `reader, options2 = {}` |
| [evaluation:524805-524838](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524805-L524838) | `FunctionDeclaration` | no | `reader, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751739-751772](../../../../../../../reference/runtime/host-main.cjs#L751739-L751772) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524805-524838](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524805-L524838) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:751739

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `38f36c3c76882905bea7176da48c55dea1e595fec6fbfa7c14629a7a08405abe`.

### evaluation:524805

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `453735d06e001e36e237620a9c273b7b6a855f36cace3458945c89225d8edd34`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
