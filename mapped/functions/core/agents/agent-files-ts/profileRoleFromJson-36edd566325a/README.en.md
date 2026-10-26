# `profileRoleFromJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/agents/agent-files.ts` · [Module README](../../../../../modules/core/agents/agent-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490831-490835](../../../../../../reference/runtime/host-main.cjs#L490831-L490835) | `FunctionDeclaration` | no | `parsed2` |
| [evaluation:629042-629046](../../../../../../reference/runtime/sand-eval-runner.cjs#L629042-L629046) | `FunctionDeclaration` | no | `parsed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490831-490835](../../../../../../reference/runtime/host-main.cjs#L490831-L490835) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:629042-629046](../../../../../../reference/runtime/sand-eval-runner.cjs#L629042-L629046) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:490831

Calls written directly in this body: `parsed2.role.trim`.

SHA-256 of the source span: `6437a57f4067c1e9e6ac39cae632d5d92eb73e8d4e67cd4b56d3533ecc54be0b`.

### evaluation:629042

Calls written directly in this body: `parsed.role.trim`.

SHA-256 of the source span: `91510ff7a6f0a9685d8b77af69bfaa6b677222ea13bd28059c64f101b7c31351`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
