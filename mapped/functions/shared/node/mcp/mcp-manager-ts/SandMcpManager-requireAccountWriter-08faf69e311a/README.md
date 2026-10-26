# `SandMcpManager.requireAccountWriter`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689722-689729](../../../../../../../reference/runtime/host-main.cjs#L689722-L689729) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689722-689729](../../../../../../../reference/runtime/host-main.cjs#L689722-L689729) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:689722

Chamadas escritas diretamente neste corpo: `new SandMcpConfigError`.

Alvos de lançamento explícito: `SandMcpConfigError`.

SHA-256 do trecho: `ffea2fe8a7dd563b356060db138467be7f442789dfbff23ef2e934e44ada13b2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
