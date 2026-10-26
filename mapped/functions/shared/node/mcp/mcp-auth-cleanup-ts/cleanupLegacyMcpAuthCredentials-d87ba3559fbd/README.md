# `cleanupLegacyMcpAuthCredentials`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-auth-cleanup.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-auth-cleanup-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684218-684244](../../../../../../../reference/runtime/host-main.cjs#L684218-L684244) | `FunctionDeclaration` | sim | `rootDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684218-684244](../../../../../../../reference/runtime/host-main.cjs#L684218-L684244) | 3 | 1 | 2 | 4 | 0 | 2 |

### host:684218

Chamadas escritas diretamente neste corpo: `entries.filter`, `findSystemErrno`, `reportMcpHostEdgeFailure`.

Alvos de atribuição ou incremento: `entries`, `removedCount`, `sawError`.

SHA-256 do trecho: `45262299ac556d3f790151d6f101707be3f378b72654529f8f06bd43a093c342`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
