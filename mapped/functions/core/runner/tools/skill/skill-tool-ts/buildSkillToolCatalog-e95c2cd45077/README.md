# `buildSkillToolCatalog`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/skills/README.md).

**Módulo:** `core/runner/tools/skill/skill-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:565741-565783](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565741-L565783) | `FunctionDeclaration` | não | `skills, agentTokenLimit, search` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565741-565783](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565741-L565783) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:565741

Chamadas escritas diretamente neste corpo: `budgetSkillCatalogText`, `catalogLabels`, `invocable.map`, `modelInvocableSkills`, `new Map`, `unlistedSkillsNudge`.

SHA-256 do trecho: `da425345db443d38c2e5277973c2ae44e4ed8b5ed2f874a8fd1450dfc324db5d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
