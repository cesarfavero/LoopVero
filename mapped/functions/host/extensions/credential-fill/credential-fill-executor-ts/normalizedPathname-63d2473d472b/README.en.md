# `normalizedPathname`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-fill/credential-fill-executor.ts` · [Module README](../../../../../../modules/host/extensions/credential-fill/credential-fill-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:544227-544235](../../../../../../../reference/runtime/host-main.cjs#L544227-L544235) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:544227-544235](../../../../../../../reference/runtime/host-main.cjs#L544227-L544235) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:544227

Calls written directly in this body: `new URL`, `raw.startsWith`, `url2.pathname.replace`.

SHA-256 of the source span: `abab863c58b1c44e44bc8113bbf9196932eaf1fa95534c953c6a2a950ad44c59`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
