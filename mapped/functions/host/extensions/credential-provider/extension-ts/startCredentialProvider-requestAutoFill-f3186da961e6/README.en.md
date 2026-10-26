# `startCredentialProvider/requestAutoFill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/extension.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:551757-551794](../../../../../../../reference/runtime/host-main.cjs#L551757-L551794) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551757-551794](../../../../../../../reference/runtime/host-main.cjs#L551757-L551794) | 2 | 0 | 1 | 4 | 0 | 1 |

### host:551757

Calls written directly in this body: `auditRequest`, `context2.host.log`, `errorLogTag`, `requestAutoFillOnBackend`.

Assignment or increment targets: `decision`.

SHA-256 of the source span: `837ffeaa58bcf4b3ea75550759b9f6dbfea8741111ed8bbc90e7d8cc3539338a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
