# `renderAutomationsRecipeLines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `core/runner/prompt-sections/automations-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/automations-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:528462-528507](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528462-L528507) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528462-528507](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528462-L528507) | 8 | 0 | 0 | 1 | 0 | 0 |

### evaluation:528462

Chamadas escritas diretamente neste corpo: `authoringLines.map`, `automationDeliveryLine`, `slackChannelListenerLine`.

SHA-256 do trecho: `14994d6b7e65200eabd7078cb62e0ca4317d73e779ddf3c8de1727a6334de1b5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
