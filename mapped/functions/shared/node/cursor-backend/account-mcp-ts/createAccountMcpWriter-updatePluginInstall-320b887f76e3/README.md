# `createAccountMcpWriter/updatePluginInstall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/cursor-backend/account-mcp.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/account-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690613-690621](../../../../../../../reference/runtime/host-main.cjs#L690613-L690621) | `FunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690613-690621](../../../../../../../reference/runtime/host-main.cjs#L690613-L690621) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:690613

Chamadas escritas diretamente neste corpo: `.updateUserPluginInstall`, `Struct.fromJson`, `makeClient`, `new UpdateUserPluginInstallRequest`.

SHA-256 do trecho: `739af73bb121a3784ea97518ee953dfae8f24de278c6804858db32f7bea28d00`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
