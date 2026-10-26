# `installOnePasswordExtension/failed2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-extension-install.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-extension-install-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:551287-551301](../../../../../../../reference/runtime/host-main.cjs#L551287-L551301) | `ArrowFunctionExpression` | yes | `stage, error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551287-551301](../../../../../../../reference/runtime/host-main.cjs#L551287-L551301) | 1 | 0 | 2 | 1 | 0 | 1 |

### host:551287

Calls written directly in this body: `errorLogTag`, `options2.log`, `packFailureDetail`, `readInstallFile`.

Assignment or increment targets: `previousInstall`.

SHA-256 of the source span: `48c095893e2586e84d90d5bba3a761b0bd0877dd4658f091e3cf74b67a35037b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
