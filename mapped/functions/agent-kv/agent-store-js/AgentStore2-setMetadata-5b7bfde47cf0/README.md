# `AgentStore2.setMetadata`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/isolation/README.md).

**Módulo:** `agent-kv/agent-store.js` · [README do módulo](../../../../modules/agent-kv/agent-store-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616224-616226](../../../../../reference/runtime/host-main.cjs#L616224-L616226) | `method` | não | `key, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616224-616226](../../../../../reference/runtime/host-main.cjs#L616224-L616226) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:616224

Chamadas escritas diretamente neste corpo: `this.metadataStore.set`.

SHA-256 do trecho: `46fb767c4c2afe396282555ce4fa627af3c71261d1c6ef21b084182a9d12e8fe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
