# `AgentStore2.getMetadata`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/isolation/README.md).

**Módulo:** `agent-kv/agent-store.js` · [README do módulo](../../../../modules/agent-kv/agent-store-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616227-616229](../../../../../reference/runtime/host-main.cjs#L616227-L616229) | `method` | não | `key` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616227-616229](../../../../../reference/runtime/host-main.cjs#L616227-L616229) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:616227

Chamadas escritas diretamente neste corpo: `this.metadataStore.get`.

SHA-256 do trecho: `8f8687e502cc87d7b1f05e7b8dd009eb26431a9b6c230a77f29c07727ba8c8d8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
