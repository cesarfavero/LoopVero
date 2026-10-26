# `whereLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/session-context-prompt.ts` · [README do módulo](../../../../../modules/core/runner/session-context-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538351-538365](../../../../../../reference/runtime/sand-eval-runner.cjs#L538351-L538365) | `FunctionDeclaration` | não | `session, gates` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538351-538365](../../../../../../reference/runtime/sand-eval-runner.cjs#L538351-L538365) | 6 | 0 | 0 | 5 | 0 | 0 |

### evaluation:538351

Chamadas escritas diretamente neste corpo: `slackConversationOf`, `slackWhereLine`, `speakersSentence`, `teamsWhereLine`.

SHA-256 do trecho: `d220c23011a3167bde8e6860b2d8d0506874a099332e6acce55d18ecc8b090cc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
