# `SandMcpManager.inPluginWriteOrder`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689694-689712](../../../../../../../reference/runtime/host-main.cjs#L689694-L689712) | `method` | sim | `pluginId, accountScope, write4` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689694-689712](../../../../../../../reference/runtime/host-main.cjs#L689694-L689712) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:689694

Chamadas escritas diretamente neste corpo: `.then`, `Promise.resolve`, `this.pluginWriteTails.delete`, `this.pluginWriteTails.get`, `this.pluginWriteTails.set`.

SHA-256 do trecho: `4d72df5c02ee78e77d2bd0c5480fd5453c7a97452827c678fa72b63df758d5dd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
