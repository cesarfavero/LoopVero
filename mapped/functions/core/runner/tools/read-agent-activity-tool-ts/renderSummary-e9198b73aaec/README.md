# `renderSummary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/read-agent-activity-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/read-agent-activity-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765403-765427](../../../../../../../reference/runtime/host-main.cjs#L765403-L765427) | `FunctionDeclaration` | não | `summary, nowMs2` |
| [evaluation:558770-558794](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558770-L558794) | `FunctionDeclaration` | não | `summary, nowMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765403-765427](../../../../../../../reference/runtime/host-main.cjs#L765403-L765427) | 6 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:558770-558794](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558770-L558794) | 6 | 2 | 0 | 1 | 0 | 0 |

### host:765403

Chamadas escritas diretamente neste corpo: `formatAgentActivityAge`, `lines2.join`, `lines2.push`, `summary.description.trim`.

SHA-256 do trecho: `a36ec9f2c61298d68f4436f9a03cb2dad9b36663d7afe2ec3d9cac1695bb722e`.

### evaluation:558770

Chamadas escritas diretamente neste corpo: `formatAgentActivityAge`, `lines2.join`, `lines2.push`, `summary.description.trim`.

SHA-256 do trecho: `28df0e9bd67a2c95cfa485a8aa681edabc49b5504d824d9d2a6da3cd85c0da8c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
