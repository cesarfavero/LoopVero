# `sendingAddressOwnership`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/email/email-subaddress.ts` · [Module README](../../../../../modules/core/email/email-subaddress-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715984-715992](../../../../../../reference/runtime/host-main.cjs#L715984-L715992) | `FunctionDeclaration` | no | `address, ownedInboxes2` |
| [evaluation:527653-527661](../../../../../../reference/runtime/sand-eval-runner.cjs#L527653-L527661) | `FunctionDeclaration` | no | `address, ownedInboxes2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715984-715992](../../../../../../reference/runtime/host-main.cjs#L715984-L715992) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:527653-527661](../../../../../../reference/runtime/sand-eval-runner.cjs#L527653-L527661) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:715984

Calls written directly in this body: `address.toLowerCase`, `emailSubaddressBase`, `owned.includes`, `ownedInboxes2.map`, `unsendableSubaddressReason`.

SHA-256 of the source span: `84fd1f10248f519c2d1333bbf6b3fef79435f32db53888118d05bb26eb512706`.

### evaluation:527653

Calls written directly in this body: `address.toLowerCase`, `emailSubaddressBase`, `owned.includes`, `ownedInboxes2.map`, `unsendableSubaddressReason`.

SHA-256 of the source span: `84fd1f10248f519c2d1333bbf6b3fef79435f32db53888118d05bb26eb512706`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
