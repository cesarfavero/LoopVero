# `getRuleDir2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639864-639878](../../../../../../reference/runtime/host-main.cjs#L639864-L639878) | `FunctionDeclaration` | no | `mdcPath` |
| [evaluation:430478-430492](../../../../../../reference/runtime/sand-eval-runner.cjs#L430478-L430492) | `FunctionDeclaration` | no | `mdcPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639864-639878](../../../../../../reference/runtime/host-main.cjs#L639864-L639878) | 2 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:430478-430492](../../../../../../reference/runtime/sand-eval-runner.cjs#L430478-L430492) | 2 | 1 | 0 | 3 | 0 | 0 |

### host:639864

Calls written directly in this body: `literalRuleDir.split`, `normalizeToUnixPath`, `parentSegments.join`, `segments.slice`.

Assignment or increment targets: `i`.

SHA-256 of the source span: `80366687dd814823b70e1517613882fca2c782946355f40ef310424418b93900`.

### evaluation:430478

Calls written directly in this body: `literalRuleDir.split`, `normalizeToUnixPath`, `parentSegments.join`, `segments.slice`.

Assignment or increment targets: `i`.

SHA-256 of the source span: `3002c88df8667d8500927cd86a47ee3883805fb52fbab99815afe24c7a1aae68`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
