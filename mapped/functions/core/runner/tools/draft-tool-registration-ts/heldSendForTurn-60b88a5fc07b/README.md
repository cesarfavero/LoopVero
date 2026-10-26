# `heldSendForTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-tool-registration.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:541895-541897](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541895-L541897) | `FunctionDeclaration` | não | `host, decisions` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:541895-541897](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541895-L541897) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:541895

Chamadas escritas diretamente neste corpo: `draftByDefaultForTurn`, `host.gates.autoReviewSelector`.

SHA-256 do trecho: `ed84accdda9119b11996e6f26014a1720096c539b127e474fe5b8148e822597d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
