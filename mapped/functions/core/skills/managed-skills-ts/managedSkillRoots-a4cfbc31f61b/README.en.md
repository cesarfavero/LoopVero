# `managedSkillRoots`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `core/skills/managed-skills.ts` · [Module README](../../../../../modules/core/skills/managed-skills-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683963-683965](../../../../../../reference/runtime/host-main.cjs#L683963-L683965) | `FunctionDeclaration` | no | `dataRoots` |
| [evaluation:534346-534348](../../../../../../reference/runtime/sand-eval-runner.cjs#L534346-L534348) | `FunctionDeclaration` | no | `dataRoots` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683963-683965](../../../../../../reference/runtime/host-main.cjs#L683963-L683965) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:534346-534348](../../../../../../reference/runtime/sand-eval-runner.cjs#L534346-L534348) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:683963

Calls written directly in this body: `dataRoots.map`.

SHA-256 of the source span: `068ae5884ce0411af5d42abe5b0491bc2278c3b6a97db8ff327b41c36445f421`.

### evaluation:534346

Calls written directly in this body: `dataRoots.map`.

SHA-256 of the source span: `946651d87e438ea9f1250e4e6086177bba4c1d2f8d16c34b63e18baa72dc64dc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
