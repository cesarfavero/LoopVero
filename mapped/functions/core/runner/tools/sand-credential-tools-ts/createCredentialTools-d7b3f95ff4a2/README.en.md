# `createCredentialTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751891-751920](../../../../../../../reference/runtime/host-main.cjs#L751891-L751920) | `FunctionDeclaration` | no | `access5, options2 = {}` |
| [evaluation:524957-524986](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524957-L524986) | `FunctionDeclaration` | no | `access4, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751891-751920](../../../../../../../reference/runtime/host-main.cjs#L751891-L751920) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524957-524986](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524957-L524986) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:751891

Calls written directly in this body: `defineCommunicateTool`, `loginFormGuidanceFor`.

SHA-256 of the source span: `31adda91af3675c35c61ff3ce1d76e4d695f00ae8b36dda1e08c66a7b10d6fe1`.

### evaluation:524957

Calls written directly in this body: `defineCommunicateTool`, `loginFormGuidanceFor`.

SHA-256 of the source span: `18b1a2e0dc57f414ca3c49e3328645b49088b3680fdae31a231e5d66343b84ee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
