# `_MicrosoftTeamsSite.meetLink`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/meetings/meeting-site.ts` · [README do módulo](../../../../../modules/shared/meetings/meeting-site-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772399-772407](../../../../../../reference/runtime/host-main.cjs#L772399-L772407) | `method` | não | `{     host,     meetingId,     passcode   }` |
| [evaluation:571628-571636](../../../../../../reference/runtime/sand-eval-runner.cjs#L571628-L571636) | `method` | não | `{     host,     meetingId,     passcode   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772399-772407](../../../../../../reference/runtime/host-main.cjs#L772399-L772407) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:571628-571636](../../../../../../reference/runtime/sand-eval-runner.cjs#L571628-L571636) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:772399

Chamadas escritas diretamente neste corpo: `_MicrosoftTeamsSite.meetingIdPattern.test`, `encodeURIComponent`.

SHA-256 do trecho: `405dd9c9d8b6e64538036182d007226ab098ab85b27b0737bd17b40d8dcbe3ea`.

### evaluation:571628

Chamadas escritas diretamente neste corpo: `_MicrosoftTeamsSite.meetingIdPattern.test`, `encodeURIComponent`.

SHA-256 do trecho: `405dd9c9d8b6e64538036182d007226ab098ab85b27b0737bd17b40d8dcbe3ea`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
