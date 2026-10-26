# `templateLink`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/bot-templates/search-bot-templates-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/bot-templates/search-bot-templates-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770831-770834](../../../../../../../../reference/runtime/host-main.cjs#L770831-L770834) | `FunctionDeclaration` | no | `template` |
| [evaluation:569926-569929](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569926-L569929) | `FunctionDeclaration` | no | `template` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770831-770834](../../../../../../../../reference/runtime/host-main.cjs#L770831-L770834) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:569926-569929](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569926-L569929) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:770831

Calls written directly in this body: `buildSandBotTemplateDeepLinkUrl`.

SHA-256 of the source span: `2ad2c57b8cc038ebace51a1d1635d05c216aa6895d52230b31fdbd1f9e50023f`.

### evaluation:569926

Calls written directly in this body: `buildSandBotTemplateDeepLinkUrl`.

SHA-256 of the source span: `2ad2c57b8cc038ebace51a1d1635d05c216aa6895d52230b31fdbd1f9e50023f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
