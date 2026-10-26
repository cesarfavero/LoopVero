# `renderEmailAttachmentText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/read-email-attachment-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/read-email-attachment-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764943-764956](../../../../../../../reference/runtime/host-main.cjs#L764943-L764956) | `FunctionDeclaration` | no | `attachment, text3, truncated` |
| [evaluation:558311-558324](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558311-L558324) | `FunctionDeclaration` | no | `attachment, text3, truncated` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764943-764956](../../../../../../../reference/runtime/host-main.cjs#L764943-L764956) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558311-558324](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558311-L558324) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:764943

Calls written directly in this body: `Math.round`, `describe3`, `lines2.join`, `lines2.push`, `text3.trimEnd`.

SHA-256 of the source span: `fd31157ebc774729ab9925631422bf9acc272d92d31083d0788487d34cf4a16b`.

### evaluation:558311

Calls written directly in this body: `Math.round`, `describe3`, `lines2.join`, `lines2.push`, `text3.trimEnd`.

SHA-256 of the source span: `fd31157ebc774729ab9925631422bf9acc272d92d31083d0788487d34cf4a16b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
