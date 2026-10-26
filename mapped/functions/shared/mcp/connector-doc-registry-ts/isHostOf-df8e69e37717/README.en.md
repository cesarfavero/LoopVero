# `isHostOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773963-773965](../../../../../../reference/runtime/host-main.cjs#L773963-L773965) | `FunctionDeclaration` | no | `hostname4, domain2` |
| [evaluation:573178-573180](../../../../../../reference/runtime/sand-eval-runner.cjs#L573178-L573180) | `FunctionDeclaration` | no | `hostname3, domain2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773963-773965](../../../../../../reference/runtime/host-main.cjs#L773963-L773965) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573178-573180](../../../../../../reference/runtime/sand-eval-runner.cjs#L573178-L573180) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:773963

Calls written directly in this body: `hostname4.endsWith`.

SHA-256 of the source span: `d278fabfb1ac2707e1abac7467ac467a3210321be1c07216c94ce3a3c614cb84`.

### evaluation:573178

Calls written directly in this body: `hostname3.endsWith`.

SHA-256 of the source span: `d9bbf2a6bc1713c805c9d1640ab389f9f8a94f8c7123ef9b299de1db14177dda`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
