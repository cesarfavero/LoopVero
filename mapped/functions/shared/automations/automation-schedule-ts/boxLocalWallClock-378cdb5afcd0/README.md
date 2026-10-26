# `boxLocalWallClock`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automation-schedule.ts` · [README do módulo](../../../../../modules/shared/automations/automation-schedule-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682369-682378](../../../../../../reference/runtime/host-main.cjs#L682369-L682378) | `FunctionDeclaration` | não | `date6` |
| [evaluation:526583-526592](../../../../../../reference/runtime/sand-eval-runner.cjs#L526583-L526592) | `FunctionDeclaration` | não | `date6` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682369-682378](../../../../../../reference/runtime/host-main.cjs#L682369-L682378) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526583-526592](../../../../../../reference/runtime/sand-eval-runner.cjs#L526583-L526592) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682369

Chamadas escritas diretamente neste corpo: `date6.getDate`, `date6.getDay`, `date6.getFullYear`, `date6.getHours`, `date6.getMinutes`, `date6.getMonth`.

SHA-256 do trecho: `a2df5215825ea3ff6403145b80623864903f0a92a48b0154fa0e839769c02849`.

### evaluation:526583

Chamadas escritas diretamente neste corpo: `date6.getDate`, `date6.getDay`, `date6.getFullYear`, `date6.getHours`, `date6.getMinutes`, `date6.getMonth`.

SHA-256 do trecho: `a2df5215825ea3ff6403145b80623864903f0a92a48b0154fa0e839769c02849`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
