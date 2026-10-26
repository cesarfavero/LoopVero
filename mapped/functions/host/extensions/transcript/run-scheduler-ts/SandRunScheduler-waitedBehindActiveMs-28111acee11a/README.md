# `SandRunScheduler.waitedBehindActiveMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/run-scheduler.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/run-scheduler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:739834-739839](../../../../../../../reference/runtime/host-main.cjs#L739834-L739839) | `method` | não | `queue` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739834-739839](../../../../../../../reference/runtime/host-main.cjs#L739834-L739839) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:739834

Chamadas escritas diretamente neste corpo: `Math.max`, `this.clock.now`.

SHA-256 do trecho: `533948934a498592ebd29888163a718383b7512907c0bc95f8666b7f35b853a0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
