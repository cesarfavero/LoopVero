# `CloudAgentCompletionPoller.awaitCompletion`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/cloud-agents/cloud-agent-poll-loop.ts` · [README do módulo](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-poll-loop-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:513684-513784](../../../../../../../reference/runtime/host-main.cjs#L513684-L513784) | `method` | sim | `bcId, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513684-513784](../../../../../../../reference/runtime/host-main.cjs#L513684-L513784) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:513684

Chamadas escritas diretamente neste corpo: `new Promise`, `this.getClient`, `this.options.clock.monotonicNow`.

SHA-256 do trecho: `ce7a1077b5f18f7a46f951abfd4893f0a356939e22e993b22daeac53efd43dff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
