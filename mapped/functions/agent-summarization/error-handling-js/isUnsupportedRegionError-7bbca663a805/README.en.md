# `isUnsupportedRegionError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/error-handling.js` · [Module README](../../../../modules/agent-summarization/error-handling-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620169-620171](../../../../../reference/runtime/host-main.cjs#L620169-L620171) | `FunctionDeclaration` | no | `error64` |
| [evaluation:304523-304525](../../../../../reference/runtime/sand-eval-runner.cjs#L304523-L304525) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620169-620171](../../../../../reference/runtime/host-main.cjs#L620169-L620171) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304523-304525](../../../../../reference/runtime/sand-eval-runner.cjs#L304523-L304525) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620169

Calls written directly in this body: `errorTextIncludes`.

SHA-256 of the source span: `e1c2a8450ccf4ed2032967964406deb1045ecd677d4430d703079e08d1d4c540`.

### evaluation:304523

Calls written directly in this body: `errorTextIncludes`.

SHA-256 of the source span: `b3de1773f8650fc6915d93beb258f8fe9f99944bddea486cca316f0842af809a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
