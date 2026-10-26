# `createMcpManagementTools/lastListedAccount`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780281-780294](../../../../../../../reference/runtime/host-main.cjs#L780281-L780294) | `ArrowFunctionExpression` | sim | `listInstalled, resolution, accountLabel` |
| [evaluation:580526-580539](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580526-L580539) | `ArrowFunctionExpression` | sim | `listInstalled, resolution, accountLabel` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780281-780294](../../../../../../../reference/runtime/host-main.cjs#L780281-L780294) | 3 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:580526-580539](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580526-L580539) | 3 | 0 | 1 | 2 | 0 | 0 |

### host:780281

Chamadas escritas diretamente neste corpo: `isAccount`, `listInstalled`, `listing.servers.find`, `normalizeMcpAccountLabel`.

SHA-256 do trecho: `88be1e318c864354e5ca055c66fa8f6623b506431a03f0e2c138e66f4d263ed6`.

### evaluation:580526

Chamadas escritas diretamente neste corpo: `isAccount`, `listInstalled`, `listing.servers.find`, `normalizeMcpAccountLabel`.

SHA-256 do trecho: `88be1e318c864354e5ca055c66fa8f6623b506431a03f0e2c138e66f4d263ed6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
