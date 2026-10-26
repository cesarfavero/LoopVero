# `parseTriggerMembers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716336-716362](../../../../../../reference/runtime/host-main.cjs#L716336-L716362) | `FunctionDeclaration` | não | `entries` |
| [evaluation:528019-528045](../../../../../../reference/runtime/sand-eval-runner.cjs#L528019-L528045) | `FunctionDeclaration` | não | `entries` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716336-716362](../../../../../../reference/runtime/host-main.cjs#L716336-L716362) | 5 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:528019-528045](../../../../../../reference/runtime/sand-eval-runner.cjs#L528019-L528045) | 5 | 1 | 0 | 3 | 0 | 0 |

### host:716336

Chamadas escritas diretamente neste corpo: `isTriggerParseFailure`, `members2.find`, `members2.push`, `members2.some`, `parseTriggerMember`, `triggerFromList`, `triggerParseFailure`.

Alvos de atribuição ou incremento: `firstFailure`.

SHA-256 do trecho: `92cd951374ae5966a5753886a246ffefcefbfefe98bbdc932160edb7077c3846`.

### evaluation:528019

Chamadas escritas diretamente neste corpo: `isTriggerParseFailure`, `members2.find`, `members2.push`, `members2.some`, `parseTriggerMember`, `triggerFromList`, `triggerParseFailure`.

Alvos de atribuição ou incremento: `firstFailure`.

SHA-256 do trecho: `3d9b6e53b1a6974170fed3dc90a23802e323bd71dcbd0342180e981b98ead14d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
