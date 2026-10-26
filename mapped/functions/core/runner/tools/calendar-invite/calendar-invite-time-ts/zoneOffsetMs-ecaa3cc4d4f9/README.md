# `zoneOffsetMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/calendar-invite/calendar-invite-time.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/calendar-invite/calendar-invite-time-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764007-764011](../../../../../../../../reference/runtime/host-main.cjs#L764007-L764011) | `FunctionDeclaration` | não | `instantMs, timeZone` |
| [evaluation:557381-557385](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557381-L557385) | `FunctionDeclaration` | não | `instantMs, timeZone` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764007-764011](../../../../../../../../reference/runtime/host-main.cjs#L764007-L764011) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557381-557385](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557381-L557385) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:764007

Chamadas escritas diretamente neste corpo: `Date.UTC`, `Math.floor`, `wallClockOfInstant`.

SHA-256 do trecho: `4f33bc985c8caa0a94de966ef498e14e63b5b6357e4623a6143a0c3ce64baa55`.

### evaluation:557381

Chamadas escritas diretamente neste corpo: `Date.UTC`, `Math.floor`, `wallClockOfInstant`.

SHA-256 do trecho: `fecf317f7a3c4da8cbe1955487feac10b250db34e85f8f96601431c6b196f05e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
