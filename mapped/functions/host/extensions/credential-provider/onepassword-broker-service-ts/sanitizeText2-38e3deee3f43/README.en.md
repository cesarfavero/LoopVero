# `sanitizeText2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550535-550537](../../../../../../../reference/runtime/host-main.cjs#L550535-L550537) | `FunctionDeclaration` | no | `value, maxLength` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550535-550537](../../../../../../../reference/runtime/host-main.cjs#L550535-L550537) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:550535

Calls written directly in this body: `.slice`, `.trim`, `value.replace`.

SHA-256 of the source span: `e1dc7ba23f826fd18179328f324c6b9b9d81a94409bac7d19c67c71f81322c9b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
