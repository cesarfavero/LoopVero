# `AgentStore2.subscribeToMetadata`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/isolation/README.md).

**Módulo:** `agent-kv/agent-store.js` · [README do módulo](../../../../modules/agent-kv/agent-store-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616219-616223](../../../../../reference/runtime/host-main.cjs#L616219-L616223) | `method` | não | `key, callback` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616219-616223](../../../../../reference/runtime/host-main.cjs#L616219-L616223) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:616219

Chamadas escritas diretamente neste corpo: `this.metadataStore.subscribe`.

SHA-256 do trecho: `08e12459aaf26c9e0556865c171ee92a56e057f9254b877157bdafcf310855d1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
