# `summarizeStopAllSubagentsReport`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/sand-subagent-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781028-781063](../../../../../../../reference/runtime/host-main.cjs#L781028-L781063) | `FunctionDeclaration` | não | `report` |
| [evaluation:581375-581410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581375-L581410) | `FunctionDeclaration` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781028-781063](../../../../../../../reference/runtime/host-main.cjs#L781028-L781063) | 7 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:581375-581410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581375-L581410) | 7 | 0 | 0 | 2 | 0 | 0 |

### host:781028

Chamadas escritas diretamente neste corpo: `formatDelegatedWorkLines`, `lines2.join`, `lines2.push`, `report.alreadyFinished.map`, `report.failed.map`, `report.stopped.map`.

SHA-256 do trecho: `49b9ec490b0fa98f1a9b6d0d6ea3a8ca6bcf0a38cdeff1ebdf9070da8b45b045`.

### evaluation:581375

Chamadas escritas diretamente neste corpo: `formatDelegatedWorkLines`, `lines2.join`, `lines2.push`, `report.alreadyFinished.map`, `report.failed.map`, `report.stopped.map`.

SHA-256 do trecho: `49b9ec490b0fa98f1a9b6d0d6ea3a8ca6bcf0a38cdeff1ebdf9070da8b45b045`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
