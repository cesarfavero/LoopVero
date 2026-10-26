# `withoutServerPrefix`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-auto-review-summaries.ts` · [README do módulo](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:491113-491121](../../../../../../reference/runtime/sand-eval-runner.cjs#L491113-L491121) | `FunctionDeclaration` | não | `words, server` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:491113-491121](../../../../../../reference/runtime/sand-eval-runner.cjs#L491113-L491121) | 2 | 1 | 0 | 2 | 0 | 0 |

### evaluation:491113

Chamadas escritas diretamente neste corpo: `server.startsWith`, `words.entries`, `words.slice`.

Alvos de atribuição ou incremento: `spelled`.

SHA-256 do trecho: `0126fe52cdc160d6e4d4e04b9e1f58395ccde585712978a79d4b430d02d716a0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
