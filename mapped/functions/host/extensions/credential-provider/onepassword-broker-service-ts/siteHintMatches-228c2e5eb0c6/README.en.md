# `siteHintMatches`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550266-550276](../../../../../../../reference/runtime/host-main.cjs#L550266-L550276) | `FunctionDeclaration` | no | `{   siteHint,   pageUrl }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550266-550276](../../../../../../../reference/runtime/host-main.cjs#L550266-L550276) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:550266

Calls written directly in this body: `URL.canParse`, `new URL`.

SHA-256 of the source span: `16da6886f523da4cd4be7d7d36a1fd32b7e90995152fb8e773b5c5b868ce60bc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
