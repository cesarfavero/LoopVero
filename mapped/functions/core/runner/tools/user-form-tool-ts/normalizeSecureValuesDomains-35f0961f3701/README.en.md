# `normalizeSecureValuesDomains`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726514-726526](../../../../../../../reference/runtime/host-main.cjs#L726514-L726526) | `FunctionDeclaration` | no | `rawDomains` |
| [evaluation:561129-561141](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561129-L561141) | `FunctionDeclaration` | no | `rawDomains` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726514-726526](../../../../../../../reference/runtime/host-main.cjs#L726514-L726526) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:561129-561141](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561129-L561141) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726514

Calls written directly in this body: `new Set`, `rawDomains.map`.

SHA-256 of the source span: `cc75962f7ac258be7dfa8675ca7f1c6e86750b40c644a30038ddc32e5797d635`.

### evaluation:561129

Calls written directly in this body: `new Set`, `rawDomains.map`.

SHA-256 of the source span: `cc75962f7ac258be7dfa8675ca7f1c6e86750b40c644a30038ddc32e5797d635`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
