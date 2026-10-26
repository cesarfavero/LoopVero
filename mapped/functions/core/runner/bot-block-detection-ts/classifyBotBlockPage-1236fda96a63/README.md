# `classifyBotBlockPage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/bot-block-detection.ts` · [README do módulo](../../../../../modules/core/runner/bot-block-detection-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:484464-484482](../../../../../../reference/runtime/sand-eval-runner.cjs#L484464-L484482) | `FunctionDeclaration` | não | `page` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484464-484482](../../../../../../reference/runtime/sand-eval-runner.cjs#L484464-L484482) | 4 | 1 | 0 | 4 | 0 | 0 |

### evaluation:484464

Chamadas escritas diretamente neste corpo: `BOT_BLOCK_SIGNATURES.entries`, `facts.hostname.slice`, `matchesSignature`, `needsPageProbe`, `pageFactsOf`, `siteSectionForUrl`, `telemetrySafePageUrl`.

SHA-256 do trecho: `b136d52e1a06360843dfba0c36e3144b37f5d843a9a63661b5e8dad813d22295`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
