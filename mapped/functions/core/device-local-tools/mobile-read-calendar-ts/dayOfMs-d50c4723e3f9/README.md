# `dayOfMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/mobile-read-calendar.ts` · [README do módulo](../../../../../modules/core/device-local-tools/mobile-read-calendar-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:759151-759154](../../../../../../reference/runtime/host-main.cjs#L759151-L759154) | `FunctionDeclaration` | não | `ms2` |
| [evaluation:549311-549314](../../../../../../reference/runtime/sand-eval-runner.cjs#L549311-L549314) | `FunctionDeclaration` | não | `ms2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759151-759154](../../../../../../reference/runtime/host-main.cjs#L759151-L759154) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549311-549314](../../../../../../reference/runtime/sand-eval-runner.cjs#L549311-L549314) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:759151

Chamadas escritas diretamente neste corpo: `.slice`, `Number.isNaN`, `date6.getTime`, `date6.toISOString`, `new Date`.

SHA-256 do trecho: `4ba6ada00438dc26506b2330a15d688442b6397daf6b6a06da62cdb39672bce8`.

### evaluation:549311

Chamadas escritas diretamente neste corpo: `.slice`, `Number.isNaN`, `date6.getTime`, `date6.toISOString`, `new Date`.

SHA-256 do trecho: `4ba6ada00438dc26506b2330a15d688442b6397daf6b6a06da62cdb39672bce8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
