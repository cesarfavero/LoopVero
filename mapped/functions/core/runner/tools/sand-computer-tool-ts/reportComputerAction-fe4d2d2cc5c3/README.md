# `reportComputerAction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777221-777227](../../../../../../../reference/runtime/host-main.cjs#L777221-L777227) | `FunctionDeclaration` | não | `onComputerAction, sequence` |
| [evaluation:576866-576872](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576866-L576872) | `FunctionDeclaration` | não | `onComputerAction, sequence` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777221-777227](../../../../../../../reference/runtime/host-main.cjs#L777221-L777227) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:576866-576872](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576866-L576872) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:777221

Chamadas escritas diretamente neste corpo: `onComputerAction`, `toReportedAction`.

SHA-256 do trecho: `7787d5d4a13767b7f63a31697fc756421e5b6d5ea4720f3c338951ff0f8a108c`.

### evaluation:576866

Chamadas escritas diretamente neste corpo: `onComputerAction`, `toReportedAction`.

SHA-256 do trecho: `7787d5d4a13767b7f63a31697fc756421e5b6d5ea4720f3c338951ff0f8a108c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
