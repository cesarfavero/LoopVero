# `omitInAppFields`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:741997-741999](../../../../../../../reference/runtime/host-main.cjs#L741997-L741999) | `FunctionDeclaration` | não | `schema3, mask` |
| [evaluation:482944-482946](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482944-L482946) | `FunctionDeclaration` | não | `schema3, mask` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741997-741999](../../../../../../../reference/runtime/host-main.cjs#L741997-L741999) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:482944-482946](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482944-L482946) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:741997

Chamadas escritas diretamente neste corpo: `schema3.omit`.

SHA-256 do trecho: `5139390c1622bdd69a46246fb7d5fd1dbb66f08716622a0f74891b985907ebf2`.

### evaluation:482944

Chamadas escritas diretamente neste corpo: `schema3.omit`.

SHA-256 do trecho: `5139390c1622bdd69a46246fb7d5fd1dbb66f08716622a0f74891b985907ebf2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
