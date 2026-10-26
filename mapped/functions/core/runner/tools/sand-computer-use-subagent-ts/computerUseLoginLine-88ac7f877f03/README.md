# `computerUseLoginLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/sand-computer-use-subagent.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-use-subagent-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:525145-525151](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525145-L525151) | `FunctionDeclaration` | não | `options2, combined, holdSentence` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525145-525151](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525145-L525151) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:525145

Chamadas escritas diretamente neste corpo: `replaceCatalogHoldClause`, `subagentSignInCatalogLine`.

SHA-256 do trecho: `106eb75bf377b9f4d933e8f2942e31a409808456db91a82d7ee8fd7a2b7b6d81`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
