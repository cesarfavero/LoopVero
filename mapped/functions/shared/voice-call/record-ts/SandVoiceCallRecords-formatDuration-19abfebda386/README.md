# `_SandVoiceCallRecords.formatDuration`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/voice-call/record.ts` · [README do módulo](../../../../../modules/shared/voice-call/record-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490508-490517](../../../../../../reference/runtime/host-main.cjs#L490508-L490517) | `method` | não | `durationMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490508-490517](../../../../../../reference/runtime/host-main.cjs#L490508-L490517) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:490508

Chamadas escritas diretamente neste corpo: `.padStart`, `Math.floor`, `Math.max`, `Math.round`, `String`.

SHA-256 do trecho: `acb5271284f31c58cac75526ae3ea73c1b5e7cc157645d87d4b408f03cfebd38`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
