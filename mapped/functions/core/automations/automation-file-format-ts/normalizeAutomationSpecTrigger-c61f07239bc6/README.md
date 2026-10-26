# `normalizeAutomationSpecTrigger`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-file-format.ts` · [README do módulo](../../../../../modules/core/automations/automation-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716625-716640](../../../../../../reference/runtime/host-main.cjs#L716625-L716640) | `FunctionDeclaration` | não | `trigger2, minimumIntervalMs` |
| [evaluation:627339-627354](../../../../../../reference/runtime/sand-eval-runner.cjs#L627339-L627354) | `FunctionDeclaration` | não | `trigger, minimumIntervalMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716625-716640](../../../../../../reference/runtime/host-main.cjs#L716625-L716640) | 4 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:627339-627354](../../../../../../reference/runtime/sand-eval-runner.cjs#L627339-L627354) | 4 | 1 | 0 | 3 | 0 | 0 |

### host:716625

Chamadas escritas diretamente neste corpo: `cronTrigger`, `isTriggerParseFailure`, `isValidSchedule`, `members2.push`, `normalizeSchedule`, `parseStoredTrigger`, `serializeStoredTrigger`, `triggerFromList`, `triggerList`.

SHA-256 do trecho: `9ad7055372a4c39159ee8662e1cf284835b1534581385f83eef9172a90fa35ca`.

### evaluation:627339

Chamadas escritas diretamente neste corpo: `cronTrigger`, `isTriggerParseFailure`, `isValidSchedule`, `members2.push`, `normalizeSchedule`, `parseStoredTrigger`, `serializeStoredTrigger`, `triggerFromList`, `triggerList`.

SHA-256 do trecho: `f843c26c994b7674864607dfb19d33cf746b78ad1ea9fc2560e4b68a6613d04b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
