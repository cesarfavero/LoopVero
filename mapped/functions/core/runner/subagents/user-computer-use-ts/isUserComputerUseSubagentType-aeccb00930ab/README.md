# `isUserComputerUseSubagentType`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/user-computer-use.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/user-computer-use-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:753698-753700](../../../../../../../reference/runtime/host-main.cjs#L753698-L753700) | `FunctionDeclaration` | não | `subagentType` |
| [evaluation:532341-532343](../../../../../../../reference/runtime/sand-eval-runner.cjs#L532341-L532343) | `FunctionDeclaration` | não | `subagentType` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:753698-753700](../../../../../../../reference/runtime/host-main.cjs#L753698-L753700) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:532341-532343](../../../../../../../reference/runtime/sand-eval-runner.cjs#L532341-L532343) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:753698

Chamadas escritas diretamente neste corpo: `isBuiltinSubagent`.

SHA-256 do trecho: `d9087bfe32d25f5b7a0fe5a7d36247071fdf1db280993f2a22c08539ce2a194c`.

### evaluation:532341

Chamadas escritas diretamente neste corpo: `isBuiltinSubagent`.

SHA-256 do trecho: `d9087bfe32d25f5b7a0fe5a7d36247071fdf1db280993f2a22c08539ce2a194c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
