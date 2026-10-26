# `renderCurrentSessionPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/session-context-prompt.ts` · [README do módulo](../../../../../modules/core/runner/session-context-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538392-538413](../../../../../../reference/runtime/sand-eval-runner.cjs#L538392-L538413) | `FunctionDeclaration` | não | `session, gates = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538392-538413](../../../../../../reference/runtime/sand-eval-runner.cjs#L538392-L538413) | 11 | 0 | 0 | 3 | 0 | 0 |

### evaluation:538392

Chamadas escritas diretamente neste corpo: `.join`, `audienceLine`, `isGrokBotSlackSessionKind`, `isGrokBotTeamsSessionKind`, `whereLine`.

SHA-256 do trecho: `93305246289bf7b2c379de5e1ba5a009ba6de05a4d14203305e8b2ebdaf83b25`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
