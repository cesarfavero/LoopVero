# `isScheduleOnlyTrigger`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/sand-automation-run-now.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/sand-automation-run-now-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505722-505724](../../../../../../../reference/runtime/host-main.cjs#L505722-L505724) | `FunctionDeclaration` | não | `trigger2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505722-505724](../../../../../../../reference/runtime/host-main.cjs#L505722-L505724) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:505722

Chamadas escritas diretamente neste corpo: `triggerCronSchedules`, `triggerEventTriggers`.

SHA-256 do trecho: `e220a792cba015ee844ea8139f9140267fe3063f3e695b31b9c97cc60fe8c0c8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
