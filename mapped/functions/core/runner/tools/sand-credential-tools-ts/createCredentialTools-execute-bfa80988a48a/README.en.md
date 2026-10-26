# `createCredentialTools/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751900-751917](../../../../../../../reference/runtime/host-main.cjs#L751900-L751917) | `ArrowFunctionExpression` | yes | `ctx, args, deps` |
| [evaluation:524966-524983](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524966-L524983) | `ArrowFunctionExpression` | yes | `ctx, args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751900-751917](../../../../../../../reference/runtime/host-main.cjs#L751900-L751917) | 8 | 0 | 3 | 5 | 0 | 0 |
| [evaluation:524966-524983](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524966-L524983) | 8 | 0 | 3 | 5 | 0 | 0 |

### host:751900

Calls written directly in this body: `checkSavedLogins`, `deps.countSecureValueSavedLogins`, `deps.hasSecureValueSavedLogins`, `listCredentialsForSite`, `mentionableListing`, `noteToolTargetHost`, `sandCredentialTurnRefusalPhrase`.

SHA-256 of the source span: `581842074a300f7d593ba8f81027aaf0d85904293fe68270a65b586b24bb85e6`.

### evaluation:524966

Calls written directly in this body: `checkSavedLogins`, `deps.countSecureValueSavedLogins`, `deps.hasSecureValueSavedLogins`, `listCredentialsForSite`, `mentionableListing`, `noteToolTargetHost`, `sandCredentialTurnRefusalPhrase`.

SHA-256 of the source span: `581842074a300f7d593ba8f81027aaf0d85904293fe68270a65b586b24bb85e6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
