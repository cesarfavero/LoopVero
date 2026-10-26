# `describePreview`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/team/sand-team-conversion-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/team/sand-team-conversion-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781518-781562](../../../../../../../../reference/runtime/host-main.cjs#L781518-L781562) | `FunctionDeclaration` | não | `preview` |
| [evaluation:581865-581909](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581865-L581909) | `FunctionDeclaration` | não | `preview` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781518-781562](../../../../../../../../reference/runtime/host-main.cjs#L781518-L781562) | 10 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:581865-581909](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581865-L581909) | 10 | 0 | 0 | 7 | 0 | 0 |

### host:781518

Chamadas escritas diretamente neste corpo: `.join`, `describeOwnMemories`, `holdsNothingToCopy`, `lines2.join`, `lines2.push`, `preview.automations.map`, `preview.carryablePlugins.join`, `preview.state.blockers.map`.

SHA-256 do trecho: `2f76adb004339c62b9b7d3b51db9414bfacc2159afce791b41360207ea31f38d`.

### evaluation:581865

Chamadas escritas diretamente neste corpo: `.join`, `describeOwnMemories`, `holdsNothingToCopy`, `lines2.join`, `lines2.push`, `preview.automations.map`, `preview.carryablePlugins.join`, `preview.state.blockers.map`.

SHA-256 do trecho: `2f76adb004339c62b9b7d3b51db9414bfacc2159afce791b41360207ea31f38d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
