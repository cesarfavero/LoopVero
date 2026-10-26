# `stripSandPromptMarkers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/runner/transcript-trace.ts` · [README do módulo](../../../../../modules/core/runner/transcript-trace-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765651-765653](../../../../../../reference/runtime/host-main.cjs#L765651-L765653) | `FunctionDeclaration` | não | `text3` |
| [evaluation:559016-559018](../../../../../../reference/runtime/sand-eval-runner.cjs#L559016-L559018) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765651-765653](../../../../../../reference/runtime/host-main.cjs#L765651-L765653) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559016-559018](../../../../../../reference/runtime/sand-eval-runner.cjs#L559016-L559018) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:765651

Chamadas escritas diretamente neste corpo: `stripLeadingHiddenPromptMarker`, `stripLeadingTrustedAutomationPromptMarker`.

SHA-256 do trecho: `60eb1982adb6010a08f4ac22829ed5de8a39da85032701db5ed9f150eebbcd5c`.

### evaluation:559016

Chamadas escritas diretamente neste corpo: `stripLeadingHiddenPromptMarker`, `stripLeadingTrustedAutomationPromptMarker`.

SHA-256 do trecho: `60eb1982adb6010a08f4ac22829ed5de8a39da85032701db5ed9f150eebbcd5c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
