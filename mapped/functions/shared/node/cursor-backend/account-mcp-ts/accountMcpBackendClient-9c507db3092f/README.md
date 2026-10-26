# `accountMcpBackendClient`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/cursor-backend/account-mcp.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/account-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690274-690276](../../../../../../../reference/runtime/host-main.cjs#L690274-L690276) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690274-690276](../../../../../../../reference/runtime/host-main.cjs#L690274-L690276) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:690274

Chamadas escritas diretamente neste corpo: `deps.createBackendClient`, `identityBackendClient`.

SHA-256 do trecho: `eabbb72c231d23c7c0d201caa048c1d9eeea5c3cda200c939afb6070997938c5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
