# `triggerSchedule`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automations.ts` · [README do módulo](../../../../../modules/shared/automations/automations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485507-485509](../../../../../../reference/runtime/host-main.cjs#L485507-L485509) | `FunctionDeclaration` | não | `trigger2` |
| [evaluation:475237-475239](../../../../../../reference/runtime/sand-eval-runner.cjs#L475237-L475239) | `FunctionDeclaration` | não | `trigger` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485507-485509](../../../../../../reference/runtime/host-main.cjs#L485507-L485509) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475237-475239](../../../../../../reference/runtime/sand-eval-runner.cjs#L475237-L475239) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485507

Chamadas escritas diretamente neste corpo: `triggerCronSchedules`.

SHA-256 do trecho: `4f1d3f28505177f7477e2d40e9e1c0f33e6ba2b4fdd1d06a75b110ef72391455`.

### evaluation:475237

Chamadas escritas diretamente neste corpo: `triggerCronSchedules`.

SHA-256 do trecho: `57942563c3180b4fefc9a2d41a2f83983b1775e846832f5a1fa468936461a882`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
