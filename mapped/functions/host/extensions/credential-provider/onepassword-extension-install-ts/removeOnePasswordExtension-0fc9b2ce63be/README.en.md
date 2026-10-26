# `removeOnePasswordExtension`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-extension-install.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-extension-install-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:551398-551428](../../../../../../../reference/runtime/host-main.cjs#L551398-L551428) | `FunctionDeclaration` | yes | `log5, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551398-551428](../../../../../../../reference/runtime/host-main.cjs#L551398-L551428) | 2 | 1 | 3 | 1 | 0 | 3 |

### host:551398

Calls written directly in this body: `errorLogTag`, `findSystemErrno`, `log5`, `refused4.push`, `sudoDeadline.run`.

SHA-256 of the source span: `fc3b1d2781230d9ba0d7be1b49668861fa7b5266b8e6cc1b4ec33c9c678c7529`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
