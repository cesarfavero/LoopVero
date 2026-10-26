# `selectUnconfirmedUserMessages`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/conversation-state.ts` · [README do módulo](../../../../../modules/core/runner/conversation-state-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:529175-529192](../../../../../../reference/runtime/sand-eval-runner.cjs#L529175-L529192) | `FunctionDeclaration` | não | `params` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529175-529192](../../../../../../reference/runtime/sand-eval-runner.cjs#L529175-L529192) | 6 | 0 | 0 | 6 | 0 | 0 |

### evaluation:529175

Chamadas escritas diretamente neste corpo: `.filter`, `recentUserMessages.findIndex`, `recentUserMessages.slice`.

Alvos de atribuição ou incremento: `startIndex`.

SHA-256 do trecho: `8f8fcedafb406307e1a697f9b7190b76705f2e0fe0fadf4695357ef07ed9e446`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
