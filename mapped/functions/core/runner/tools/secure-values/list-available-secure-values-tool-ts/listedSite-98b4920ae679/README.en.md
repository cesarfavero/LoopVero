# `listedSite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/list-available-secure-values-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/list-available-secure-values-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767292-767302](../../../../../../../../reference/runtime/host-main.cjs#L767292-L767302) | `FunctionDeclaration` | yes | `ctx, requested, liveBrowserHost` |
| [evaluation:562811-562821](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562811-L562821) | `FunctionDeclaration` | yes | `ctx, requested, liveBrowserHost` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767292-767302](../../../../../../../../reference/runtime/host-main.cjs#L767292-L767302) | 5 | 0 | 1 | 3 | 1 | 0 |
| [evaluation:562811-562821](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562811-L562821) | 5 | 0 | 1 | 3 | 1 | 0 |

### host:767292

Calls written directly in this body: `liveBrowserHost`, `new SandToolInputError`, `parseSecureValueHttpsSite`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `2eeb3b86e994b3bbe0a44395cf4978a3b1564ac79136e33c9499ca0f97be7f87`.

### evaluation:562811

Calls written directly in this body: `liveBrowserHost`, `new SandToolInputError`, `parseSecureValueHttpsSite`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `2eeb3b86e994b3bbe0a44395cf4978a3b1564ac79136e33c9499ca0f97be7f87`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
