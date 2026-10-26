# `isBuiltinSubagent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/subagent-kind.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/subagent-kind-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:740866-740870](../../../../../../../reference/runtime/host-main.cjs#L740866-L740870) | `FunctionDeclaration` | não | `subagentType, ...names3` |
| [evaluation:479773-479777](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479773-L479777) | `FunctionDeclaration` | não | `subagentType, ...names3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740866-740870](../../../../../../../reference/runtime/host-main.cjs#L740866-L740870) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:479773-479777](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479773-L479777) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:740866

Chamadas escritas diretamente neste corpo: `names3.includes`, `subagentKind`.

SHA-256 do trecho: `b827b770c17b0c24bb1ed77adb84f0f55ffebff12c67f10b5d39eccd8e90e14d`.

### evaluation:479773

Chamadas escritas diretamente neste corpo: `names3.includes`, `subagentKind`.

SHA-256 do trecho: `b827b770c17b0c24bb1ed77adb84f0f55ffebff12c67f10b5d39eccd8e90e14d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
