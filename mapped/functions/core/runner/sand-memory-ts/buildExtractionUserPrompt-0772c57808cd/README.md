# `buildExtractionUserPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/sand-memory.ts` · [README do módulo](../../../../../modules/core/runner/sand-memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:536198-536213](../../../../../../reference/runtime/sand-eval-runner.cjs#L536198-L536213) | `FunctionDeclaration` | não | `userMessage, agentMessage, existingMemories, earlierExchanges, today` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536198-536213](../../../../../../reference/runtime/sand-eval-runner.cjs#L536198-L536213) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:536198

Chamadas escritas diretamente neste corpo: `.join`, `earlierExchanges.flatMap`, `exchangeLines`, `existingMemories.map`.

SHA-256 do trecho: `a0afdfb7569fc7edc51b78c636c51765e5f5c6308194babb33e1ad1bfa51ba0c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
