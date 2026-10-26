# `SandMcpManager.validateInstallableName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689713-689721](../../../../../../../reference/runtime/host-main.cjs#L689713-L689721) | `method` | não | `name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689713-689721](../../../../../../../reference/runtime/host-main.cjs#L689713-L689721) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:689713

Chamadas escritas diretamente neste corpo: `BUILTIN_MCP_SERVER_NAMES.has`, `new SandMcpConfigError`, `validateServerName`.

Alvos de lançamento explícito: `SandMcpConfigError`.

SHA-256 do trecho: `097752b8433dd24ecc61f88577573aa0a8fb3a266cf487349f1bd2b0763b5dd0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
