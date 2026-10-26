# `resolveSandLimitError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512582-512591](../../../../../../reference/runtime/host-main.cjs#L512582-L512591) | `FunctionDeclaration` | no | `detailed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512582-512591](../../../../../../reference/runtime/host-main.cjs#L512582-L512591) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:512582

Calls written directly in this body: `.flatMap`, `.join`.

SHA-256 of the source span: `8ef2aa462acb22bc9dc200fdc04fbd408d23a4f21363e783aefb0cee7aa34e4f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
