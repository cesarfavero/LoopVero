# `normalizedHostname2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/credential-domain.ts` · [Module README](../../../../../modules/core/runner/credential-domain-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546789-546791](../../../../../../reference/runtime/host-main.cjs#L546789-L546791) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546789-546791](../../../../../../reference/runtime/host-main.cjs#L546789-L546791) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:546789

Calls written directly in this body: `.replace`, `url2.hostname.toLowerCase`.

SHA-256 of the source span: `45d99d6434152b6e0777c2f5aee4fb62b536eb0a7df5f24a692bdced5a3d6200`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
