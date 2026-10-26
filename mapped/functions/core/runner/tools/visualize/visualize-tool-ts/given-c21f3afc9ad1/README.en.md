# `given`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/visualize/visualize-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/visualize/visualize-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768441-768443](../../../../../../../../reference/runtime/host-main.cjs#L768441-L768443) | `FunctionDeclaration` | no | `value` |
| [evaluation:563956-563958](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563956-L563958) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768441-768443](../../../../../../../../reference/runtime/host-main.cjs#L768441-L768443) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563956-563958](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563956-L563958) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768441

Calls written directly in this body: `value.trim`.

SHA-256 of the source span: `c3fdb309fca0a44b5b027cf1fd678f93d4e136b9ac79c9bbe2e5946b90fdd59f`.

### evaluation:563956

Calls written directly in this body: `value.trim`.

SHA-256 of the source span: `c3fdb309fca0a44b5b027cf1fd678f93d4e136b9ac79c9bbe2e5946b90fdd59f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
