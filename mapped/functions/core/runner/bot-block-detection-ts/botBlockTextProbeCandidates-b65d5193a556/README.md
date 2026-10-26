# `botBlockTextProbeCandidates`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/bot-block-detection.ts` · [README do módulo](../../../../../modules/core/runner/bot-block-detection-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:484448-484463](../../../../../../reference/runtime/sand-eval-runner.cjs#L484448-L484463) | `FunctionDeclaration` | não | `page` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484448-484463](../../../../../../reference/runtime/sand-eval-runner.cjs#L484448-L484463) | 5 | 1 | 0 | 3 | 0 | 0 |

### evaluation:484448

Chamadas escritas diretamente neste corpo: `BOT_BLOCK_SIGNATURES.entries`, `candidates.push`, `matchesSignature`, `needsPageProbe`, `pageFactsOf`.

SHA-256 do trecho: `7150346dbbb0aecab5d62c030be55248bf8b804d05997e9d9470e4efbb05185f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
