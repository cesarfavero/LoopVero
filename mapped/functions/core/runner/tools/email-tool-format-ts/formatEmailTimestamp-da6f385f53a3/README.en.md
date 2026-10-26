# `formatEmailTimestamp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-tool-format.ts` · [Module README](../../../../../../modules/core/runner/tools/email-tool-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764148-764151](../../../../../../../reference/runtime/host-main.cjs#L764148-L764151) | `FunctionDeclaration` | no | `ms2` |
| [evaluation:557519-557522](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557519-L557522) | `FunctionDeclaration` | no | `ms2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764148-764151](../../../../../../../reference/runtime/host-main.cjs#L764148-L764151) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:557519-557522](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557519-L557522) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:764148

Calls written directly in this body: `.replace`, `.toISOString`, `Number.isFinite`, `new Date`.

SHA-256 of the source span: `0d63f5dd0b5c5466c06d5095bb102a94b5c7b3c277005e8384b073f0267732f5`.

### evaluation:557519

Calls written directly in this body: `.replace`, `.toISOString`, `Number.isFinite`, `new Date`.

SHA-256 of the source span: `0d63f5dd0b5c5466c06d5095bb102a94b5c7b3c277005e8384b073f0267732f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
