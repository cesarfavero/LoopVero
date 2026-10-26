# `shipmentLinkInText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/shipment-card.ts` · [README do módulo](../../../../../modules/shared/transcript/shipment-card-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:707191-707199](../../../../../../reference/runtime/host-main.cjs#L707191-L707199) | `FunctionDeclaration` | não | `text3, card` |
| [evaluation:481314-481322](../../../../../../reference/runtime/sand-eval-runner.cjs#L481314-L481322) | `FunctionDeclaration` | não | `text3, card` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707191-707199](../../../../../../reference/runtime/host-main.cjs#L707191-L707199) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:481314-481322](../../../../../../reference/runtime/sand-eval-runner.cjs#L481314-L481322) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:707191

Chamadas escritas diretamente neste corpo: `.includes`, `Array.from`, `linkKey`, `text3.matchAll`.

SHA-256 do trecho: `54317ff3b8a0d829ac9f9d06409ec32d32b744eb6c36497064ca9c951eb4083b`.

### evaluation:481314

Chamadas escritas diretamente neste corpo: `.includes`, `Array.from`, `linkKey`, `text3.matchAll`.

SHA-256 do trecho: `54317ff3b8a0d829ac9f9d06409ec32d32b744eb6c36497064ca9c951eb4083b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
