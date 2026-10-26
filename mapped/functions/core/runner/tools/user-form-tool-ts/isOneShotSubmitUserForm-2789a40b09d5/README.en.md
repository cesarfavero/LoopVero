# `isOneShotSubmitUserForm`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726265-726267](../../../../../../../reference/runtime/host-main.cjs#L726265-L726267) | `FunctionDeclaration` | no | `form` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726265-726267](../../../../../../../reference/runtime/host-main.cjs#L726265-L726267) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726265

Calls written directly in this body: `form.fields.filter`, `form.fields.some`.

SHA-256 of the source span: `a35327682b7c9a46fa7fd46d7013673042f79340d91a629081b3d15590713cd7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
