# `parseStoredAutomationConfig`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-file-format.ts` · [Module README](../../../../../modules/core/automations/automation-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716497-716531](../../../../../../reference/runtime/host-main.cjs#L716497-L716531) | `FunctionDeclaration` | no | `raw, fallbackCreatedAt` |
| [evaluation:627211-627245](../../../../../../reference/runtime/sand-eval-runner.cjs#L627211-L627245) | `FunctionDeclaration` | no | `raw, fallbackCreatedAt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716497-716531](../../../../../../reference/runtime/host-main.cjs#L716497-L716531) | 8 | 0 | 0 | 4 | 0 | 1 |
| [evaluation:627211-627245](../../../../../../reference/runtime/sand-eval-runner.cjs#L627211-L627245) | 8 | 0 | 0 | 4 | 0 | 1 |

### host:716497

Calls written directly in this body: `JSON.parse`, `Math.min`, `Number.isFinite`, `clampAutomationName`, `normalizeAutomationPrompt`, `parseAutomationNoticeIds`, `parseStoredConfigTrigger`, `parseStoredProvenance`, `parseStoredSessionId`, `parseTriggerPresentation`.

Assignment or increment targets: `json3`.

SHA-256 of the source span: `8bce0c6b25183218ff0dfc0e3848bd31c0830d965233362f676a0ca5aa9d61d4`.

### evaluation:627211

Calls written directly in this body: `JSON.parse`, `Math.min`, `Number.isFinite`, `clampAutomationName`, `normalizeAutomationPrompt`, `parseAutomationNoticeIds`, `parseStoredConfigTrigger`, `parseStoredProvenance`, `parseStoredSessionId`, `parseTriggerPresentation`.

Assignment or increment targets: `json3`.

SHA-256 of the source span: `144405cfee8b4d1d0e630750a2820c6e494bcc8546d0c5f395fafa9aaef633ec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
