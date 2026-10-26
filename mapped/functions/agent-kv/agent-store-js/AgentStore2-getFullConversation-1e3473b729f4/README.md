# `AgentStore2.getFullConversation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/isolation/README.md).

**Módulo:** `agent-kv/agent-store.js` · [README do módulo](../../../../modules/agent-kv/agent-store-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616257-616259](../../../../../reference/runtime/host-main.cjs#L616257-L616259) | `method` | sim | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616257-616259](../../../../../reference/runtime/host-main.cjs#L616257-L616259) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:616257

Chamadas escritas diretamente neste corpo: `this.deserializeConversationStateStructure`.

SHA-256 do trecho: `380f94a4e58c7fa4b424b16c4c7d9dde30c4c5f62c7a166a0b7791ade0796cb1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
