# `resolveAttachmentPaths`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-email-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-email-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764334-764350](../../../../../../../reference/runtime/host-main.cjs#L764334-L764350) | `FunctionDeclaration` | não | `attachments, agentDir` |
| [evaluation:557702-557718](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557702-L557718) | `FunctionDeclaration` | não | `attachments, agentDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764334-764350](../../../../../../../reference/runtime/host-main.cjs#L764334-L764350) | 4 | 1 | 0 | 2 | 2 | 0 |
| [evaluation:557702-557718](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557702-L557718) | 4 | 1 | 0 | 2 | 2 | 0 |

### host:764334

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `new SandToolInputError`, `resolveSandEmailAttachmentPath`, `resolved.includes`, `resolved.push`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `1caef00c14a339bc1ab1c3b78598e63e2c3c1c4f46282af8d58eee0ea4d3b5fa`.

### evaluation:557702

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `new SandToolInputError`, `resolveSandEmailAttachmentPath`, `resolved.includes`, `resolved.push`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `1caef00c14a339bc1ab1c3b78598e63e2c3c1c4f46282af8d58eee0ea4d3b5fa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
