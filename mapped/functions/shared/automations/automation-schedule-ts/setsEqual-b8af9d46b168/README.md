# `setsEqual`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automation-schedule.ts` · [README do módulo](../../../../../modules/shared/automations/automation-schedule-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682665-682667](../../../../../../reference/runtime/host-main.cjs#L682665-L682667) | `FunctionDeclaration` | não | `a, b2` |
| [evaluation:526889-526891](../../../../../../reference/runtime/sand-eval-runner.cjs#L526889-L526891) | `FunctionDeclaration` | não | `a, b2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682665-682667](../../../../../../reference/runtime/host-main.cjs#L682665-L682667) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526889-526891](../../../../../../reference/runtime/sand-eval-runner.cjs#L526889-L526891) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682665

Chamadas escritas diretamente neste corpo: `.every`.

SHA-256 do trecho: `f76ba11374b386c4c2c364821e25a91134c277b546345a9f01cf100131407671`.

### evaluation:526889

Chamadas escritas diretamente neste corpo: `.every`.

SHA-256 do trecho: `f76ba11374b386c4c2c364821e25a91134c277b546345a9f01cf100131407671`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
