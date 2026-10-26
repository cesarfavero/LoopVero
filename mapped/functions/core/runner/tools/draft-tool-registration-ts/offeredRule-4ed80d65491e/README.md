# `offeredRule`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-tool-registration.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756304-756316](../../../../../../../reference/runtime/host-main.cjs#L756304-L756316) | `FunctionDeclaration` | não | `emission, instructions, ruleProposal, agentRuleAllowed` |
| [evaluation:542225-542237](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542225-L542237) | `FunctionDeclaration` | não | `emission, instructions, ruleProposal, agentRuleAllowed` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756304-756316](../../../../../../../reference/runtime/host-main.cjs#L756304-L756316) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:542225-542237](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542225-L542237) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:756304

Chamadas escritas diretamente neste corpo: `.find`, `agentProposedRule`, `draftDestinations`, `offerable`, `recipientRule`.

SHA-256 do trecho: `3c545315f601b71243da4dbb5727991bdc288fda78cd1e8720bd04e435cdbb63`.

### evaluation:542225

Chamadas escritas diretamente neste corpo: `.find`, `agentProposedRule`, `draftDestinations`, `offerable`, `recipientRule`.

SHA-256 do trecho: `3c545315f601b71243da4dbb5727991bdc288fda78cd1e8720bd04e435cdbb63`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
