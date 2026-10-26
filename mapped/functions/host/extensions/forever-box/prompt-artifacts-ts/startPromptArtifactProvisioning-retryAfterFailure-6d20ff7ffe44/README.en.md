# `startPromptArtifactProvisioning/retryAfterFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `host/extensions/forever-box/prompt-artifacts.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/prompt-artifacts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680812-680836](../../../../../../../reference/runtime/host-main.cjs#L680812-L680836) | `ArrowFunctionExpression` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680812-680836](../../../../../../../reference/runtime/host-main.cjs#L680812-L680836) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:680812

Calls written directly in this body: `Math.round`, `clearRetry`, `delay5.elapsed.then`, `deps.log`, `errorMessage`, `retry2.schedule`.

Assignment or increment targets: `failures2`, `pendingRetry`.

SHA-256 of the source span: `8d53d9e670e65abca494c86397ed937b08ce9633904a85daa07e1808f29b06d7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
