# `rosterLines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-sections/send-to-agent-roster-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/send-to-agent-roster-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:537065-537089](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537065-L537089) | `FunctionDeclaration` | não | `others, groups, agentsRootDir, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537065-537089](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537065-L537089) | 3 | 1 | 0 | 1 | 0 | 0 |

### evaluation:537065

Chamadas escritas diretamente neste corpo: `.join`, `agentFolderDiscoveryLine`, `group.members.map`, `groups.slice`, `lines2.push`, `teammateRosterLines`.

SHA-256 do trecho: `be8aa901231e48ba8776a098dc017b4862f1f7f780c85c4370d640ab246672a1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
