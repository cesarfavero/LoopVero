# `parseProfileJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/agents/agent-files.ts` · [Module README](../../../../../modules/core/agents/agent-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490803-490812](../../../../../../reference/runtime/host-main.cjs#L490803-L490812) | `FunctionDeclaration` | no | `raw` |
| [evaluation:629014-629023](../../../../../../reference/runtime/sand-eval-runner.cjs#L629014-L629023) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490803-490812](../../../../../../reference/runtime/host-main.cjs#L490803-L490812) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:629014-629023](../../../../../../reference/runtime/sand-eval-runner.cjs#L629014-L629023) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:490803

Calls written directly in this body: `JSON.parse`.

Assignment or increment targets: `parsed2`.

SHA-256 of the source span: `82e07ab6ecfc4b6960578f25e5cd8fc3e71cf7650d0c7e46a8c4b37a42da8093`.

### evaluation:629014

Calls written directly in this body: `JSON.parse`.

Assignment or increment targets: `parsed`.

SHA-256 of the source span: `9a7b1da50c49d874679b3ca5213d23e9cbeb3087f2ed5a2c5551513081226c09`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
