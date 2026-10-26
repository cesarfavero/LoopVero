# `installOnePasswordExtension`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-extension-install.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-extension-install-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:551265-551393](../../../../../../../reference/runtime/host-main.cjs#L551265-L551393) | `FunctionDeclaration` | yes | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551265-551393](../../../../../../../reference/runtime/host-main.cjs#L551265-L551393) | 7 | 0 | 19 | 9 | 1 | 7 |

### host:551265

Calls written directly in this body: `SHA256_HEX.test`, `URL.canParse`, `defaultPackCommand`, `downloadDeadline.run`, `errorLogTag`, `failed2`, `installedSource`, `installedVersion`, `new OnePasswordExtensionInstallError`, `options2.log`, `packDeadline.run`, `readInstallFile`, `requestDeadline.run`.

Assignment or increment targets: `download`, `installedDigest`, `work`.

Explicit throw targets: `OnePasswordExtensionInstallError`.

SHA-256 of the source span: `7df82d075b6a80c5dac491d5533a6670fffad87d48cac84cbcd87a8c8100861d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
