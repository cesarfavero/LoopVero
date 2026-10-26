# `parseMicrosoftTeamsTrigger`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716164-716191](../../../../../../reference/runtime/host-main.cjs#L716164-L716191) | `FunctionDeclaration` | não | `value` |
| [evaluation:527847-527874](../../../../../../reference/runtime/sand-eval-runner.cjs#L527847-L527874) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716164-716191](../../../../../../reference/runtime/host-main.cjs#L716164-L716191) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:527847-527874](../../../../../../reference/runtime/sand-eval-runner.cjs#L527847-L527874) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:716164

Chamadas escritas diretamente neste corpo: `clampLine`, `normalizeScopeToken`, `parseStringList`, `triggerParseFailure`.

Alvos de atribuição ou incremento: `teamIds`.

SHA-256 do trecho: `6d0d6efcc70d8ec885e2068b8c6c7159d22adb8ca2796141a2bc001e329f4aa8`.

### evaluation:527847

Chamadas escritas diretamente neste corpo: `clampLine`, `normalizeScopeToken`, `parseStringList`, `triggerParseFailure`.

Alvos de atribuição ou incremento: `teamIds`.

SHA-256 do trecho: `6d0d6efcc70d8ec885e2068b8c6c7159d22adb8ca2796141a2bc001e329f4aa8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
