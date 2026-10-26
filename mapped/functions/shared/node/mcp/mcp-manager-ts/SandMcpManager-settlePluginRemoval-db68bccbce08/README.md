# `SandMcpManager.settlePluginRemoval`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689820-689836](../../../../../../../reference/runtime/host-main.cjs#L689820-L689836) | `method` | sim | `pluginId, { userInstalledOnly, removedStdio }, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689820-689836](../../../../../../../reference/runtime/host-main.cjs#L689820-L689836) | 2 | 0 | 1 | 1 | 2 | 0 |

### host:689820

Chamadas escritas diretamente neste corpo: `.then`, `Promise.all`, `Promise.allSettled`, `options2.syncRemoval`, `outcome.then`, `this.readInstallRecord`, `this.reloadAfterPluginWrite`.

Alvos de lançamento explícito: `removal.reason`, `synced.reason`.

SHA-256 do trecho: `43f625c387830ddee59d5f7d8fd9a40a816e794ed6a7000c02ae75431ab9f3b8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
