# `elementOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only-allowlist.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-allowlist-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:749236-749238](../../../../../../../../reference/runtime/host-main.cjs#L749236-L749238) | `FunctionDeclaration` | no | `kind` |
| [evaluation:522087-522089](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522087-L522089) | `FunctionDeclaration` | no | `kind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749236-749238](../../../../../../../../reference/runtime/host-main.cjs#L749236-L749238) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:522087-522089](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522087-L522089) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:749236

Calls written directly in this body: `VALUE_KINDS.find`.

SHA-256 of the source span: `d419ef19a36014d21c99563827e435f87336ae6ff815411683068e1646ce1124`.

### evaluation:522087

Calls written directly in this body: `VALUE_KINDS.find`.

SHA-256 of the source span: `f257ac1b5e0951cc9ff702e4c757da19aa13ae8bca1be767e9b96cf6be7cba95`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
