# `isTextFieldsTooLargeError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/error-handling.js` · [Module README](../../../../modules/agent-summarization/error-handling-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620160-620162](../../../../../reference/runtime/host-main.cjs#L620160-L620162) | `FunctionDeclaration` | no | `error64` |
| [evaluation:304514-304516](../../../../../reference/runtime/sand-eval-runner.cjs#L304514-L304516) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620160-620162](../../../../../reference/runtime/host-main.cjs#L620160-L620162) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304514-304516](../../../../../reference/runtime/sand-eval-runner.cjs#L304514-L304516) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620160

Calls written directly in this body: `errorTextIncludes`.

SHA-256 of the source span: `48b3e430e67a831b8243187990c51a6615baaec0cd3ec9b894681b610bf694d5`.

### evaluation:304514

Calls written directly in this body: `errorTextIncludes`.

SHA-256 of the source span: `cc9a0535e2bb768fb5fb01eb2153fb7bb2cdec313c193bbfc33482ae55dfe3e5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
