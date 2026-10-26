# `ActiveSpendRequest.bindRun`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/background-work/active-spend-request.ts` · [README do módulo](../../../../../../modules/core/runner/background-work/active-spend-request-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:490741-490749](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490741-L490749) | `method` | não | `run, body` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490741-490749](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490741-L490749) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490741

Chamadas escritas diretamente neste corpo: `.finally`, `body`.

Alvos de atribuição ou incremento: `this.binding`.

SHA-256 do trecho: `e45f015edebd0dd823c36bc4652b2a679aaf063624bb36acccc9cae211a3f276`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
