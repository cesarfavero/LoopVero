# `SandMcpManager.takeSignedInCredentialChanges`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690180-690189](../../../../../../../reference/runtime/host-main.cjs#L690180-L690189) | `method` | não | `next` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690180-690189](../../../../../../../reference/runtime/host-main.cjs#L690180-L690189) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:690180

Chamadas escritas diretamente neste corpo: `.filter`, `changed.every`, `new Set`, `next.keys`, `previous.keys`, `this.signedInRowsAwaitingAccountRead.delete`.

SHA-256 do trecho: `4d790001936633105f3ef0f94c832ebd977580ff8f0f58f50e3151dae463d3d9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
