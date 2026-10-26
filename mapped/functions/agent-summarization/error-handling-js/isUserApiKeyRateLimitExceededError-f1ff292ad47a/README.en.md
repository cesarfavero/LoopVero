# `isUserApiKeyRateLimitExceededError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/error-handling.js` · [Module README](../../../../modules/agent-summarization/error-handling-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620172-620174](../../../../../reference/runtime/host-main.cjs#L620172-L620174) | `FunctionDeclaration` | no | `error64` |
| [evaluation:304526-304528](../../../../../reference/runtime/sand-eval-runner.cjs#L304526-L304528) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620172-620174](../../../../../reference/runtime/host-main.cjs#L620172-L620174) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304526-304528](../../../../../reference/runtime/sand-eval-runner.cjs#L304526-L304528) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620172

Calls written directly in this body: `errorMessageIncludes`.

SHA-256 of the source span: `6a762dde1f47094f724e6868a108b24015b27615e29e3f96d24a4688221e026e`.

### evaluation:304526

Calls written directly in this body: `errorMessageIncludes`.

SHA-256 of the source span: `c4cbe75c6ac7b2ff9894d40b3be43b6e12b14fb0146e29af12c5d19ee30465ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
