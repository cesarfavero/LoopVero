# `notRunningMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/sand-subagent-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780855-780861](../../../../../../../reference/runtime/host-main.cjs#L780855-L780861) | `FunctionDeclaration` | não | `subagentId, running` |
| [evaluation:581202-581208](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581202-L581208) | `FunctionDeclaration` | não | `subagentId, running` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780855-780861](../../../../../../../reference/runtime/host-main.cjs#L780855-L780861) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:581202-581208](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581202-L581208) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:780855

Chamadas escritas diretamente neste corpo: `.join`, `running.map`.

SHA-256 do trecho: `59f0763388e1a4ef307eeae72072f46771ac602db5028a4976c9b8b1d33b1fc4`.

### evaluation:581202

Chamadas escritas diretamente neste corpo: `.join`, `running.map`.

SHA-256 do trecho: `59f0763388e1a4ef307eeae72072f46771ac602db5028a4976c9b8b1d33b1fc4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
