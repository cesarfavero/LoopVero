# `knowledgeWorkSubagentDescription`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/sand-knowledge-work/subagent-config.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/sand-knowledge-work/subagent-config-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535937-535942](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L535937-L535942) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535937-535942](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L535937-L535942) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:535937

Chamadas escritas diretamente neste corpo: `args.description.trim`, `conciseKnowledgeWorkDescription`, `fullKnowledgeWorkDescription`, `knowledgeWorkPageWriters`.

SHA-256 do trecho: `e3332459fa7862a0c530fe11bbc4b15927da52a7bd7292828d4c48a29430a997`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
