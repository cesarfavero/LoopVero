# `SandMcpManager.renameAccount`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689944-689946](../../../../../../../reference/runtime/host-main.cjs#L689944-L689946) | `method` | sim | `rawServerId, rawAccountKey, rawNewAccountKey` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689944-689946](../../../../../../../reference/runtime/host-main.cjs#L689944-L689946) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:689944

Chamadas escritas diretamente neste corpo: `this.accountSlots.renameAccount`.

SHA-256 do trecho: `2cc779c80f76a44493c2056716d52f7676b1e884b5cb5c36a285ff77a0ae1255`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
