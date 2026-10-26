# `getAbortReasonInfo`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/abort-reason.js` · [README do módulo](../../../../modules/context/abort-reason-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225221-225236](../../../../../reference/runtime/host-main.cjs#L225221-L225236) | `FunctionDeclaration` | não | `reason` |
| [evaluation:83-98](../../../../../reference/runtime/sand-eval-runner.cjs#L83-L98) | `FunctionDeclaration` | não | `reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225221-225236](../../../../../reference/runtime/host-main.cjs#L225221-L225236) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:83-98](../../../../../reference/runtime/sand-eval-runner.cjs#L83-L98) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:225221

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `fb2b61895fa64dc882ed42063f9909c8d8c82afddc10fe536771523b430bbc4c`.

### evaluation:83

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `fb2b61895fa64dc882ed42063f9909c8d8c82afddc10fe536771523b430bbc4c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
