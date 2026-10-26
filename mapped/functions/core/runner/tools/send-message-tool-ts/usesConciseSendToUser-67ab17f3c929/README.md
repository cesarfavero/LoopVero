# `usesConciseSendToUser`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761195-761197](../../../../../../../reference/runtime/host-main.cjs#L761195-L761197) | `FunctionDeclaration` | não | `deps` |
| [evaluation:552010-552012](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552010-L552012) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761195-761197](../../../../../../../reference/runtime/host-main.cjs#L761195-L761197) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:552010-552012](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552010-L552012) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761195

Chamadas escritas diretamente neste corpo: `deps.systemPromptHasSendToUserPolicy`.

SHA-256 do trecho: `4b99437dccec16ea82a37612a372283f93c921bc98ff099af8881d81d63f81ba`.

### evaluation:552010

Chamadas escritas diretamente neste corpo: `deps.systemPromptHasSendToUserPolicy`.

SHA-256 do trecho: `4b99437dccec16ea82a37612a372283f93c921bc98ff099af8881d81d63f81ba`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
