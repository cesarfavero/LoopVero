# `SandMcpDefinitionSource.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-definition-source.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-definition-source-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686622-686630](../../../../../../../reference/runtime/host-main.cjs#L686622-L686630) | `method` | não | `builtins, accountConfigProvider, boxServers = async () => ({}), pluginInstallFolder, pluginIdForServer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686622-686630](../../../../../../../reference/runtime/host-main.cjs#L686622-L686630) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:686622

Chamadas escritas diretamente neste corpo: `this.loadAccountConfig`, `this.loadBoxServers`.

Alvos de atribuição ou incremento: `this.accountConfigPromise`, `this.accountConfigProvider`, `this.boxServers`, `this.boxServersPromise`, `this.builtins`, `this.pluginIdForServer`, `this.pluginInstallFolder`.

SHA-256 do trecho: `f22132b2f42d79558135fb21eecc8e191d5574401755494c5db246e0cc2ede4a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
