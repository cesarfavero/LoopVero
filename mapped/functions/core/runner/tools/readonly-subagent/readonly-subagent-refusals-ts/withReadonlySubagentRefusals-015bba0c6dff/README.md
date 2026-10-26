# `withReadonlySubagentRefusals`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/readonly-subagent/readonly-subagent-refusals.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-subagent-refusals-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:582552-582576](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582552-L582576) | `FunctionDeclaration` | não | `listed, withheld, dropped` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582552-582576](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582552-L582576) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:582552

Chamadas escritas diretamente neste corpo: `dropped.map`, `listed.find`, `listed.map`, `new Map`, `new Set`, `withheld.filter`.

SHA-256 do trecho: `c3cc5a3b61256fd7f5c68b08e7a6d98a54341559b4e0b901110dd579485d9c77`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
