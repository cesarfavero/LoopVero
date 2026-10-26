# `createSkillsTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `core/runner/tools/sand-skills-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-skills-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:536039-536045](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536039-L536045) | `ArrowFunctionExpression` | sim | `_ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536039-536045](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536039-L536045) | 2 | 0 | 1 | 3 | 0 | 0 |

### evaluation:536039

Chamadas escritas diretamente neste corpo: `d.library`, `d.onProposal`, `skillsProposalOf`, `unknownSkillMessage`, `unusableSkillMessage`.

SHA-256 do trecho: `02bf05d92024802eb61de08b81bcfca1775e068e351f9ed872a30bd34a4e5dbc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
