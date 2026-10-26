# `getRetryDirective`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/error-handling.js` · [Module README](../../../../modules/agent-summarization/error-handling-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620211-620388](../../../../../reference/runtime/host-main.cjs#L620211-L620388) | `FunctionDeclaration` | no | `error64, options2` |
| [evaluation:304565-304742](../../../../../reference/runtime/sand-eval-runner.cjs#L304565-L304742) | `FunctionDeclaration` | no | `error63, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620211-620388](../../../../../reference/runtime/host-main.cjs#L620211-L620388) | 20 | 0 | 0 | 19 | 0 | 0 |
| [evaluation:304565-304742](../../../../../reference/runtime/sand-eval-runner.cjs#L304565-L304742) | 20 | 0 | 0 | 19 | 0 | 0 |

### host:620211

Calls written directly in this body: `hasConnectCode`, `hasErrorName`, `isHttpRateLimitError`, `isInvalidArgumentError`, `isInvalidJsonError`, `isTextFieldsTooLargeError`, `isUnsupportedRegionError`, `isUserApiKeyRateLimitExceededError`.

SHA-256 of the source span: `1c4d6cb953783a20699ef4497b8af9a5be1479484ecc4f719c849845cb558b13`.

### evaluation:304565

Calls written directly in this body: `hasConnectCode`, `hasErrorName`, `isHttpRateLimitError`, `isInvalidArgumentError`, `isInvalidJsonError`, `isTextFieldsTooLargeError`, `isUnsupportedRegionError`, `isUserApiKeyRateLimitExceededError`.

SHA-256 of the source span: `3f4e21da4368d7fa8a6e9b4647abf0ef8d9692990c2dd503865231093cd3bc83`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
