# `stdioDisplayServers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689086-689090](../../../../../../../reference/runtime/host-main.cjs#L689086-L689090) | `FunctionDeclaration` | não | `servers` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689086-689090](../../../../../../../reference/runtime/host-main.cjs#L689086-L689090) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:689086

Chamadas escritas diretamente neste corpo: `servers.filter`.

SHA-256 do trecho: `7fde1731f96ab02dd5c4d269989b6a36faf82192b5b8bb743f59e938a42341ff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
