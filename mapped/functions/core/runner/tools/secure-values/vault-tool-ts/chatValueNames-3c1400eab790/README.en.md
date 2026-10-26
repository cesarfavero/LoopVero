# `chatValueNames`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/vault-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767886-767890](../../../../../../../../reference/runtime/host-main.cjs#L767886-L767890) | `FunctionDeclaration` | yes | `deps` |
| [evaluation:563402-563406](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563402-L563406) | `FunctionDeclaration` | yes | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767886-767890](../../../../../../../../reference/runtime/host-main.cjs#L767886-L767890) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:563402-563406](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563402-L563406) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:767886

Calls written directly in this body: `.map`, `.toSorted`, `deps.secureValues.listMetadata`, `metadata2.filter`.

SHA-256 of the source span: `10fb4b267808ab6be4e9869d830151a9c77433602fcee137cd6c6f32d89cda1b`.

### evaluation:563402

Calls written directly in this body: `.map`, `.toSorted`, `deps.secureValues.listMetadata`, `metadata2.filter`.

SHA-256 of the source span: `92395c47ff7005d071fceb07d765ab825d3ffe1782a32972a9e80f6a0787bde6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
