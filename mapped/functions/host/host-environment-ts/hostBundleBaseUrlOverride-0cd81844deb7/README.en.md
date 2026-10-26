# `hostBundleBaseUrlOverride`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-environment.ts` · [Module README](../../../../modules/host/host-environment-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494109-494111](../../../../../reference/runtime/host-main.cjs#L494109-L494111) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494109-494111](../../../../../reference/runtime/host-main.cjs#L494109-L494111) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494109

Calls written directly in this body: `.replace`, `trimmedNonEmpty`.

SHA-256 of the source span: `ad7ae7a5b22ba755e79baa22f41fc9e3a0609e45fa0a44917e3bcd891be646bb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
