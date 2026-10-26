# `SandMcpManager.inPluginWriteOrder/run`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689695-689704](../../../../../../../reference/runtime/host-main.cjs#L689695-L689704) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689695-689704](../../../../../../../reference/runtime/host-main.cjs#L689695-L689704) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:689695

Chamadas escritas diretamente neste corpo: `new SandMcpConfigError`, `this.accountGenerationAtPluginWrite.set`, `this.settingsStore.getActiveAccountScope`, `write4`.

Alvos de lançamento explícito: `SandMcpConfigError`.

SHA-256 do trecho: `a0fdb0faed2fc2b114d4fabbb2e3b396f91e6d24aac8e8918a95999135e55bef`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
