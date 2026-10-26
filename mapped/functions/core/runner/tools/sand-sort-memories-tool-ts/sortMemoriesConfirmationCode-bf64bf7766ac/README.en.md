# `sortMemoriesConfirmationCode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-sort-memories-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-sort-memories-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754200-754206](../../../../../../../reference/runtime/host-main.cjs#L754200-L754206) | `FunctionDeclaration` | no | `{   toTeam,   toPrivate }` |
| [evaluation:536668-536674](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536668-L536674) | `FunctionDeclaration` | no | `{   toTeam,   toPrivate }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754200-754206](../../../../../../../reference/runtime/host-main.cjs#L754200-L754206) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:536668-536674](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536668-L536674) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754200

Calls written directly in this body: `.digest`, `.slice`, `.update`, `JSON.stringify`, `ids`.

SHA-256 of the source span: `17be4088ceb2b04576ad9b7c35405ddf63a3461f4f8381963ca6318a22a6e756`.

### evaluation:536668

Calls written directly in this body: `.digest`, `.slice`, `.update`, `JSON.stringify`, `ids`.

SHA-256 of the source span: `55ea82eb8a95344f6f3f2fc16d62a96ef946c9f4a16ce2fb6529186ae50ae484`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
