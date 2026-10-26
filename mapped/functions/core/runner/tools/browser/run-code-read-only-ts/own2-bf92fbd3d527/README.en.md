# `own2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:749665-749667](../../../../../../../../reference/runtime/host-main.cjs#L749665-L749667) | `FunctionDeclaration` | no | `table, key` |
| [evaluation:522516-522518](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522516-L522518) | `FunctionDeclaration` | no | `table, key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749665-749667](../../../../../../../../reference/runtime/host-main.cjs#L749665-L749667) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:522516-522518](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522516-L522518) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:749665

Calls written directly in this body: `Object.hasOwn`.

SHA-256 of the source span: `427de16b952deec39092097011e84afeabe251dd1efb1255664768a438dbee97`.

### evaluation:522516

Calls written directly in this body: `Object.hasOwn`.

SHA-256 of the source span: `427de16b952deec39092097011e84afeabe251dd1efb1255664768a438dbee97`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
