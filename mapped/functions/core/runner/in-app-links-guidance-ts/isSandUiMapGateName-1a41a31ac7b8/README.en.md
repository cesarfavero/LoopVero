# `isSandUiMapGateName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/in-app-links-guidance.ts` · [Module README](../../../../../modules/core/runner/in-app-links-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557640-557642](../../../../../../reference/runtime/host-main.cjs#L557640-L557642) | `FunctionDeclaration` | no | `name18` |
| [evaluation:546087-546089](../../../../../../reference/runtime/sand-eval-runner.cjs#L546087-L546089) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557640-557642](../../../../../../reference/runtime/host-main.cjs#L557640-L557642) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546087-546089](../../../../../../reference/runtime/sand-eval-runner.cjs#L546087-L546089) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557640

Calls written directly in this body: `GATE_NAMES.has`.

SHA-256 of the source span: `79c616beed0b2b02e8eb0b9e211fed3e0f904389c582705b5bbf813c7f52b419`.

### evaluation:546087

Calls written directly in this body: `GATE_NAMES.has`.

SHA-256 of the source span: `79c616beed0b2b02e8eb0b9e211fed3e0f904389c582705b5bbf813c7f52b419`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
