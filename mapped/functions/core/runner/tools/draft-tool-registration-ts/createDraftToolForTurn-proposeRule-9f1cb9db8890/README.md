# `createDraftToolForTurn/proposeRule`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-tool-registration.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756118-756130](../../../../../../../reference/runtime/host-main.cjs#L756118-L756130) | `ArrowFunctionExpression` | sim | `ctx, emission, toolCallId` |
| [evaluation:542039-542051](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542039-L542051) | `ArrowFunctionExpression` | sim | `ctx, emission, toolCallId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756118-756130](../../../../../../../reference/runtime/host-main.cjs#L756118-L756130) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:542039-542051](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542039-L542051) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:756118

Chamadas escritas diretamente neste corpo: `host.ruleProposalsPermitted`, `proposeDraftAllowRule`, `reviewOptions`, `reviewedDraftSendCall`.

SHA-256 do trecho: `2230740de200d65fbb5e39fc3eb28a29abb5570930f4f4c5c2a8f12b421eac75`.

### evaluation:542039

Chamadas escritas diretamente neste corpo: `host.ruleProposalsPermitted`, `proposeDraftAllowRule`, `reviewOptions`, `reviewedDraftSendCall`.

SHA-256 do trecho: `2230740de200d65fbb5e39fc3eb28a29abb5570930f4f4c5c2a8f12b421eac75`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
