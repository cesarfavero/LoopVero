# `_MeetingRequestPrompt.firstWake`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/meetings/meeting-request-prompt.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-request-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754095-754098](../../../../../../reference/runtime/host-main.cjs#L754095-L754098) | `method` | não | `{ header, notes, wake }` |
| [evaluation:535891-535894](../../../../../../reference/runtime/sand-eval-runner.cjs#L535891-L535894) | `method` | não | `{ header, notes, wake }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754095-754098](../../../../../../reference/runtime/host-main.cjs#L754095-L754098) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:535891-535894](../../../../../../reference/runtime/sand-eval-runner.cjs#L535891-L535894) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:754095

Chamadas escritas diretamente neste corpo: `.join`.

SHA-256 do trecho: `b7b285dc06720368ecedd2f9615d9c512792c953234ba4bcb9f9b7e13eb7b1d6`.

### evaluation:535891

Chamadas escritas diretamente neste corpo: `.join`.

SHA-256 do trecho: `b7b285dc06720368ecedd2f9615d9c512792c953234ba4bcb9f9b7e13eb7b1d6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
