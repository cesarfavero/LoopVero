# `skillsProposalOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `core/runner/tools/sand-skills-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-skills-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:536014-536024](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536014-L536024) | `FunctionDeclaration` | não | `args, library` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536014-536024](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536014-L536024) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:536014

Chamadas escritas diretamente neste corpo: `new Set`, `resolveItems`, `skills.drafts.slice`, `suggestions.drafts.slice`.

SHA-256 do trecho: `97e5032fa5c870fe09177071b4afbed2066aee606fed8bb47405a9b52d2069f2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
