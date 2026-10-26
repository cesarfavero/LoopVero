# `originatingFlowOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/originating-flow.ts` · [README do módulo](../../../../modules/core/originating-flow-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566742-566744](../../../../../reference/runtime/sand-eval-runner.cjs#L566742-L566744) | `FunctionDeclaration` | não | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566742-566744](../../../../../reference/runtime/sand-eval-runner.cjs#L566742-L566744) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:566742

Chamadas escritas diretamente neste corpo: `ctx.get`, `parseOriginatingFlow`.

SHA-256 do trecho: `d0eef8e66588af2524ab1acd36116be44759a0db9ae8addd010e2b3a9023ec67`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
