# `sha256OfFd`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498566-498572](../../../../../../../reference/runtime/host-main.cjs#L498566-L498572) | `FunctionDeclaration` | yes | `fd` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498566-498572](../../../../../../../reference/runtime/host-main.cjs#L498566-L498572) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:498566

Calls written directly in this body: `hash2.digest`, `hash2.update`.

SHA-256 of the source span: `ef0414ec069423999438dcf2af621eced5397e4d7bdded982464a22324b7a42d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
