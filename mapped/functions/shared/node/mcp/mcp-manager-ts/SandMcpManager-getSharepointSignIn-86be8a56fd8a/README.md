# `SandMcpManager.getSharepointSignIn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689622-689635](../../../../../../../reference/runtime/host-main.cjs#L689622-L689635) | `method` | sim | `access5` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689622-689635](../../../../../../../reference/runtime/host-main.cjs#L689622-L689635) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:689622

Chamadas escritas diretamente neste corpo: `new SandMcpConfigError`, `this.backendMcpExec.checkAuthStatus`.

Alvos de lançamento explícito: `SandMcpConfigError`.

SHA-256 do trecho: `1b5382d00cae92c82bf4dc0e6507d08a327c82120bb6cf14b80269cd3bb263e5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
