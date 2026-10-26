# `truncateChars`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616900-616909](../../../../../reference/runtime/host-main.cjs#L616900-L616909) | `FunctionDeclaration` | no | `text3, max, marker17` |
| [evaluation:285440-285449](../../../../../reference/runtime/sand-eval-runner.cjs#L285440-L285449) | `FunctionDeclaration` | no | `text3, max, marker17` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616900-616909](../../../../../reference/runtime/host-main.cjs#L616900-L616909) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:285440-285449](../../../../../reference/runtime/sand-eval-runner.cjs#L285440-L285449) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:616900

Calls written directly in this body: `text3.codePointAt`, `text3.slice`.

Assignment or increment targets: `count2`, `i`.

SHA-256 of the source span: `e306cf0ab036fec546c37af3361a957d3eac555986c023852c0a23d26c64a3fd`.

### evaluation:285440

Calls written directly in this body: `text3.codePointAt`, `text3.slice`.

Assignment or increment targets: `count2`, `i`.

SHA-256 of the source span: `e306cf0ab036fec546c37af3361a957d3eac555986c023852c0a23d26c64a3fd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
