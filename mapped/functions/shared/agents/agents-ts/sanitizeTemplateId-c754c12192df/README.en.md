# `sanitizeTemplateId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/agents.ts` · [Module README](../../../../../modules/shared/agents/agents-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485332-485334](../../../../../../reference/runtime/host-main.cjs#L485332-L485334) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485332-485334](../../../../../../reference/runtime/host-main.cjs#L485332-L485334) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:485332

Calls written directly in this body: `TEMPLATE_ID_PATTERN.test`.

SHA-256 of the source span: `dc6d9fe8368679c07693c8bcc2365550d8e983fd8c1c8cd2444ca0a24ddc7886`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
