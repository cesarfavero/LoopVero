# `unescapeName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/user-form-playwright-context.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/user-form-playwright-context-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767393-767400](../../../../../../../../reference/runtime/host-main.cjs#L767393-L767400) | `FunctionDeclaration` | no | `raw` |
| [evaluation:562910-562917](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562910-L562917) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767393-767400](../../../../../../../../reference/runtime/host-main.cjs#L767393-L767400) | 1 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:562910-562917](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562910-L562917) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:767393

Calls written directly in this body: `JSON.parse`.

SHA-256 of the source span: `4363fe31a8092149895f89869ae4207abb11416090307498de4585bd623b15e4`.

### evaluation:562910

Calls written directly in this body: `JSON.parse`.

SHA-256 of the source span: `5df5169b76edfbf22893ca6ad79e03f454a752afce3006539597a0087030681a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
