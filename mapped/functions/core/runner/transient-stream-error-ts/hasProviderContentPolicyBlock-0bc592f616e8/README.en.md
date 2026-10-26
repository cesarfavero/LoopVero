# `hasProviderContentPolicyBlock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736244-736257](../../../../../../reference/runtime/host-main.cjs#L736244-L736257) | `FunctionDeclaration` | no | `error64, seen` |
| [evaluation:589925-589938](../../../../../../reference/runtime/sand-eval-runner.cjs#L589925-L589938) | `FunctionDeclaration` | no | `error63, seen` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736244-736257](../../../../../../reference/runtime/host-main.cjs#L736244-L736257) | 5 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:589925-589938](../../../../../../reference/runtime/sand-eval-runner.cjs#L589925-L589938) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:736244

Calls written directly in this body: `Array.isArray`, `SERVER_PROVIDER_CONTENT_POLICY_BLOCK_ERROR_NAMES.has`, `fields3.errors.some`, `hasProviderContentPolicyBlock`, `seen.add`, `seen.has`.

SHA-256 of the source span: `26e6045a0146088daea8f6c40bf343df4a323d6e067bf2dbc71f138b10be251d`.

### evaluation:589925

Calls written directly in this body: `Array.isArray`, `SERVER_PROVIDER_CONTENT_POLICY_BLOCK_ERROR_NAMES.has`, `fields3.errors.some`, `hasProviderContentPolicyBlock`, `seen.add`, `seen.has`.

SHA-256 of the source span: `8087ae25f08489ebe5cc037205850d6ba9de35be2662cbb7bc18f0061fde7a64`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
