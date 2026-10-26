# `resolvePromptArtifactsDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/shared.js` · [Module README](../../../../../modules/agent-engine/prompts/shared-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636141-636145](../../../../../../reference/runtime/host-main.cjs#L636141-L636145) | `FunctionDeclaration` | no | `props` |
| [evaluation:424197-424201](../../../../../../reference/runtime/sand-eval-runner.cjs#L424197-L424201) | `FunctionDeclaration` | no | `props` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636141-636145](../../../../../../reference/runtime/host-main.cjs#L636141-L636145) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424197-424201](../../../../../../reference/runtime/sand-eval-runner.cjs#L424197-L424201) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:636141

Calls written directly in this body: `normalizePromptArtifactsDir`, `props.env.artifactsFolder.trim`.

SHA-256 of the source span: `10bdbfce8d637da6185f0ed03cce7935a8f22c5533669992634f1018e997e394`.

### evaluation:424197

Calls written directly in this body: `normalizePromptArtifactsDir`, `props.env.artifactsFolder.trim`.

SHA-256 of the source span: `10bdbfce8d637da6185f0ed03cce7935a8f22c5533669992634f1018e997e394`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
