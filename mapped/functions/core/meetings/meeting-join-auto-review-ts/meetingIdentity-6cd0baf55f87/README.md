# `meetingIdentity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/meetings/meeting-join-auto-review.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-join-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772755-772766](../../../../../../reference/runtime/host-main.cjs#L772755-L772766) | `FunctionDeclaration` | não | `url2` |
| [evaluation:571981-571992](../../../../../../reference/runtime/sand-eval-runner.cjs#L571981-L571992) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772755-772766](../../../../../../reference/runtime/host-main.cjs#L772755-L772766) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:571981-571992](../../../../../../reference/runtime/sand-eval-runner.cjs#L571981-L571992) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:772755

Chamadas escritas diretamente neste corpo: `MeetingSites.parse`, `new URL`.

SHA-256 do trecho: `cf658ab424bc2c11e66ff42c1041abff285d170d942c627656a6c0b4380bd78f`.

### evaluation:571981

Chamadas escritas diretamente neste corpo: `MeetingSites.parse`, `new URL`.

SHA-256 do trecho: `80244b5dc37373a5399c7a481a6231de2143a27d3ae27cc0b994593f470cb098`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
