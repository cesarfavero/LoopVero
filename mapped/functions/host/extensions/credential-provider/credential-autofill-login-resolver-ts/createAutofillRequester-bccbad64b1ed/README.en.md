# `createAutofillRequester`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/credential-autofill-login-resolver.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/credential-autofill-login-resolver-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:548280-548319](../../../../../../../reference/runtime/host-main.cjs#L548280-L548319) | `FunctionDeclaration` | no | `options2, route, resultSchema, defaultTimeoutMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548280-548319](../../../../../../../reference/runtime/host-main.cjs#L548280-L548319) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:548280

Calls written directly in this body: `createDeadlinePolicy`.

SHA-256 of the source span: `d407aaa7143707650a3f3a2952cbed68dad0819e5b6c0326a246f691d36ea229`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
