# `findUnresolvedPlaceholderField`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779598-779611](../../../../../../../reference/runtime/host-main.cjs#L779598-L779611) | `FunctionDeclaration` | não | `args` |
| [evaluation:579836-579849](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579836-L579849) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779598-779611](../../../../../../../reference/runtime/host-main.cjs#L779598-L779611) | 3 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:579836-579849](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579836-L579849) | 3 | 1 | 0 | 4 | 0 | 0 |

### host:779598

Chamadas escritas diretamente neste corpo: `Object.entries`, `UNRESOLVED_PLACEHOLDER.test`.

SHA-256 do trecho: `6c49249b7c923c7ca4a6b061a67c9140b16e1d26ca7e27be21ddad883253520f`.

### evaluation:579836

Chamadas escritas diretamente neste corpo: `Object.entries`, `UNRESOLVED_PLACEHOLDER.test`.

SHA-256 do trecho: `6c49249b7c923c7ca4a6b061a67c9140b16e1d26ca7e27be21ddad883253520f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
