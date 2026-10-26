# `withServersNeedingAuth/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/mcp-state-executor.ts` · [README do módulo](../../../../../modules/core/mcp/mcp-state-executor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584774-584783](../../../../../../reference/runtime/sand-eval-runner.cjs#L584774-L584783) | `FunctionExpression` | sim | `ctx, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584774-584783](../../../../../../reference/runtime/sand-eval-runner.cjs#L584774-L584783) | 2 | 1 | 1 | 2 | 0 | 0 |

### evaluation:584774

Chamadas escritas diretamente neste corpo: `executor.execute`, `needingAuth.has`.

Alvos de atribuição ou incremento: `server.status`, `server.tools`.

SHA-256 do trecho: `1db9b76e061e366507e3b5cd3695da7e3bfd5ba7a39b285b4d19ab691234ec98`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
