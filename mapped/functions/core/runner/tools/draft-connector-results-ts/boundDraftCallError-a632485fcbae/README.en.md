# `boundDraftCallError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732630-732632](../../../../../../../reference/runtime/host-main.cjs#L732630-L732632) | `FunctionDeclaration` | no | `text3` |
| [evaluation:540152-540154](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540152-L540154) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732630-732632](../../../../../../../reference/runtime/host-main.cjs#L732630-L732632) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540152-540154](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540152-L540154) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:732630

Calls written directly in this body: `text3.slice`.

SHA-256 of the source span: `ec1e6387903a5e0b3e03bd6f7ddd6db2b1da08fdb6a2974a1caaa75fffb1f736`.

### evaluation:540152

Calls written directly in this body: `text3.slice`.

SHA-256 of the source span: `ec1e6387903a5e0b3e03bd6f7ddd6db2b1da08fdb6a2974a1caaa75fffb1f736`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
