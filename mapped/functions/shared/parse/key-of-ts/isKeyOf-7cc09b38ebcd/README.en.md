# `isKeyOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/parse/key-of.ts` · [Module README](../../../../../modules/shared/parse/key-of-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225910-225912](../../../../../../reference/runtime/host-main.cjs#L225910-L225912) | `FunctionDeclaration` | no | `table, key` |
| [evaluation:475113-475115](../../../../../../reference/runtime/sand-eval-runner.cjs#L475113-L475115) | `FunctionDeclaration` | no | `table, key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225910-225912](../../../../../../reference/runtime/host-main.cjs#L225910-L225912) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475113-475115](../../../../../../reference/runtime/sand-eval-runner.cjs#L475113-L475115) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225910

Calls written directly in this body: `Object.hasOwn`.

SHA-256 of the source span: `401a1efc212b7d3e7d1406a3a58cd110d761e6c2b7f2af962ee95e5a4d03fe25`.

### evaluation:475113

Calls written directly in this body: `Object.hasOwn`.

SHA-256 of the source span: `401a1efc212b7d3e7d1406a3a58cd110d761e6c2b7f2af962ee95e5a4d03fe25`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
