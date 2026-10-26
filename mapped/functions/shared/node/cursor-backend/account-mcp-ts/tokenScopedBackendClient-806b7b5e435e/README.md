# `tokenScopedBackendClient`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/cursor-backend/account-mcp.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/account-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690386-690388](../../../../../../../reference/runtime/host-main.cjs#L690386-L690388) | `FunctionDeclaration` | não | `deps, accessToken` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690386-690388](../../../../../../../reference/runtime/host-main.cjs#L690386-L690388) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:690386

Chamadas escritas diretamente neste corpo: `deps.createBackendClient`, `identityBackendClient`.

SHA-256 do trecho: `0201ea158f3c0f2eb8b78489f662ba7c0008ff109d80086aea0da5012d461fa5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
