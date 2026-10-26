# `fail2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:749609-749611](../../../../../../../../reference/runtime/host-main.cjs#L749609-L749611) | `FunctionDeclaration` | no | `reason = "unsupported_syntax"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749609-749611](../../../../../../../../reference/runtime/host-main.cjs#L749609-L749611) | 0 | 0 | 0 | 0 | 1 | 0 |

### host:749609

Calls written directly in this body: `new NotReadOnly`.

Explicit throw targets: `NotReadOnly`.

SHA-256 of the source span: `d646a665408494ca0adf042478ee69b4e19d8f21a74caa946562c70116f8b1cf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
