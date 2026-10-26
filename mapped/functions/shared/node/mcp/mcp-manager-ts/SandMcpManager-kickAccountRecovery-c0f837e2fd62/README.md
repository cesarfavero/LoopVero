# `SandMcpManager.kickAccountRecovery`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689615-689621](../../../../../../../reference/runtime/host-main.cjs#L689615-L689621) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689615-689621](../../../../../../../reference/runtime/host-main.cjs#L689615-L689621) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:689615

Chamadas escritas diretamente neste corpo: `.catch`, `this.readAccountServers`.

Alvos de atribuição ou incremento: `this.accountRecoveryAttempted`.

SHA-256 do trecho: `0ba2a93280c9455c83c79a5042a449ea6ba1653d71d1b7eda018f0b9b219a244`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
