# `describeRunningSubagent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/sand-subagent-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780834-780854](../../../../../../../reference/runtime/host-main.cjs#L780834-L780854) | `FunctionDeclaration` | não | `info2, options2` |
| [evaluation:581181-581201](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581181-L581201) | `FunctionDeclaration` | não | `info2, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780834-780854](../../../../../../../reference/runtime/host-main.cjs#L780834-L780854) | 4 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:581181-581201](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581181-L581201) | 4 | 1 | 0 | 2 | 0 | 0 |

### host:780834

Chamadas escritas diretamente neste corpo: `elapsedLabel`, `lines2.join`, `lines2.push`.

SHA-256 do trecho: `8d4bf1e8406782c3df3a58e3ed8fefecd1843df14700bbab3a9acc3b9be41d64`.

### evaluation:581181

Chamadas escritas diretamente neste corpo: `elapsedLabel`, `lines2.join`, `lines2.push`.

SHA-256 do trecho: `8d4bf1e8406782c3df3a58e3ed8fefecd1843df14700bbab3a9acc3b9be41d64`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
