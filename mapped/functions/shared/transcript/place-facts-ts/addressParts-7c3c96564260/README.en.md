# `addressParts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/place-facts.ts` · [Module README](../../../../../modules/shared/transcript/place-facts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768731-768733](../../../../../../reference/runtime/host-main.cjs#L768731-L768733) | `FunctionDeclaration` | no | `address` |
| [evaluation:564242-564244](../../../../../../reference/runtime/sand-eval-runner.cjs#L564242-L564244) | `FunctionDeclaration` | no | `address` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768731-768733](../../../../../../reference/runtime/host-main.cjs#L768731-L768733) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564242-564244](../../../../../../reference/runtime/sand-eval-runner.cjs#L564242-L564244) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768731

Calls written directly in this body: `.filter`, `.map`, `.split`.

SHA-256 of the source span: `e02417850a4d0a9b7036e052be9c34baf44c55ce90a0ccae648067db4cfd1354`.

### evaluation:564242

Calls written directly in this body: `.filter`, `.map`, `.split`.

SHA-256 of the source span: `e02417850a4d0a9b7036e052be9c34baf44c55ce90a0ccae648067db4cfd1354`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
