# `SandMcpManager.disarmSignedInRowsShownWithToken`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690190-690199](../../../../../../../reference/runtime/host-main.cjs#L690190-L690199) | `method` | não | `servers` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690190-690199](../../../../../../../reference/runtime/host-main.cjs#L690190-L690199) | 2 | 1 | 0 | 0 | 0 | 0 |

### host:690190

Chamadas escritas diretamente neste corpo: `server.accounts.find`, `servers.find`, `this.signedInRowsAwaitingAccountRead.delete`.

SHA-256 do trecho: `463156dfc588122c99e995e257b0b10a3c8d08c30d10fa00909176a3a2b0dc03`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
